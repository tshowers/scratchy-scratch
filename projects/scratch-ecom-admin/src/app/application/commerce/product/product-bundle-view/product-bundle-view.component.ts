import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductBundle, Store, Catalog } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PRODUCT_BUNDLES } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { BreadCrumbService, PRODUCT_BUNDLE } from '../../../../shared/services/bread-crumb.service';
import { LickyLoggerService } from 'licky-services';

@Component({
  selector: 'app-product-bundle-view',
  templateUrl: './product-bundle-view.component.html',
  styleUrls: ['./product-bundle-view.component.css']
})
export class ProductBundleViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  productBundle: ProductBundle;

  canEdit = true;

  canDelete = true;

  searchArgument;

  private _paramSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    public breadCrumbService: BreadCrumbService,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { productBundle: ProductBundle }) => {
        this.productBundle = data.productBundle;
        this.store_id = this.productBundle.store_id
        this.setCatalogContext();
        this.searchArgument = this.productBundle.name;
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setContext(PRODUCT_BUNDLE);
    this.breadCrumbService.setBreadCrumb(this.store_id, this.catalog_id);
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  private setCatalogContext(): void {
    if (this._route.snapshot.params['id2']) {
      this.catalog_id = this._route.snapshot.params['id2'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.catalog_id = this._route.snapshot.params['id2'];
        });
      this.setStore();
      this.setCatalog();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.store_id, this.catalog_id);
    this.dm.store.subscribe((catalog) => {
      if (catalog) {
        this.catalog = catalog;
      } else {
        this.catalog = null;
      }
    })
    this.setBreadCrumb();
  }



  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles', this.productBundle.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.dm.db.setDeleted(PRODUCT_BUNDLES + "/" + this.store_id, this.productBundle.id, this.productBundle);
    this.router.navigate(['stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles']);
  }

  onSearch(value): void {
    LickyLoggerService.log("ONSEARCH", value);
    this.router.navigate(['stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.productBundle, null, 2)
  }

}
