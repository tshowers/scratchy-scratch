import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LickAppWidgetSectionEditComponent } from 'lick-app-widget-section-edit';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload, Store, Dropdown, Section } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, STORES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  readonly STORES = STORES;

  public Editor = ClassicEditor;

  categories: Dropdown[];

  store: Store = new Store();

  public logo;

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild(LickAppWidgetSectionEditComponent) sectionEdit: LickAppWidgetSectionEditComponent;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  searchArgument;


  canDelete: boolean = true;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, public typeFindService: TypeFindService, private _uploadService: UploadService, private _dropdownService: DropdownService, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { store: Store }) => {
        console.log("Store=", data.store)
        if (data.store) {
          this.store = data.store;
          this.setBreadCrumb();
          if (this.store.name)
            this.searchArgument = this.store.name;
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {

    this.crumbs = [
      { name: "dashboard", link: "/stores/dashboard", active: false },
      { name: "stores", link: "//stores", active: false },
      { name: (this.store.id ? (this.store.name) : "edit"), link: (this.store.id ? (`/stores/${this.store.id}`) : "/stores/new"), active: true },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSubmit(): void {
    this.modelCheck();
    (this.store.id ? this.onUpdate() : this.saveNewStore());
  }

  deleteAttachment() {
    console.log("deleteAttachment()");
    this.selectedFiles = null;
  }

  private redirect(redirectPath): void {
    if (!this.currentUpload) {
      // console.log("No upload", this.currentUpload, redirectPath)
      this.router.navigate([redirectPath]);
    }
    else {
      // console.log("Uploading", this.currentUpload, redirectPath)
      let uploadCheck = setInterval(() => {
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
        this.currentUpload.store_id = this.store.id;
        this._uploadService.pushFileToStorage(this.currentUpload, STORES, '/stores/' + this.store.id, this.store, this.dm.db);
      }
    }
  }

  public detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  onUpdate(): void {
    this.dm.db.updateData(STORES, this.store.id, this.store);
    const redirectPath = '/stores/' + this.store.id;
    this.uploadSingle();
    this.redirect(redirectPath);
  }

  onDelete(): void {
    this.store.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewStore(): void {
    this.dm.db.writeData(STORES, this.store).subscribe((key) => {
      this.store.id = key;
      const redirectPath = '/stores/' + this.store.id;
      this.uploadSingle();
      this.redirect(redirectPath);
    });
  }

  onBrandNew(): void {
    this.store = new Store();
  }

  modelCheck() {
    this.sectionEdit.modelCheck();
  }


  uploadMulti() {
    let files = this.selectedFiles
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.currentUpload = new Upload(files[i]);
        this.currentUpload.store_id = this.store.id;
        this._uploadService.pushFileToStorage(this.currentUpload, STORES, '/stores/' + this.store.id, this.store, this.dm.db);
      }
    }
  }



  onSearch(value): void {
    this.router.navigate(['stores'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.store, null, 2)
  }

}
