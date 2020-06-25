import { Injectable, OnDestroy } from '@angular/core';
import { SortHelperService, NewsService, FirebaseDataService, LickyLoginService, MESSAGES, STORES, RECEIPTS, INVOICES, SHOPPING_CARTS, PRODUCTS, CATALOGS, PAYMENTS, OFFERS, ORDERS, PRODUCT_BUNDLES, CONTACTS } from 'licky-services';
import { Subscription, BehaviorSubject, Subject } from 'rxjs';
import { Message, Contact, Store, Product, Catalog, Payment, Offer, ProductBundle, Order, Invoice, Receipt, ShoppingCart, User } from 'lick-data';
import { LickyLoggerService } from 'licky-services';

@Injectable({
  providedIn: 'root'
})
export class DataMediationService implements OnDestroy {

  public user: User;


  public firebaseUser;

  public photoURL;
  public displayName;
  public emailAddress;
  public loggedIn;
  public userName;
  public emailVerified;

  setupTimer;

  public store = new Subject<Store>();
  public stores = new BehaviorSubject<Store[]>(null);
  private _stores: Store[];
  private _storeSubscription: Subscription;

  public product = new Subject<Product>();
  public products = new BehaviorSubject<Product[]>(null);
  private _products: Product[];
  private _productSubscription: Subscription;

  public catalog = new Subject<Catalog>();
  public catalogs = new BehaviorSubject<Catalog[]>(null);
  private _catalogs: Catalog[];
  private _catalogSubscription: Subscription;

  public payment = new Subject<Payment>();
  public payments = new BehaviorSubject<Payment[]>(null);
  private _payments: Payment[];
  private _paymentSubscription: Subscription;

  public offer = new Subject<Offer>();
  public offers = new BehaviorSubject<Offer[]>(null);
  private _offers: Offer[];
  private _offerSubscription: Subscription;

  public productBundle = new Subject<ProductBundle>();
  public productBundles = new BehaviorSubject<ProductBundle[]>(null);
  private _productBundles: ProductBundle[];
  private _productBundleSubscription: Subscription;

  public invoice = new Subject<Invoice>();
  public invoices = new BehaviorSubject<Invoice[]>(null);
  private _invoices: Invoice[];
  private _invoiceSubscription: Subscription;

  public receipt = new Subject<Receipt>();
  public receipts = new BehaviorSubject<Receipt[]>(null);
  private _receipts: Receipt[];
  private _receiptSubscription: Subscription;

  public order = new Subject<Order>();
  public orders = new BehaviorSubject<Order[]>(null);
  private _orders: Order[];
  private _orderSubscription: Subscription;

  public shoppingCart = new Subject<ShoppingCart>();
  public shoppingCarts = new BehaviorSubject<ShoppingCart[]>(null);
  private _shoppingCarts: ShoppingCart[];
  private _shoppingCartSubscription: Subscription;

  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;

  private _contactSubscription: Subscription;
  public contacts = new BehaviorSubject<Contact[]>(null);
  private _contacts: Contact[];


  constructor(public newsService: NewsService, public loginService: LickyLoginService, public db: FirebaseDataService, public sortHelper: SortHelperService) {
    this.setFirebaseUser();
    this.setUser();
  }

  ngOnDestroy() {
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
    if (this._productSubscription)
      this._productSubscription.unsubscribe();
    if (this._catalogSubscription)
      this._catalogSubscription.unsubscribe();
    if (this._paymentSubscription)
      this._paymentSubscription.unsubscribe();
    if (this._offerSubscription)
      this._offerSubscription.unsubscribe();
    if (this._productBundleSubscription)
      this._productBundleSubscription.unsubscribe();
    if (this._invoiceSubscription)
      this._invoiceSubscription.unsubscribe();
    if (this._receiptSubscription)
      this._receiptSubscription.unsubscribe();
    if (this._orderSubscription)
      this._orderSubscription.unsubscribe();
    if (this._firebaseUserSubscription)
      this._firebaseUserSubscription.unsubscribe();
    if (this._shoppingCartSubscription)
      this._shoppingCartSubscription.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  public canRead(): boolean {
    return this.loginService.canRead();
  }
  public canEdit(): boolean {
    return this.loginService.canEdit();
  }
  public canDelete(): boolean {
    return this.loginService.canDelete();
  }


  public doStores(): void {
    this.waitForUserSet();
  }

  public doProducts(store_id: string): void {
    this._productSubscription = this.db.getDataCollection(PRODUCTS + "/" + store_id)
      .subscribe((productData: Product[]) => {
        LickyLoggerService.info("doProducts", store_id + " - " + productData);
        if (productData) {
          this._products = this.getProductListToArray(productData);
          this.products.next(this._products);
        } else {
          this._products = null;
          this.products.next(null);
        }
      });
  }


  public getProductListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doProductFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doProductFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doCatalogs(store_id: string): void {
    this._catalogSubscription = this.db.getDataCollection(CATALOGS + "/" + store_id)
      .subscribe((catalogData: Catalog[]) => {
        if (catalogData) {
          this._catalogs = this.getCatalogListToArray(catalogData);
          this.catalogs.next(this._catalogs);
        } else {
          this._catalogs = null;
          this.catalogs.next(null);
        }
      });
  }

  public getCatalogListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doCatalogFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doCatalogFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doPayments(store_id: string): void {
    this._paymentSubscription = this.db.getDataCollection(PAYMENTS + "/" + store_id)
      .subscribe((paymentData: Payment[]) => {
        if (paymentData) {
          this._payments = this.getPaymentListToArray(paymentData);
          this.payments.next(this._payments);
        } else {
          this._payments = null;
          this.payments.next(null);
        }
      });
  }

  public getPaymentListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doPaymentFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doPaymentFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doOffers(store_id: string): void {
    this._offerSubscription = this.db.getDataCollection(OFFERS + "/" + store_id)
      .subscribe((offerData: Offer[]) => {
        if (offerData) {
          this._offers = this.getOfferListToArray(offerData);
          this.offers.next(this._offers);
        } else {
          this._offers = null;
          this.offers.next(null);
        }
      });
  }

  public getOfferListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doOfferFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doOfferFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }


  public doProductBundles(store_id: string): void {
    this._productBundleSubscription = this.db.getDataCollection(PRODUCT_BUNDLES + "/" + store_id)
      .subscribe((productBundleData: ProductBundle[]) => {
        if (productBundleData) {
          this._productBundles = this.getProductBundleListToArray(productBundleData);
          this.productBundles.next(this._productBundles);
        } else {
          this._productBundles = null;
          this.productBundles.next(null);
        }
      });
  }

  public getProductBundleListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doProductBundleFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doProductBundleFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doOrders(store_id: string): void {
    this._orderSubscription = this.db.getDataCollection(ORDERS + "/" + store_id)
      .subscribe((orderData: Order[]) => {
        if (orderData) {
          this._orders = this.getOrderListToArray(orderData);
          this.orders.next(this._orders);
        } else {
          this._orders = null;
          this.orders.next(null);
        }
      });
  }

  public doContacts(): void {
    this._contactSubscription = this.db.getDataCollection(CONTACTS)
      .subscribe((contactData: Contact[]) => {
        if (contactData) {
          this._contacts = this.db.getListToArray(contactData);
          this.contacts.next(this._contacts);
        } else {
          this._contacts = null;
          this.contacts.next(null);
        }
      });

  }

  public getOrderListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doOrderFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doOrderFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }


  public doStore(id: string): void {
    this.db.getData(STORES, id).subscribe((data) => {
      if (data)
        this.store.next(data);
      else
        this.store.next(null);
    })
  }

  public doOrder(store_id: string, id: string): void {
    this.db.getData(ORDERS + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.order.next(data);
      else
        this.order.next(null);
    })
  }

  public doProduct(store_id: string, id: string): void {
    this.db.getData(PRODUCTS + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.product.next(data);
      else
        this.product.next(null);
    })
  }

  public doCatalog(store_id: string, id: string): void {
    this.db.getData(CATALOGS + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.catalog.next(data);
      else
        this.catalog.next(null);
    })
  }

  public doPayment(store_id: string, id: string): void {
    this.db.getData(PAYMENTS + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.payment.next(data);
      else
        this.payment.next(null);
    })
  }

  public doOffer(store_id: string, id: string): void {
    this.db.getData(OFFERS + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.offer.next(data);
      else
        this.offer.next(null);
    })
  }

  public doProductBundle(store_id: string, id: string): void {
    this.db.getData(PRODUCT_BUNDLES + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.productBundle.next(data);
      else
        this.productBundle.next(null);
    })
  }

  public doInvoice(store_id: string, id: string): void {
    this.db.getData(INVOICES + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.invoice.next(data);
      else
        this.invoice.next(null);
    })
  }

  public doReceipt(store_id: string, id: string): void {
    this.db.getData(RECEIPTS + "/" + store_id, id).subscribe((data) => {
      if (data)
        this.receipt.next(data);
      else
        this.receipt.next(null);
    })
  }

  public doShoppingCart(): void {
    this.db.getData(SHOPPING_CARTS, this.user.id).subscribe((data) => {
      if (data)
        this.shoppingCart.next(data);
      else
        this.shoppingCart.next(null);
    })
  }


  private waitForUserSet(): void {
    this.setupTimer = setInterval(() => this.setDataSet(), 250);
  }

  private setDataSet(): void {
    if (this.loginService.getUser()) {
      clearInterval(this.setupTimer);
      this.setStores();
    }
  }



  private setStores(): void {
    this._storeSubscription = this.db.getDataCollection(STORES)
      .subscribe((data: Store[]) => {

        if (data) {
          this._stores = this.db.getListToArray(data);
          this.stores.next(this._stores);
        } else {
          this._stores = null;
          this.stores.next(null);
        }
      });
  }


  public setNewUser(user: User): void {
    this.user = user;
    this.updateUser();
  }

  public updateUser(): void {
    this.loginService.updateUser(this.user);
  }

  private setFirebaseUser(): void {
    this._firebaseUserSubscription = this.loginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
      if (this.firebaseUser) {
        this.setUserProperties();
      }
    })
  }

  private setUser(): void {
    this._userSubscription = this.loginService.userChanged.subscribe((user) => {
      if (user)
        this.user = user;
      else
        this.user = null;
    })
  }

  private setUserProperties(): void {
    this.photoURL = this.firebaseUser.photoURL;
    this.displayName = this.firebaseUser.displayName;
    this.emailAddress = this.firebaseUser.email;
    this.loggedIn = true;
    this.userName = this.firebaseUser.email;
    this.emailVerified = this.firebaseUser.emailVerified;
  }

}
