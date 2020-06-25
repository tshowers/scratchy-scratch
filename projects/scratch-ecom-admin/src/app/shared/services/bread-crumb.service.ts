import { Injectable } from '@angular/core';
import { Crumb } from 'lick-app-widget-breadcrumb';

export const HOME = "home";
export const DASHBOARD = "dashboard";
export const SETTING_GENERAL = "setting-general";
export const SETTING_DISPLAY_NAME = "setting-display-name";
export const SETTING_AVATAR = "setting-avatar";
export const SETTING_EMAIL_ADDRESS = "setting-email-address";
export const SETTING_VERIFY = "setting-verify";
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
    this.setNewLink(store_id, catalog_id);
    // this.crumbs.push({ name: "home", link: "/", active: (this._context === HOME) });
    this.crumbs.push({ name: "dashboard", link: "/stores/dashboard", active: (this._context === DASHBOARD) });
    this.pushStore(store_id);
    this.pushSetting();
    this.pushCatalog(store_id, catalog_id);
    if (store_id && catalog_id)
      this.pushCatalogItems(store_id, catalog_id);
    else if (store_id)
      this.pushStoreItems(store_id);

  }

  private pushSetting(): void {
    if (this._context === SETTING_GENERAL) {
      this.crumbs.push({ name: "settings", link: "/stores/general-settings", active: (this._context === SETTING_GENERAL) })
    } else if (this._context === SETTING_DISPLAY_NAME) {
      this.crumbs.push({ name: "settings", link: "/stores/general-settings", active: (this._context === SETTING_GENERAL) })
      this.crumbs.push({ name: "display name", link: "/stores/settings-display-name", active: (this._context === SETTING_DISPLAY_NAME) })
    } else if (this._context === SETTING_AVATAR) {
      this.crumbs.push({ name: "settings", link: "/stores/general-settings", active: (this._context === SETTING_GENERAL) })
      this.crumbs.push({ name: "display name", link: "/stores/settings-avatar", active: (this._context === SETTING_AVATAR) })
    } else if (this._context === SETTING_EMAIL_ADDRESS) {
      this.crumbs.push({ name: "settings", link: "/stores/general-settings", active: (this._context === SETTING_GENERAL) })
      this.crumbs.push({ name: "display name", link: "/stores/settings-email-address", active: (this._context === SETTING_EMAIL_ADDRESS) })
    } else if (this._context === SETTING_VERIFY) {
      this.crumbs.push({ name: "settings", link: "/stores/general-settings", active: (this._context === SETTING_GENERAL) })
      this.crumbs.push({ name: "display name", link: "/stores/settings-verify", active: (this._context === SETTING_VERIFY) })
    }

  }

  private pushStore(store_id: string): void {
    this.crumbs.push({ name: "stores", link: "/stores", active: ((this._context === STORE) && (!store_id)) });
    if (store_id) {
      this.crumbs.push({ name: "current store", link: "/stores/" + store_id, active: (((store_id) ? true : false) && (this._context === STORE)) });
    }
  }

  private pushCatalog(store_id: string, catalog_id: string) {
    if (((this._context === STORE) && store_id) || (this._context === CATALOG) || (this._context === PRODUCT) || (this._context === PRODUCT_BUNDLE)) {
      this.crumbs.push({ name: "catalogs", link: "/stores/" + store_id + "/catalogs", active: ((this._context === CATALOG) && (!catalog_id)) });
      if (catalog_id)
        this.crumbs.push({ name: "current catalog", link: "/stores/" + store_id + "/catalogs/" + catalog_id, active: ((catalog_id ? true : false) && (this._context === CATALOG)) });
    }
  }

  private pushStoreItems(store_id: string): void {
    if ((this._context === STORE) || (this._context === PAYMENT) || (this._context === ORDER) || (this._context === INVOICE)) {
      this.crumbs.push({ name: "orders", link: "/stores/" + store_id + "/orders", active: (this._context === ORDER) });
      this.crumbs.push({ name: "payments", link: "/stores/" + store_id + "/payments", active: (this._context === PAYMENT) });
    }
  }


  private pushCatalogItems(store_id: string, catalog_id: string): void {
    this.crumbs.push({ name: "products", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/products", active: (this._context === PRODUCT) });
    this.crumbs.push({ name: "product bundles", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/product-bundles", active: (this._context === PRODUCT_BUNDLE) });
    this.crumbs.push({ name: "offers", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/offers", active: (this._context === OFFER) });
  }

  private setNewLink(store_id?: string, catalog_id?: string): void {
    if (store_id && catalog_id) {
      this.setNewCatalogContextItems(store_id, catalog_id);
    } else if (store_id) {
      this.setNewStoreContextItems(store_id);
    } else if ((this._context === STORE) || (this._context === DASHBOARD)) {
      this.crumbs.push({ name: "create a store", link: "/stores/new", active: false });
    }
  }

  private setNewCatalogContextItems(store_id?: string, catalog_id?: string): void {
    if ((this._context === PRODUCT)) {
      this.crumbs.push({ name: "new product", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/products/new", active: false });
    } else if ((this._context === PRODUCT_BUNDLE)) {
      this.crumbs.push({ name: "new product bundle", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/product-bundles/new", active: false });
    } else if ((this._context === OFFER)) {
      this.crumbs.push({ name: "new offer", link: "/stores/" + store_id + "/catalogs/" + catalog_id + "/offers/new", active: false });
    }
  }

  private setNewStoreContextItems(store_id?: string): void {
    if ((this._context === CATALOG)) {
      this.crumbs.push({ name: "new catalog", link: "/stores/" + store_id + "/catalogs/new", active: false });
    } else if ((this._context === ORDER)) {
      this.crumbs.push({ name: "new order", link: "/stores/" + store_id + "/orders/new", active: false });
    } else if (this._context === PAYMENT) {
      this.crumbs.push({ name: "new payment", link: "/stores/" + store_id + "/payments/new", active: false });
    } else if (this._context === STORE) {
      this.crumbs.push({ name: "create a store", link: "/stores/new", active: false });
    }
  }

  getBreadCrumb(): Crumb[] {
    return this.crumbs;
  }

  setContext(context: string): void {
    this._context = context;
  }
}
