import { Component, OnInit, OnDestroy, ViewChild, Renderer2, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Address, ShoppingCart, Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, SHOPPING_CARTS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent  {

 

}
