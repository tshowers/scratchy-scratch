import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Store, ShoppingCart, User, Product } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { SHOPPING_CARTS } from 'licky-services';
import { LickyLoggerService} from 'licky-services';

declare var paypal;


@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.css']
})
export class ShoppingCartViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  @ViewChild('paypal') paypalElement: ElementRef;

  isPaid : boolean = false;

  private _products: Product[];

  private _productsOriginal;

  pageSize = 5;

  shoppingCart: ShoppingCart;

  private _searchArgumentSubscription: Subscription;

  private _userSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  totalRecords = 0;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
    .subscribe((data: { shoppingCart: ShoppingCart}) => {
      this.shoppingCart = data.shoppingCart;
      this.setBreadCrumb();
      this.setPayPal();
    })
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private getPurchaseUnits() : any[] {
    let purchase_units = [];
    this.shoppingCart.orderLine.forEach(item => {
      purchase_units.push({"description": item.product.description, "amount": {"currency_code": "USD", "value": item.product.price}});

    });
    return purchase_units;
  }

  private setPayPal() : void {
    let purchase_units = this.getPurchaseUnits();
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: purchase_units
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.isPaid = true;
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/stores/dashboard", active: false },
      { name: "stores", link: "/application/stores", active: false },
      { name: "shopping cart", link: "/application/shopping-carts", active: true },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onDelete(at): void {
    this.shoppingCart.orderLine.splice(at,1);
  }

  onDetail(data): void {
    this.router.navigate(['application', 'stores', data.product.store_id, 'catalogs', data.product.catalog_id, 'products',  data.product.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return JSON.stringify(this._products, null, 2)
      + ", shoppingCart=" + this.shoppingCart
  }

}
