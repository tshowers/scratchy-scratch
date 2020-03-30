import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MarketingRoutingModule } from './marketing-routing.module';

import { LickMarketingPrices2Module } from 'lick-marketing-prices2';
import { LickMarketingFaq1Module } from 'lick-marketing-faq1';
import { LickMarketingVideo1Module } from 'lick-marketing-video1';
import { LickMarketingFeatures1Module } from 'lick-marketing-features1';
import { LickMarketingFeatures2Module } from 'lick-marketing-features2';
import { LickMarketingAboutProduct2Module } from 'lick-marketing-about-product2';
import { LickMarketingAboutProduct7Module } from 'lick-marketing-about-product7';
import { LickMarketingReviews2Module } from 'lick-marketing-reviews2';
import { LickMarketingNewsletter1Module} from 'lick-marketing-newsletter1';
import { LickMarketingParallax1Module } from 'lick-marketing-parallax1';

import { LickMarketingReviews1Module} from 'lick-marketing-reviews1';
import { LickMarketingProduct1Module} from 'lick-marketing-product1';

import { LickAppWidgetProductGridModule } from 'lick-app-widget-product-grid';
import { LickAppWidgetProductListModule } from 'lick-app-widget-product-list';
import { LickAppWidgetProductCategoriesModule } from 'lick-app-widget-product-categories';
import { LickAppWidgetProductSearchByTagModule} from 'lick-app-widget-product-search-by-tag';
import { LickAppWidgetProductBestSellersModule} from 'lick-app-widget-product-best-sellers';

import { HomePageComponent } from './home-page/home-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShopSidebarListPageComponent } from './shop-sidebar-list-page/shop-sidebar-list-page.component';
import { ShopProductGridPageComponent } from './shop-product-grid-page/shop-product-grid-page.component';
import { ShopProductListPageComponent } from './shop-product-list-page/shop-product-list-page.component';

@NgModule({
  declarations: [HomePageComponent, PrivacyPageComponent, TermsPageComponent, ContactPageComponent, CheckoutPageComponent, WishlistPageComponent, CartPageComponent, ProductPageComponent, ShopSidebarListPageComponent, ShopProductGridPageComponent, ShopProductListPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MarketingRoutingModule,
    LickMarketingPrices2Module,
    LickMarketingFaq1Module,
    LickMarketingVideo1Module,
    LickMarketingFeatures1Module,
    LickMarketingAboutProduct7Module,
    LickMarketingReviews2Module,
    LickAppWidgetProductGridModule,
    LickAppWidgetProductListModule,
    LickAppWidgetProductCategoriesModule,
    LickAppWidgetProductSearchByTagModule,
    LickAppWidgetProductBestSellersModule,
    LickMarketingNewsletter1Module,
    LickMarketingReviews1Module,
    LickMarketingProduct1Module,
    LickMarketingFeatures2Module,
    LickMarketingAboutProduct2Module,
    LickMarketingParallax1Module
  ]
})
export class MarketingModule { }

@NgModule({})
export class LickMarketingModule {
  static forRoot(): ModuleWithProviders<MarketingModule> {
    return {
      ngModule: MarketingModule,
      providers: []
    }

  }
}
