import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickMarketingLightbox1Module } from 'lick-marketing-lightbox1';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetProductSearchByTagModule} from 'lick-app-widget-product-search-by-tag';
import { LickMarketingReviews1Module } from 'lick-marketing-reviews1';
import { LickMarketingProduct1Component } from './lick-marketing-product1.component';



@NgModule({
  declarations: [LickMarketingProduct1Component],
  imports: [
    CommonModule,
    RouterModule,
    LickDataModule,
    LickMarketingReviews1Module,
    LickAppWidgetProductSearchByTagModule,
    
    LickMarketingLightbox1Module
  ],
  exports: [LickMarketingProduct1Component]
})
export class LickMarketingProduct1Module { }
