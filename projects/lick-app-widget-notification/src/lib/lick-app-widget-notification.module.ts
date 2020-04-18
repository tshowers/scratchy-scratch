import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetNotificationComponent } from './lick-app-widget-notification.component';



@NgModule({
  declarations: [LickAppWidgetNotificationComponent],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
  ],
  exports: [LickAppWidgetNotificationComponent]
})
export class LickAppWidgetNotificationModule { }
