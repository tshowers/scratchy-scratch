import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductBundle, Store, Catalog } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PRODUCT_BUNDLES } from 'licky-services';
import { DataMediationService } from '../../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-bundle-view',
  templateUrl: './product-bundle-view.component.html',
  styleUrls: ['./product-bundle-view.component.css']
})
export class ProductBundleViewComponent  {

 

}
