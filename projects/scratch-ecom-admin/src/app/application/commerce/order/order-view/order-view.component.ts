import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { ORDERS } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { BreadCrumbService, ORDER } from '../../../../shared/services/bread-crumb.service';
import { LickyLoggerService } from 'licky-services';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  order: Order;

  canEdit = true;

  canDelete = true;

  searchArgument;

  private _paramSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    public breadCrumbService: BreadCrumbService, 
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { order: Order }) => {
        this.order = data.order;
        this.store_id = this.order.store_id
        this.setStore();
        this.searchArgument = this.order.name;
        this.setBreadCrumb();
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.breadCrumbService.setContext(ORDER);
    this.breadCrumbService.setBreadCrumb(this.store_id);
    this.crumbs = this.breadCrumbService.getBreadCrumb();
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
    })
  }


  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate([ 'stores', this.store_id, 'orders', this.order.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.dm.db.setDeleted(ORDERS + "/" + this.store_id, this.order.id, this.order);
    this.router.navigate([ 'stores', this.store_id, 'orders']);
  }

  onSearch(value): void {
    LickyLoggerService.log("ONSEARCH", value);
    this.router.navigate([ 'stores', this.store_id, 'stores', this.store_id, 'orders'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.order, null, 2)
  }

}
