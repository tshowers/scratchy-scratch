import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, Offer, Product } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { STORES } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { BreadCrumbService, STORE } from '../../../../shared/services/bread-crumb.service';
import { LickyLoggerService } from 'licky-services';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store: Store;

  canEdit = true;

  canDelete = true;

  searchArgument;

  isImage: boolean = false;

  offers: Offer[];

  products: Product[];

  private _offersSubscription: Subscription;

  private _productSubscription: Subscription;

  offer1: Offer;

  offer2: Offer;

  images = [];

  DEFAULT_SMALL = "assets/images/default-small.png";


  constructor(public breadCrumbService: BreadCrumbService, public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { store: Store }) => {
        this.store = data.store;
        this.isImage = (this.store.url && ((this.store.url.indexOf('.tiff') > 0) || (this.store.url.indexOf('.jpg') > 0) || (this.store.url.indexOf('.gif') > 0) || (this.store.url.indexOf('.png') > 0) || (this.store.url.indexOf('.jpeg') > 0)))
        this.setBreadCrumb();
        this.searchArgument = this.store.name;
        this.setOffers();
        this.setProducts();
      });
  }



  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._offersSubscription)
      this._offersSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setContext(STORE);
    this.breadCrumbService.setBreadCrumb(this.store.id);
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate([ 'stores', this.store.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onCatalog() {
    this.router.navigate([ 'stores', this.store.id, 'catalogs'])
  }

  onOffer1(): void {
    this.router.navigate([ 'stores', this.store.id, 'catalogs', this.offer1.catalog_id, 'offers', this.offer1.id]);
  }

  onOffer2(): void {
    this.router.navigate([ 'stores', this.store.id, 'catalogs', this.offer1.catalog_id, 'offers', this.offer2.id]);
  }

  onProduct(item) : void {
    this.router.navigate([ 'stores', this.store.id, 'catalogs', item.catalog_id, 'products', item.id]);
  }


  setOffers() {
    this.dm.doOffers(this.store.id);
    this._offersSubscription = this.dm.offers.subscribe((offers) => {
      if (offers) {
        this.setPageOffers(offers);
        this.offers = offers;
      } else {
        this.offers = null;
      }
    })
  }

  setProducts() {
    this.dm.doProducts(this.store.id);
    this._productSubscription = this.dm.products.subscribe((products) => {
      LickyLoggerService.info("setProducts", JSON.stringify(products));
      if (products) {
        this.products = products.slice(0,3);
        this.setLightBoxImages(this.products);
      } else {
        this.products = null;
      }
    })
  }

  private setLightBoxImages(products: Product[]): void {
    for (let i = 0; i < products.length; i++) {
      if (products[i].url)
        this.images.push({ src: products[i].url, caption: products[i].name, thumb: (products[i].icon ? products[i].icon : this.DEFAULT_SMALL) });
      if (i > 4)
        break;
    }
  }

  private setPageOffers(offers: Offer[]): void {

    const today = new Date().getTime()
    for (let i = 0; i < offers.length; i++) {
      LickyLoggerService.log("Comparing", today + offers[i].expirationDate)
      if (offers[i].expirationDate < today) {
        if (!this.offer1 && offers[i].url)
          this.offer1 = offers[i];
        else if (!this.offer2 && offers[i].url) {
          this.offer2 = offers[i];
          break;
        }

      }
    }

  }

  onDelete() {
    this.dm.db.setDeleted(STORES, this.store.id, this.store);
    this.router.navigate([ 'stores']);
  }

  onSearch(value): void {
    LickyLoggerService.log("ONSEARCH", value);
    this.router.navigate([ 'stores'], { queryParams: { searchArgument: value } })
  }

  onBuy(): void {
    LickyLoggerService.log(null, "Buy Click");
  }

  get diagnostic() {
    return JSON.stringify(this.store, null, 2)
  }

}
