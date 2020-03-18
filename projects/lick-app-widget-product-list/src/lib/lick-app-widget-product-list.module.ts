import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetNoDataModule } from 'lick-app-widget-no-data';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LickAppWidgetProductListComponent } from './lick-app-widget-product-list.component';



@NgModule({
  declarations: [LickAppWidgetProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    UiSwitchModule,
    LickAppWidgetNoDataModule,
  ],
  exports: [LickAppWidgetProductListComponent]
})
export class LickAppWidgetProductListModule { }
