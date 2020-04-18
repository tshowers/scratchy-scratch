import { Injectable } from '@angular/core';
import { Crumb } from 'lick-app-widget-breadcrumb';

export const HOME = "home";
export const DASHBOARD = "dashboard";
export const STORE = "store";
export const CATALOG = "catalog";
export const PRODUCT = "product";
export const PRODUCT_BUNDLE = "product-bundle";
export const OFFER = "offer";
export const PAYMENT = "payment";
export const ORDER = "order";
export const INVOICE = "invoice";

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {

  public crumbs: Crumb[];
  private _context;


  constructor() { }

  setBreadCrumb(store_id?: string, catalog_id?: string): void {
    this.crumbs = [];
    this.crumbs = [
      { name: "home", link: "/", active: (this._context === HOME) },
      { name: "dashboard", link: "/stores/dashboard", active: (this._context === DASHBOARD) },
      { name: "stores", link: "/stores", active: (this._context === STORE) },
    ];

    if (store_id && catalog_id)
      this.pushCatalogItems(store_id, catalog_id);
    else if (store_id)
      this.pushStoreItems(store_id);
    
    this.setNewLink(store_id, catalog_id);
  }

  private pushStoreItems(store_id: string): void {
    this.crumbs.push({ name: "catalogs", link: "/stores/" + store_id + "/catalogs", active: (this._context === CATALOG) });
    this.crumbs.push({ name: "catalogs", link: "/stores/" + store_id + "/orders", active: (this._context === ORDER) });
    this.crumbs.push({ name: "catalogs", link: "/stores/" + store_id + "/payments", active: (this._context === PAYMENT) });
  }

  private pushCatalogItems(store_id: string, catalog_id: string): void {
    this.crumbs.push({ name: "products", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/products", active: (this._context === PRODUCT) });
    this.crumbs.push({ name: "product bundles", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/product-bundles", active: (this._context === PRODUCT_BUNDLE) });
    this.crumbs.push({ name: "offers", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/offers", active: (this._context === OFFER) });
  }

  private setNewLink(store_id?: string, catalog_id?: string): void {
    if (this._context === STORE)
      this.crumbs.push({ name: "create a store", link: "/stores/new", active: false });
    else if (store_id && catalog_id) {
      if (this._context === PRODUCT) {
        this.crumbs.push({ name: "create a new product", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/products/new", active: false });
      } else if (this._context === PRODUCT_BUNDLE) {
        this.crumbs.push({ name: "create a new product bundle", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/product-bundles/new", active: false });
      } else if (this._context === OFFER) {
        this.crumbs.push({ name: "create a new offer", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/offers/new", active: false });
      }
    } else if (store_id) {
      if (this._context === CATALOG) {
        this.crumbs.push({ name: "create a new catalog", link: "/stores/" + store_id + "/catalogs/new", active: false });
      } else if (this._context === PAYMENT) {
        this.crumbs.push({ name: "create a new catalog", link: "/stores/" + store_id + "/payments/new", active: false });
      } else if (this._context === ORDER) {
        this.crumbs.push({ name: "create a new catalog", link: "/stores/" + store_id + "/orders/new", active: false });
      }
    }
  }


  getBreadCrumb(): Crumb[] {
    return this.crumbs;
  }

  setContext(context: string): void {
    this._context = context;
  }
}
