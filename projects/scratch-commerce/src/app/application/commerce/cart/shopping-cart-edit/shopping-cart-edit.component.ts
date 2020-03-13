import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Product, Catalog, Store, Dropdown, Upload, Section } from 'lick-data';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit {

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) { }

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  ngOnInit() {
  }

  onSettings() : void {

  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id,  'products'], {queryParams: { searchArgument: value}})
  }

  onViewProfile() : void {

  }

}
