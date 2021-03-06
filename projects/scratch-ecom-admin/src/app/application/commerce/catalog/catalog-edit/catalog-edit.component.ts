import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Catalog, Store, Dropdown, Upload, Section } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, CATALOGS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { BreadCrumbService, CATALOG } from '../../../../shared/services/bread-crumb.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LickAppWidgetSectionEditComponent } from 'lick-app-widget-section-edit';
import {LickyLoggerService} from 'licky-services';

@Component({
  selector: 'app-catalog-edit',
  templateUrl: './catalog-edit.component.html',
  styleUrls: ['./catalog-edit.component.css']
})
export class CatalogEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  catalog: Catalog = new Catalog();

  public Editor = ClassicEditor;

  catalogTypes: Dropdown[];

  private _paramSubscription: Subscription;

  private _catalogSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  searchArgument;

  canDelete: boolean = true;

  @ViewChild(LickAppWidgetSectionEditComponent) sectionEdit: LickAppWidgetSectionEditComponent;

  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    public breadCrumbService: BreadCrumbService, 
    public typeFindService: TypeFindService,
    private _dropdownService: DropdownService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initializeDropdowns();
    this._route.data
      .subscribe((data: { catalog: Catalog }) => {
        if (data.catalog) {
          this.catalog = data.catalog;
          this.store_id = this.catalog.store_id
          this.setStoreContext();
          LickyLoggerService.log(">>>>>>>", JSON.stringify( this.catalog))
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
    if (this._catalogSubscription)
      this._catalogSubscription.unsubscribe();
  }

  onSubmit(): void {
    this.modelCheck();
    (this.catalog.id ? this.onUpdate() : this.saveNewCatalog());
  }

  onUpdate(): void {
    this.dm.db.updateData(CATALOGS + "/" + this.store_id, this.catalog.id, this.catalog);
    const redirectPath = '/stores/' + this.store_id + '/catalogs/' + this.catalog.id;
    this.uploadSingle();
    this.redirect(redirectPath);
  }

  onDelete(): void {
    this.catalog.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewCatalog(): void {
    this.dm.db.writeData(CATALOGS + "/" + this.store_id, this.catalog).subscribe((key) => {
      this.catalog.id = key;
      const redirectPath = '/stores/' + this.store_id + '/catalogs/' + this.catalog.id;
      this.uploadSingle();
      this.redirect(redirectPath);
    });
  }

  private redirect(redirectPath): void {
    if (!this.currentUpload) {
      LickyLoggerService.log(null, "NO UPLOAD");
      this.router.navigate([redirectPath]);
    }
    else {
      let uploadCheck = setInterval(() => {
        LickyLoggerService.log(null, "UPLOAD PROGRESS=" + this.currentUpload.progress);
        if (this.currentUpload.progress >= 100) {
          clearInterval(uploadCheck);
          this.router.navigate([redirectPath]);
        }
      }, 1000)
    }
  }


  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.catalog_id = this.catalog.id;
        this._uploadService.pushFileToStorage(this.currentUpload, CATALOGS + '/' + this.store_id, '/stores/' + this.store_id, this.catalog, this.dm.db);
      }
    }
  }

  deleteAttachment() {
    this.selectedFiles = null;
  }

  public detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  onBrandNew(): void {
    this.catalog = new Catalog();
  }


  setBreadCrumb(): void {
    this.breadCrumbService.setContext(CATALOG);
    this.breadCrumbService.setBreadCrumb(this.store_id, this.catalog.id);
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
        });
      this.setStore();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setBreadCrumb();
    })
  }

  private initializeDropdowns(): void {
    this.catalogTypes = this._dropdownService.getEmailTypes();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value) : void {
    this.router.navigate([ 'stores', this.store_id, 'catalogs'], {queryParams: { searchArgument: value}})
  }

  modelCheck() {
    this.sectionEdit.modelCheck();
  }


  get diagnostic() {
    return JSON.stringify(this.catalog, null, 2)
      + ", store_id=" + this.store_id
      + ", STORE=" + JSON.stringify(this.store, null, 2)
  }

}
