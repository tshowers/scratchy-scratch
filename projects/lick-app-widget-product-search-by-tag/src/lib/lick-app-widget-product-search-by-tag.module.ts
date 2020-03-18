import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickDataModule } from 'lick-data';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LickAppWidgetProductSearchByTagComponent } from './lick-app-widget-product-search-by-tag.component';



@NgModule({
  declarations: [LickAppWidgetProductSearchByTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    NgbModule,
    UiSwitchModule,
  ],
  exports: [LickAppWidgetProductSearchByTagComponent]
})
export class LickAppWidgetProductSearchByTagModule { }
