import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'lick-data';


@Component({
  selector: 'licky-lick-app-widget-product-grid',
  templateUrl: './lick-app-widget-product-grid.component.html',
  styles: []
})
export class LickAppWidgetProductGridComponent implements OnInit {

  currentPage: number = 1;
  loading: boolean = true;

  @Input() pageSize: number = 20;
  @Input() totalRecords: number = 0;
  @Input() products: Product[] = [
    {
      "name": "Premium",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Flexible", "Powerful", "Convenient"],
      "url": "https://via.placeholder.com/720x947",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.",
      "longDescription": "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. ",
      "manufacturer": "System",
      "author": "System",
      "category": "Best Value",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": Math.floor(Math.random() * 1000),
      "orderQuantityMeasure": "Months",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": true,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "Jay Falcon",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Jay Falcon",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
    {
      "name": "Pro",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Strict", "Professional"],
      "url": "https://via.placeholder.com/720x947",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.",
      "longDescription": "Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. ",
      "manufacturer": "System",
      "author": "System",
      "category": "Referral",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": Math.floor(Math.random() * 1000),
      "orderQuantityMeasure": "Months",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": true,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "Jay Falcon",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Jay Falcon",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
    {
      "name": "Personal",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Non Professional", "Family"],
      "url": "https://via.placeholder.com/720x947",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.",
      "longDescription": "Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      "manufacturer": "System",
      "author": "System",
      "category": "Consulting",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": Math.floor(Math.random() * 1000),
      "orderQuantityMeasure": "Months",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": true,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "Jay Falcon",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Jay Falcon",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
    {
      "name": "Basic",
      "id": Math.floor(Math.random() * 1000).toString(),
      "catalog_id": Math.floor(Math.random() * 1000).toString(),
      "store_id": Math.floor(Math.random() * 1000).toString(),
      "discontinued": false,
      "features": ["Standard", "Dual"],
      "url": "https://via.placeholder.com/720x947",
      "deliverable_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "longDescription": "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. ",
      "manufacturer": "System",
      "author": "System",
      "category": "Professional Service",
      "leadTime": Math.floor(Math.random() * 1000),
      "onSale": false,
      "salePrice": Math.floor(Math.random() * 1000),
      "orderQuantity": Math.floor(Math.random() * 1000),
      "orderQuantityMeasure": "Months",
      "price": Math.floor(Math.random() * 1000),
      "hourlyRate": Math.floor(Math.random() * 1000),
      "reOrderLevel": Math.floor(Math.random() * 1000),
      "sku": Math.floor(Math.random() * 1000).toString(),
      "subscription": true,
      "weight": Math.floor(Math.random() * 1000),
      "height": Math.floor(Math.random() * 1000),
      "width": Math.floor(Math.random() * 1000),
      "length": Math.floor(Math.random() * 1000),
      "unitsOnOrder": Math.floor(Math.random() * 1000),
      "unitsInStock": Math.floor(Math.random() * 1000),
      "lastUpdatedBy": "Jay Falcon",
      "lastUpdated": new Date(),
      "draft": false,
      "deleted": false,
      "keywords": "service",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": true,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Jay Falcon",
      "timeStamp": new Date(),
      "shared": true,
      "userImage": "https://via.placeholder.com/64x64.png",
      "publishedAt": new Date()
    },
  ];
  @Output() detailEvent = new EventEmitter();
  @Output() cartEvent = new EventEmitter();
  @Output() wishListEvent = new EventEmitter();
  @Output() currentPageEvent = new EventEmitter();
  @Output() newItemEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.loading = false}, 750);
  }

  onCart(item) {
    this.cartEvent.emit(item);
  }
  onWishList(item) {
    this.wishListEvent.emit(item);
  }
  onDetail(item) {
    this.detailEvent.emit(item);
  }
  onNewItem() {
    this.newItemEvent.emit();
  }


  public onPageChange(value): void {
    this.currentPage = value;
    this.currentPageEvent.emit(this.currentPage);
  }

}
