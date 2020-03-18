import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LickAppWidgetProductCategoriesComponent } from './lick-app-widget-product-categories.component';



@NgModule({
  declarations: [LickAppWidgetProductCategoriesComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    UiSwitchModule,
  ],
  exports: [LickAppWidgetProductCategoriesComponent]
})
export class LickAppWidgetProductCategoriesModule { }
