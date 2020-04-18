import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './application/access/login-page/login-page.component';
import { LogoutPageComponent } from './application/access/logout-page/logout-page.component';
import { ResetPageComponent } from './application/access/reset-page/reset-page.component';
import { SignUpPageComponent } from './application/access/sign-up-page/sign-up-page.component';
import { CatalogEditComponent } from './application/commerce/catalog/catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './application/commerce/catalog/catalog-list/catalog-list.component';
import { CatalogViewComponent } from './application/commerce/catalog/catalog-view/catalog-view.component';
import { DashboardComponent } from './application/commerce/dashboard/dashboard.component';
import { OfferEditComponent } from './application/commerce/offer/offer-edit/offer-edit.component';
import { OfferListComponent } from './application/commerce/offer/offer-list/offer-list.component';
import { OfferViewComponent } from './application/commerce/offer/offer-view/offer-view.component';
import { OrderEditComponent } from './application/commerce/order/order-edit/order-edit.component';
import { OrderListComponent } from './application/commerce/order/order-list/order-list.component';
import { OrderViewComponent } from './application/commerce/order/order-view/order-view.component';
import { PaymentEditComponent } from './application/commerce/payment/payment-edit/payment-edit.component';
import { PaymentListComponent } from './application/commerce/payment/payment-list/payment-list.component';
import { PaymentViewComponent } from './application/commerce/payment/payment-view/payment-view.component';
import { ProductEditComponent } from './application/commerce/product/product-edit/product-edit.component';
import { ProductListComponent } from './application/commerce/product/product-list/product-list.component';
import { ProductViewComponent } from './application/commerce/product/product-view/product-view.component';
import { ProductBundleEditComponent } from './application/commerce/product/product-bundle-edit/product-bundle-edit.component';
import { ProductBundleListComponent } from './application/commerce/product/product-bundle-list/product-bundle-list.component';
import { ProductBundleViewComponent } from './application/commerce/product/product-bundle-view/product-bundle-view.component';
import { StoreEditComponent } from './application/commerce/store/store-edit/store-edit.component';
import { StoreListComponent } from './application/commerce/store/store-list/store-list.component';
import { StoreViewComponent } from './application/commerce/store/store-view/store-view.component';
import { HomeComponent } from './application/home/home.component';

import { OrderResolverService } from './application/commerce/order/services/order-resolver.service';
import { OrderViewResolverService } from './application/commerce/order/services/order-view-resolver.service';

import { ProductResolverService } from './application/commerce/product/services/product-resolver.service';
import { ProductViewResolverService } from './application/commerce/product/services/product-view-resolver.service';

import { ProductBundleResolverService } from './application/commerce/product/services/product-bundle-resolver.service';
import { ProductBundleViewResolverService } from './application/commerce/product/services/product-bundle-view-resolver.service';

import { StoreResolverService } from './application/commerce/store/services/store-resolver.service';
import { StoreViewResolverService } from './application/commerce/store/services/store-view-resolver.service';

import { CatalogResolverService } from './application/commerce/catalog/services/catalog-resolver.service';
import { CatalogViewResolverService } from './application/commerce/catalog/services/catalog-view-resolver.service';

import { OfferResolverService } from './application/commerce/offer/services/offer-resolver.service';
import { OfferViewResolverService } from './application/commerce/offer/services/offer-view-resolver.service';

import { PaymentResolverService } from './application/commerce/payment/services/payment-resolver.service';
import { PaymentViewResolverService } from './application/commerce/payment/services/payment-view-resolver.service';
import { NotFoundComponent } from './application/home/not-found/not-found.component';
import { PrivacyComponent } from './application/home/privacy/privacy.component';
import { TermsComponent } from './application/home/terms/terms.component';
import { AboutComponent } from './application/home/about/about.component';
import { GeneralComponent } from './application/settings/general/general.component';



const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home - eCommerce Admin - 16 AHEAD' } },
  { path: 'login', component: LoginPageComponent, data: { title: 'Login - eCommerce Admin - 16 AHEAD' } },
  { path: 'sign-up', component: SignUpPageComponent, data: { title: 'Sign Up - eCommerce Admin - 16 AHEAD' } },
  { path: 'reset', component: ResetPageComponent, data: { title: 'Password Reset - eCommerce Admin - 16 AHEAD' } },
  { path: 'logout', component: LogoutPageComponent, data: { title: 'You Are Logged Out - eCommerce Admin - 16 AHEAD' } },
  { path: 'general-settings', component: GeneralComponent, data: { title: 'General Settings - eCommerce Admin - 16 AHEAD' } },
  { path: 'not-found', component: NotFoundComponent, data: { title: '404 - Page Not Found' } },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'privacy', component: PrivacyComponent, data: { title: 'Privacy Statement' } },
      { path: 'terms', component: TermsComponent, data: { title: 'Terms Statement' } },

    ]
  },
  { path: 'stores', component: StoreListComponent, data: { title: 'Stores - eCommerce Admin - 16 AHEAD' } },
  { path: 'stores/new', resolve: { store: StoreResolverService }, component: StoreEditComponent, data: { title: 'New Store - eCommerce - 16 AHEAD' } },
  { path: 'stores/dashboard', component: DashboardComponent, data: { title: 'Dashboard - eCommerce Admin - 16 AHEAD' } },
  { path: 'stores/general-settings', component: GeneralComponent, data: { title: 'General Settings - eCommerce Admin - 16 AHEAD' } },
  { path: 'stores/:id', resolve: { store: StoreViewResolverService }, component: StoreViewComponent, data: { title: 'Store - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/edit', resolve: { store: StoreResolverService }, component: StoreEditComponent, data: { title: 'Edit Store - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/orders', component: OrderListComponent, data: { title: 'Orders - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs', component: CatalogListComponent, data: { title: 'Catalogs - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/payments', component: PaymentListComponent, data: { title: 'Payments - eCommerce - 16 AHEAD' } },

  { path: 'stores/:id/orders/new', resolve: { order: OrderResolverService }, component: OrderEditComponent, data: { title: 'New Order - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/new', resolve: { catalog: CatalogResolverService }, component: CatalogEditComponent, data: { title: 'New Catalog - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/payments/new', resolve: { payment: PaymentResolverService }, component: PaymentEditComponent, data: { title: 'New Payment - eCommerce - 16 AHEAD' } },

  { path: 'stores/:id/payments/:id2', resolve: { payment: PaymentViewResolverService }, component: PaymentViewComponent, data: { title: 'Payment - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2', resolve: { catalog: CatalogViewResolverService }, component: CatalogViewComponent, data: { title: 'Catalog - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/orders/:id2', resolve: { order: OrderViewResolverService }, component: OrderViewComponent, data: { title: 'Order - eCommerce - 16 AHEAD' } },

  { path: 'stores/:id/catalogs/:id2/edit', resolve: { catalog: CatalogResolverService }, component: CatalogEditComponent, data: { title: 'Edit Catalog - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/orders/:id2/edit', resolve: { order: OrderResolverService }, component: OrderEditComponent, data: { title: 'Edit Order - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/payments/:id2/edit', resolve: { payment: PaymentResolverService }, component: PaymentEditComponent, data: { title: 'Edit Payment - eCommerce - 16 AHEAD' } },


  { path: 'stores/:id/catalogs/:id2/offers', component: OfferListComponent, data: { title: 'Offers - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/products', component: ProductListComponent, data: { title: 'Products - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles', component: ProductBundleListComponent, data: { title: 'Product Bundles - eCommerce - 16 AHEAD' } },

  { path: 'stores/:id/catalogs/:id2/offers/new', resolve: { offer: OfferResolverService }, component: OfferEditComponent, data: { title: 'New Offer - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/products/new', resolve: { product: ProductResolverService }, component: ProductEditComponent, data: { title: 'New Product - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles/new', resolve: { productBundle: ProductBundleResolverService }, component: ProductBundleEditComponent, data: { title: 'New ProductBundle - eCommerce - 16 AHEAD' } },


  { path: 'stores/:id/catalogs/:id2/offers/:id3', resolve: { offer: OfferViewResolverService }, component: OfferViewComponent, data: { title: 'Offer - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/products/:id3', resolve: { product: ProductViewResolverService }, component: ProductViewComponent, data: { title: 'Product - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles/:id3', resolve: { productBundle: ProductBundleViewResolverService }, component: ProductBundleViewComponent, data: { title: 'ProductBundle - eCommerce - 16 AHEAD' } },


  { path: 'stores/:id/catalogs/:id2/offers/:id3/edit', resolve: { offer: OfferResolverService }, component: OfferEditComponent, data: { title: 'Edit Offer - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/products/:id3/edit', resolve: { product: ProductResolverService }, component: ProductEditComponent, data: { title: 'Edit Product - eCommerce - 16 AHEAD' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles/:id3/edit', resolve: { productBundle: ProductBundleResolverService }, component: ProductBundleEditComponent, data: { title: 'Edit ProductBundle - eCommerce - 16 AHEAD' } },

  { path: '**', redirectTo: '/not-found' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
