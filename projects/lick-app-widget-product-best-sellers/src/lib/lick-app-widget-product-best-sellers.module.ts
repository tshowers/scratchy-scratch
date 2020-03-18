import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LickAppWidgetProductBestSellersComponent } from './lick-app-widget-product-best-sellers.component';



@NgModule({
  declarations: [LickAppWidgetProductBestSellersComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    UiSwitchModule,
  ],
  exports: [LickAppWidgetProductBestSellersComponent]
})
export class LickAppWidgetProductBestSellersModule { }
