import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Offer, Store, Catalog, Dropdown, Upload, Section } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, OFFERS, STORES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { BreadCrumbService, OFFER } from '../../../../shared/services/bread-crumb.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LickAppWidgetSectionEditComponent } from 'lick-app-widget-section-edit';
import { LickyLoggerService } from 'licky-services';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  readonly OFFERS = OFFERS;

  readonly STORES = STORES;

  public Editor1 = ClassicEditor;
  public Editor2 = ClassicEditor;

  canDelete: boolean = true;

  offer: Offer = new Offer();

  offerTypes: Dropdown[];

  products: Dropdown[];

  offerCategories: Dropdown[];

  private _paramSubscription: Subscription;

  private _offerSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  searchArgument;

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
    this._route.data
      .subscribe((data: { offer: Offer }) => {
        if (data.offer) {
          this.offer = data.offer;
          this.store_id = this.offer.store_id;
          this.setVisualDate();
          this.setStoreContext();
          this.initializeDropdowns();
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
    if (this._offerSubscription)
      this._offerSubscription.unsubscribe();
  }

  setVisualDate() : void {
    if (this.offer.expirationDate) {
      let ngBootstrapDate = new Date(this.offer.expirationDate);
      this.offer.expirationDate = ({ year: ngBootstrapDate.getFullYear(), month: (ngBootstrapDate.getMonth() + 1), day: ngBootstrapDate.getDate() })
    }

  }

  onSubmit(): void {
    LickyLoggerService.log(null, "Check for sections");
    this.modelCheck();
    LickyLoggerService.log(null, "Submitting offer");
    (this.offer.id ? this.onUpdate() : this.saveNewOffer());
  }

  onUpdate(): void {
    this.dm.db.updateData(OFFERS + "/" + this.store_id, this.offer.id, this.offer);
    const redirectPath = '/stores/' + this.store_id + '/catalogs/' + this.offer.catalog_id + '/offers/' + this.offer.id;
    this.uploadSingle();
    this.redirect(redirectPath);
  }

  onDelete(): void {
    this.offer.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewOffer(): void {
    this.dm.db.writeData(OFFERS + "/" + this.store_id, this.offer).subscribe((key) => {
      this.offer.id = key;
      const redirectPath = '/stores/' + this.store_id + '/catalogs/' + this.catalog_id + '/offers/' + this.offer.id;
      this.uploadSingle();
      this.redirect(redirectPath);
    });
  }

  private redirect(redirectPath): void {
    if (!this.currentUpload) {
      this.router.navigate([redirectPath]);
    }
    else {
      let uploadCheck = setInterval(() => {
        if (this.currentUpload.progress >= 100) {
          clearInterval(uploadCheck);
          this.router.navigate([redirectPath]);
        }
      }, 2000)
    }
  }


  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.offer_id = this.offer.id;
        this._uploadService.pushFileToStorage(this.currentUpload, OFFERS + "/" + this.store_id, '/stores/' + this.store_id, this.offer, this.dm.db);
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
    this.offer = new Offer();
  }


  setBreadCrumb(): void {
    this.breadCrumbService.setContext(OFFER);
    this.breadCrumbService.setBreadCrumb(this.store_id, this.catalog_id);
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this.catalog_id = this._route.snapshot.params['id2'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
          this.catalog_id = this._route.snapshot.params['id2'];
        });
      this.setStore();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setCatalog();
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.store_id, this.catalog_id);
    this.dm.catalog.subscribe((catalog) => {
      this.catalog = catalog;
      this.setBreadCrumb();
    })
  }


  private initializeDropdowns(): void {
    this.doProducts();
    this.offerTypes = this._dropdownService.getOfferTypes();
    this.offerCategories = this._dropdownService.getCategories();
  }

  private doProducts(): void {
    this.dm.doProducts(this.store_id);
    this.dm.products.subscribe((products) => {
      if (products)
        this.products = this._dropdownService.getDataToDropdown(products);
    })
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {
    this.router.navigate([ 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers'], { queryParams: { searchArgument: value } })
  }

  modelCheck() {
    if (!this.sectionEdit) return
    this.sectionEdit.modelCheck();
  }


  get diagnostic() {
    return JSON.stringify(this.offer, null, 2)
      + ", store_id=" + this.store_id
      + ", STORE=" + JSON.stringify(this.store, null, 2)
  }

}
