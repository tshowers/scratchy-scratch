import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickAppWidgetWeatherModule } from 'lick-app-widget-weather';
import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickAppWidgetRightSideMenuComponent } from './lick-app-widget-right-side-menu.component';

@NgModule({
  declarations: [LickAppWidgetRightSideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickAppWidgetWeatherModule,
    LickMarketingFaq2Module
  ],
  exports: [LickAppWidgetRightSideMenuComponent]
})
export class LickAppWidgetRightSideMenuModule { }
