import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { BreadCrumbService, DASHBOARD } from '../../../shared/services/bread-crumb.service';
import { Contact, Store, Order, Catalog, Payment } from 'lick-data';
import { Subscription, Observable } from 'rxjs';
import { LickAppWidgetStats14PeriodData, LickAppWidgetStats14Data, LickAppWidgetStats14Box } from 'lick-app-widget-stats14';
import { DateUtilService } from 'licky-services';
import { CatalogListComponent } from 'projects/scratch-commerce/src/app/application/commerce/catalog/catalog-list/catalog-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {
  // Stats14
  stats14chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  stats14Data: LickAppWidgetStats14PeriodData;
  stats14headingText = "Gross Sales";
  stats14OrderCount: number = 0;
  stats14LastOrder1: Order;
  stats14LastOrder2: Order;
  stats14LastOrder3: Order;
  stats14LastOrder4: Order;
  OneMonthGrossOrders: number = 0;
  ThreeMonthGrossOrders: number = 0;
  SixMonthGrossOrders: number = 0;
  OneYearGrossOrders: number = 0;


  private _orderSubscription: Subscription;
  private _contactSubscription: Subscription;

  // Stats4
  stats4headingText = "Stores";
  stats4subHeadingText = "Active";
  stats4iconClass = "fa fa-shopping-cart";
  storeCount: number = 0;

  // Stats9
  stats9HeadingText = "Customers";
  stats9SubHeadingText = "Note: Registered only - email address provided";
  stats9ButtonText1 = "Pending";
  stats9ButtonText2 = "New";
  stats9ButtonText3 = "Online";



  private _storeSubscription: Subscription;
  private _catalogSubscription: Subscription;

  contacts: Contact[];

  catalogBucket = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  catalogDayBucket = [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0
  ]


  totalRecords: number = 1;
  catalogCount: number = 0;
  productCount: number = 0;
  offerCount: number = 0;
  productBundleCount: number = 0;

  chartData1$: Observable<any[]>;
  chartData2$: Observable<any[]>;
  chartData3$: Observable<any[]>;

  janOrders: number = 0;
  febOrders: number = 0;
  marOrders: number = 0;
  aprOrders: number = 0;
  mayOrders: number = 0;
  junOrders: number = 0;
  julOrders: number = 0;
  augOrders: number = 0;
  sepOrders: number = 0;
  octOrders: number = 0;
  novOrders: number = 0;
  decOrders: number = 0;

  day1Orders: number = 0;
  day2Orders: number = 0;
  day3Orders: number = 0;
  day4Orders: number = 0;
  day5Orders: number = 0;
  day6Orders: number = 0;
  day7Orders: number = 0;
  day8Orders: number = 0;
  day9Orders: number = 0;
  day10Orders: number = 0;
  day11Orders: number = 0;
  day12Orders: number = 0;
  day13Orders: number = 0;
  day14Orders: number = 0;
  day15Orders: number = 0;
  day16Orders: number = 0;
  day17Orders: number = 0;
  day18Orders: number = 0;
  day19Orders: number = 0;
  day20Orders: number = 0;
  day21Orders: number = 0;
  day22Orders: number = 0;
  day23Orders: number = 0;
  day24Orders: number = 0;
  day25Orders: number = 0;
  day26Orders: number = 0;
  day27Orders: number = 0;
  day28Orders: number = 0;
  day29Orders: number = 0;
  day30Orders: number = 0;
  day31Orders: number = 0;

  janCountUpdated: number = 0;
  febCountUpdated: number = 0;
  marCountUpdated: number = 0;
  aprCountUpdated: number = 0;
  mayCountUpdated: number = 0;
  junCountUpdated: number = 0;
  julCountUpdated: number = 0;
  augCountUpdated: number = 0;
  sepCountUpdated: number = 0;
  octCountUpdated: number = 0;
  novCountUpdated: number = 0;
  decCountUpdated: number = 0;


  searchArgument;

  FAQheadingText = "e-Commerce Dashboard";
  descriptionText = "Welcome to 16AHEAD e-Commerce. This page, over time, will turn into your sales dashboard. You can also think of this as your start page. Once you add products and receive orders, this page will show valuable information you should be aware of regarding your customers and products.";
  faqHeading1 = "Getting Started";
  faqDescription1 = "The application layout should be pretty familiar to you with some slight modifications. At the top is the application menu where you can always navigate back to the home page by clicking the 16AHEAD logo. The left <em>hamburger</em> icon reveals top news related to your business, while the right <em>wheel</em> icon reveals a service panel.";
  faqHeading2 = "How to Setup";
  faqDescription2 = "First, you must create a store by clicking the create a store link in the bread crumb. Once you have a store created, you need to organize your products into catalogs. After the store is created, think about how you want to organize your products.";
  faqHeading3 = "How to Use";
  faqDescription3 = "Create catalogs to store products (catalogs group similar products). Next, add individual products and select the appropriate catalog. Finally, you can create product bundles (products sold together).";
  faqHeading4 = "The Secret Sauce";
  faqDescription4 = "The magic happens in monitoring the products and customers in various systems such as your calendar, CRM system, or the news. 16AHEAD will offer suggestions on products and customers you should review and why.";

  constructor(private _dateUtilService: DateUtilService, public breadCrumbService: BreadCrumbService, public dm: DataMediationService, protected renderer2: Renderer2, public router: Router) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.stores();
    this.customers();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setContext(DASHBOARD);
    this.breadCrumbService.setBreadCrumb();
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
    if (this._orderSubscription)
      this._orderSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
    if (this._catalogSubscription)
      this._catalogSubscription.unsubscribe();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {
    this.router.navigate(['products'], { queryParams: { searchArgument: value } })
  }

  stores(): void {
    this.dm.doStores();
    this._storeSubscription = this.dm.stores.subscribe((stores: Store[]) => {
      if (stores) {
        stores = stores.filter((store) => (!store.draft && !store.deleted));
        this.storeCount = stores.length;
        stores.forEach((store) => {
          this.orders(store.id)
          this.catalogs(store.id);

        })
      }
    })
  }

  orders(store_id): void {
    this.dm.doOrders(store_id);
    this._orderSubscription = this.dm.orders.subscribe((orders: Order[]) => {
      if (orders) {
        this.stats14OrderCount += orders.length;
        orders.forEach((order) => {
          this.countOrder(order);
        })
      }
    })
  }

  customers(): void {
    this.dm.doContacts();
    this._contactSubscription = this.dm.contacts.subscribe((contacts: Contact[]) => {
      if (contacts) {
        contacts.forEach((contact) => {
          this.determineContactBucket(contact);
        })
      }
    })
  }

  catalogs(store_id): void {
    this.dm.doCatalogs(store_id);
    console.log("CATALOGS")
    this._catalogSubscription = this.dm.catalogs.subscribe((catalogs: Catalog[]) => {
      if (catalogs) {
        catalogs.forEach((catalog) => {
          this.determineCatalogBucket(catalog);
        })
      }
    })


  }


  determineCatalogBucket(catalog: Catalog): void {
    if (catalog.timeStamp) {
      for (let index = 0; index < 11; index++) {
        this.monthCheck(catalog, index, this.catalogBucket);
      }

      for (let index = 0; index < 31; index++) {
        this.dayCheck(catalog, index, this.catalogDayBucket);
      }

      console.log("Catalog Bucket", JSON.stringify(this.catalogBucket))
      console.log("Catalog Day Bucket", JSON.stringify(this.catalogDayBucket))
    }
  }

  determineContactBucket(contact: Contact): void {
    if (contact.timeStamp) {
      // this.monthCheck(contact, 0);
      // this.monthCheck(contact, 1);
      // this.monthCheck(contact, 2);
    }
  }

  dayCheck(data: any, backNumber: number, dayArray: number[], isAddAmount?: boolean): void {
    let today = new Date();
    let m = this._dateUtilService.subtractDay(today, backNumber);
    let dataDay = new Date(data.timeStamp).getDate();

    console.log("Back Day:" + m.getDate(), " Data Data:" + dataDay);
    if (m.getDate() === dataDay) {
      if (isAddAmount)
        dayArray[backNumber] += data.amount;
      else
        dayArray[backNumber]++;

    }
  }


  monthCheck(data: any, backNumber: number, monthArray: number[], isAddAmount?: boolean): void {
    let today = new Date();
    let m = this._dateUtilService.subtractMonth(today, backNumber);
    let dataMonth = new Date(data.timeStamp).getMonth();

    console.log("Back Month:" + m.getMonth(), " Data Month:" + dataMonth);
    if (m.getMonth() === dataMonth) {
      if (isAddAmount)
        monthArray[backNumber] += data.amount;
      else
        monthArray[backNumber]++;
    }

  }




  countOrder(order: Order): void {
    let today = new Date();
    if (order.timeStamp) {
      let lastYear = this._dateUtilService.subtractMonth(today, 12);
      console.log("lastYear", JSON.stringify(lastYear))
      // this.setOrdersByMonth(new Date(order.timeStamp).getMonth(), order.amount)
    }
  }




  setOrderTotalOneMonth(): void {
    this.OneMonthGrossOrders = this.day1Orders +
      this.day2Orders +
      this.day3Orders +
      this.day4Orders +
      this.day5Orders +
      this.day6Orders +
      this.day7Orders +
      this.day8Orders +
      this.day9Orders +
      this.day10Orders +
      this.day11Orders +
      this.day12Orders +
      this.day13Orders +
      this.day14Orders +
      this.day15Orders +
      this.day16Orders +
      this.day17Orders +
      this.day18Orders +
      this.day19Orders +
      this.day20Orders +
      this.day21Orders +
      this.day22Orders +
      this.day23Orders +
      this.day24Orders +
      this.day25Orders +
      this.day26Orders +
      this.day27Orders +
      this.day28Orders +
      this.day29Orders +
      this.day3Orders +
      this.day31Orders;
  }

  setStatsHeaderingPeriod(period: number): void {
    this.stats14Data.period1.total = this.OneMonthGrossOrders;
    this.stats14Data.period1.subHeading = "Orders over 1 Months";
    this.stats14Data.period2.total = this.ThreeMonthGrossOrders;
    this.stats14Data.period2.subHeading = "Orders over 3 Months";
    this.stats14Data.period3.total = this.SixMonthGrossOrders;
    this.stats14Data.period3.subHeading = "Orders over 6 Months";
    this.stats14Data.period4.total = this.OneYearGrossOrders;
    this.stats14Data.period4.subHeading = "Orders over 1 Order";
  }

  setSalesStats(): void {
    this.stats14Data.period1.chartData = [
      this.day1Orders,
      this.day2Orders,
      this.day3Orders,
      this.day4Orders,
      this.day5Orders,
      this.day6Orders,
      this.day7Orders,
      this.day8Orders,
      this.day9Orders,
      this.day10Orders,
      this.day11Orders,
      this.day12Orders,
      this.day13Orders,
      this.day14Orders,
      this.day15Orders,
      this.day16Orders,
      this.day17Orders,
      this.day18Orders,
      this.day19Orders,
      this.day20Orders,
      this.day21Orders,
      this.day22Orders,
      this.day23Orders,
      this.day24Orders,
      this.day25Orders,
      this.day26Orders,
      this.day27Orders,
      this.day28Orders,
      this.day29Orders,
      this.day30Orders,
      this.day31Orders,
    ];
    this.stats14Data.period1.box = [
      {
        "boxHeading": "Order",
        "boxIcon": "fa fa-cart-plus",
        "label1": "Order Date",
        "count1": new Date(this.stats14LastOrder1.orderDate).toLocaleDateString("en-US"),
        "label2": "Order Number",
        "count2": (this.stats14LastOrder1.id),
        "label3": "Status",
        "count3": this.stats14LastOrder1.status,
        "label4": "Tax",
        "count4": this.stats14LastOrder1.tax,
        "label5": "Amount",
        "count5": this.stats14LastOrder1.amount,
        "moreInfoLink": "/stores/orders/" + this.stats14LastOrder1.id
      },
      {
        "boxHeading": "Order",
        "boxIcon": "fa fa-cart-plus",
        "label1": "Order Date",
        "count1": new Date(this.stats14LastOrder2.orderDate).toLocaleDateString("en-US"),
        "label2": "Order Number",
        "count2": (this.stats14LastOrder2.id),
        "label3": "Status",
        "count3": this.stats14LastOrder2.status,
        "label4": "Tax",
        "count4": this.stats14LastOrder2.tax,
        "label5": "Amount",
        "count5": this.stats14LastOrder2.amount,
        "moreInfoLink": "/stores/orders/" + this.stats14LastOrder2.id
      },
      {
        "boxHeading": "Order",
        "boxIcon": "fa fa-cart-plus",
        "label1": "Order Date",
        "count1": new Date(this.stats14LastOrder3.orderDate).toLocaleDateString("en-US"),
        "label2": "Order Number",
        "count2": (this.stats14LastOrder3.id),
        "label3": "Status",
        "count3": this.stats14LastOrder3.status,
        "label4": "Tax",
        "count4": this.stats14LastOrder3.tax,
        "label5": "Amount",
        "count5": this.stats14LastOrder3.amount,
        "moreInfoLink": "/stores/orders/" + this.stats14LastOrder3.id
      },
      {
        "boxHeading": "Order",
        "boxIcon": "fa fa-cart-plus",
        "label1": "Order Date",
        "count1": new Date(this.stats14LastOrder4.orderDate).toLocaleDateString("en-US"),
        "label2": "Order Number",
        "count2": (this.stats14LastOrder4.id),
        "label3": "Status",
        "count3": this.stats14LastOrder4.status,
        "label4": "Tax",
        "count4": this.stats14LastOrder4.tax,
        "label5": "Amount",
        "count5": this.stats14LastOrder4.amount,
        "moreInfoLink": "/stores/orders/" + this.stats14LastOrder4.id
      }
    ]
  }



  private setOrdersByDay(orderDate: Date, amount): void {
    let today = new Date();
    if (today.getMonth() === orderDate.getMonth()) {
      let day = orderDate.getDate();

      switch (day) {
        case 1:
          this.day1Orders += amount;
          break;
        case 2:
          this.day2Orders += amount;
          break;
        case 3:
          this.day3Orders += amount;
          break;
        case 4:
          this.day4Orders += amount;
          break;
        case 5:
          this.day5Orders += amount;
          break;
        case 6:
          this.day6Orders += amount;
          break;
        case 7:
          this.day7Orders += amount;
          break;
        case 8:
          this.day8Orders += amount;
          break;
        case 9:
          this.day9Orders += amount;
          break;
        case 10:
          this.day10Orders += amount;
          break;
        case 11:
          this.day11Orders += amount;
          break;
        case 12:
          this.day12Orders += amount;
          break;
        case 13:
          this.day13Orders += amount;
          break;
        case 14:
          this.day14Orders += amount;
          break;
        case 15:
          this.day15Orders += amount;
          break;
        case 16:
          this.day16Orders += amount;
          break;
        case 17:
          this.day17Orders += amount;
          break;
        case 18:
          this.day18Orders += amount;
          break;
        case 19:
          this.day19Orders += amount;
          break;
        case 20:
          this.day2Orders += amount;
          break;
        case 21:
          this.day21Orders += amount;
          break;
        case 22:
          this.day22Orders += amount;
          break;
        case 23:
          this.day23Orders += amount;
          break;
        case 24:
          this.day24Orders += amount;
          break;
        case 25:
          this.day25Orders += amount;
          break;
        case 26:
          this.day26Orders += amount;
          break;
        case 27:
          this.day27Orders += amount;
          break;
        case 28:
          this.day28Orders += amount;
          break;
        case 29:
          this.day29Orders += amount;
          break;
        case 30:
          this.day30Orders += amount;
          break;
        case 31:
          this.day31Orders += amount;
          break;
      }
    }
  }

  private setOrdersByMonth(month: number, amount): void {
    switch (month) {
      case 0:
        if (amount)
          this.janOrders += amount;
        break;
      case 1:
        if (amount)
          this.febOrders += amount;
        break;
      case 2:
        if (amount)
          this.marOrders += amount;
        break;
      case 3:
        if (amount)
          this.aprOrders += amount;
        break;
      case 4:
        if (amount)
          this.mayOrders += amount;
        break;
      case 5:
        if (amount)
          this.junOrders += amount;
        break;
      case 6:
        if (amount)
          this.julOrders += amount;
        break;
      case 7:
        if (amount)
          this.augOrders += amount;
        break;
      case 8:
        if (amount)
          this.sepOrders += amount;
        break;
      case 9:
        if (amount)
          this.octOrders += amount;
        break;
      case 10:
        if (amount)
          this.novOrders += amount;
        break;
      case 11:
        if (amount)
          this.decOrders += amount;
        break;
    }
  }



}
