import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Product, Review } from 'lick-data';
import { LickyLoggerService } from 'licky-services';

@Component({
  selector: 'licky-lick-marketing-product1',
  templateUrl: './lick-marketing-product1.component.html',
  styles: []
})
export class LickMarketingProduct1Component implements OnInit {
  rnd: number = 0;
  images = [
    {src : "http://via.placeholder.com/500x400", caption: "One", thumb: "http://via.placeholder.com/100x100"},
    {src : "http://via.placeholder.com/500x400", caption: "Two", thumb: "http://via.placeholder.com/100x100"},
    {src : "http://via.placeholder.com/500x400", caption: "Three", thumb: "http://via.placeholder.com/100x100"},
    {src : "http://via.placeholder.com/500x400", caption: "Four", thumb: "http://via.placeholder.com/100x100"},
  ];
  @Input() reviews: Review[] = [
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, false],
      "description": "Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.",
      "userName": "Miles Jeffries",
      "profession": "Photographer",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "https://via.placeholder.com/1024x768.png",
      "shared": true,
      "name": "Miles Jeffries",
      "userImage": "https://via.placeholder.com/1024x768.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Miles Studio" }
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, true],
      "description": "Proin sodales libero eget ante. Nulla quam.",
      "userName": "Janet Buckner",
      "profession": "CEO",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "https://via.placeholder.com/1024x768.png",
      "shared": true,
      "name": "Janet Buckner",
      "userImage": "https://via.placeholder.com/1024x768.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "Valid Software" }
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "stars": [true, true, true, true, false],
      "description": "Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. ",
      "userName": "Phyllis Kim",
      "profession": "Business Owner",
      "icon": "https://via.placeholder.com/1024x768.png",
      "url": "https://via.placeholder.com/1024x768.png",
      "shared": true,
      "name": "Phyllis Kim",
      "userImage": "https://via.placeholder.com/1024x768.png",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "publishedAt": new Date(),
      "lastUpdated": new Date(),
      "timeStamp": new Date(),
      "company": { "name": "The Cake Place" }
    },
  ];
  @Input() product: Product = 
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
    };

  constructor() { }

  ngOnInit(): void {
    if (this.reviews && this.reviews.length)
      this.rnd = Math.floor(Math.random() * this.reviews.length);
      LickyLoggerService.info(null,`Random review number is: ${this.rnd}`)  
  }

  onAddToCart() : void {

  }

}
