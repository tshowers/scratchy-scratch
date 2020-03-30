import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Home Page - 16 AHEAD - eCommerce' } },
  { path: 'products', component: ShopProductGridPageComponent, data: { title: 'Shop Page - 16 AHEAD - eCommerce' } },
  { path: 'wishlist', component: WishlistPageComponent, data: { title: 'Wish List - 16 AHEAD - eCommerce' } },
  { path: 'checkout', component: CheckoutPageComponent, data: { title: 'Check Out - 16 AHEAD - eCommerce' } },
  { path: 'cart', component: CartPageComponent, data: { title: 'Shopping Cart - 16 AHEAD - eCommerce' } },
  { path: 'contact', component: ContactPageComponent, data: { title: 'eCommerce Contact Page - 16 AHEAD - eCommerce' } },
  { path: 'privacy', component: PrivacyPageComponent, data: { title: 'Privacy Policy Page - 16 AHEAD - eCommerce' } },
  { path: 'terms', component: TermsPageComponent, data: { title: 'Terms of Use - 16 AHEAD - eCommerce' } },
  { path: 'products-list', component: ShopProductListPageComponent, data: { title: 'Products - 16 AHEAD - eCommerce' } },
  { path: 'products-w-sidebar', component: ShopSidebarListPageComponent, data: { title: 'Products with Sidebar - 16 AHEAD - eCommerce' } },
  { path: 'product', component: ProductPageComponent, data: { title: 'Product - 16 AHEAD - eCommerce' } },
  { path: 'products/:id', component: ProductPageComponent, data: { title: 'Product - 16 AHEAD - eCommerce' } }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
