import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-grid-page',
  templateUrl: './shop-product-grid-page.component.html',
  styleUrls: ['./shop-product-grid-page.component.css']
})
export class ShopProductGridPageComponent implements OnInit {

  listStyle = "none";
  gridStyle = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  onDetailEvent() : void {

  }

  onCartEvent() : void {

  }

  onWishListEvent() : void {

  }



}
