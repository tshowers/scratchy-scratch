import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
import { DisplayNameComponent } from './application/settings/display-name/display-name.component';
import { EmailAddressComponent } from './application/settings/email-address/email-address.component';
import { AvatarComponent } from './application/settings/avatar/avatar.component';
import { VeriifyComponent } from './application/settings/veriify/veriify.component';

import { MaintenanceComponent } from './application/home/maintenance/maintenance.component';
import { HelpOneComponent } from './application/home/help-one/help-one.component';
import { ProfileComponent } from './application/home/profile/profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home - eCommerce Admin - 16 AHEAD' } },
  { path: 'login', component: LoginPageComponent, data: { title: 'Login - eCommerce Admin - 16 AHEAD' } },
  { path: 'sign-up', component: SignUpPageComponent, data: { title: 'Sign Up - eCommerce Admin - 16 AHEAD' } },
  { path: 'reset', component: ResetPageComponent, data: { title: 'Password Reset - eCommerce Admin - 16 AHEAD' } },
  { path: 'logout', component: LogoutPageComponent, data: { title: 'You Are Logged Out - eCommerce Admin - 16 AHEAD' } },
  { path: 'maintenance', component: MaintenanceComponent, data: { title: 'Maintenance - eCommerce Admin - 16 AHEAD' } },
  { path: 'not-found', component: NotFoundComponent, data: { title: '404 - Page Not Found' } },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'privacy', component: PrivacyComponent, data: { title: 'Privacy Statement' } },
      { path: 'terms', component: TermsComponent, data: { title: 'Terms Statement' } },

    ]
  },
  { path: 'stores', canActivate: [AuthGuard], component: StoreListComponent, data: { title: 'Store Listing' } },
  { path: 'stores/new', canActivate: [AuthGuard], resolve: { store: StoreResolverService }, component: StoreEditComponent, data: { title: 'Store Creation' } },
  { path: 'stores/help', component: HelpOneComponent, data: { title: 'Help' } },
  { path: 'stores/dashboard', canActivate: [AuthGuard], component: DashboardComponent, data: { title: 'eCommerce Dashboard' } },
  { path: 'stores/profile', canActivate: [AuthGuard], component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'stores/general-settings', canActivate: [AuthGuard], component: GeneralComponent, data: { title: 'General Settings' } },
  { path: 'stores/settings-display-name', canActivate: [AuthGuard], component: DisplayNameComponent, data: { title: 'Display Name' } },
  { path: 'stores/settings-email-address', canActivate: [AuthGuard], component: EmailAddressComponent, data: { title: 'Email Address' } },
  { path: 'stores/settings-avatar', canActivate: [AuthGuard], component: AvatarComponent, data: { title: 'Avatar' } },
  { path: 'stores/settings-verify', canActivate: [AuthGuard], component: VeriifyComponent, data: { title: 'Email Address Verification' } },
  { path: 'stores/:id', canActivate: [AuthGuard], resolve: { store: StoreViewResolverService }, component: StoreViewComponent, data: { title: 'Store' } },
  { path: 'stores/:id/edit', canActivate: [AuthGuard], resolve: { store: StoreResolverService }, component: StoreEditComponent, data: { title: 'Store Edit' } },
  { path: 'stores/:id/orders', canActivate: [AuthGuard], component: OrderListComponent, data: { title: 'Order Listing' } },
  { path: 'stores/:id/catalogs', canActivate: [AuthGuard], component: CatalogListComponent, data: { title: 'Catalog Listing' } },
  { path: 'stores/:id/payments', canActivate: [AuthGuard], component: PaymentListComponent, data: { title: 'Payment Listing' } },

  { path: 'stores/:id/orders/new', canActivate: [AuthGuard], resolve: { order: OrderResolverService }, component: OrderEditComponent, data: { title: 'Order Creation' } },
  { path: 'stores/:id/catalogs/new', canActivate: [AuthGuard], resolve: { catalog: CatalogResolverService }, component: CatalogEditComponent, data: { title: 'Catalog Creation' } },
  { path: 'stores/:id/payments/new', canActivate: [AuthGuard], resolve: { payment: PaymentResolverService }, component: PaymentEditComponent, data: { title: 'Payment Creation' } },

  { path: 'stores/:id/payments/:id2', canActivate: [AuthGuard], resolve: { payment: PaymentViewResolverService }, component: PaymentViewComponent, data: { title: 'Payment' } },
  { path: 'stores/:id/catalogs/:id2', canActivate: [AuthGuard], resolve: { catalog: CatalogViewResolverService }, component: CatalogViewComponent, data: { title: 'Catalog' } },
  { path: 'stores/:id/orders/:id2', canActivate: [AuthGuard], resolve: { order: OrderViewResolverService }, component: OrderViewComponent, data: { title: 'Order' } },

  { path: 'stores/:id/catalogs/:id2/edit', canActivate: [AuthGuard], resolve: { catalog: CatalogResolverService }, component: CatalogEditComponent, data: { title: 'Catalog Edit' } },
  { path: 'stores/:id/orders/:id2/edit', canActivate: [AuthGuard], resolve: { order: OrderResolverService }, component: OrderEditComponent, data: { title: 'Order Edit' } },
  { path: 'stores/:id/payments/:id2/edit', canActivate: [AuthGuard], resolve: { payment: PaymentResolverService }, component: PaymentEditComponent, data: { title: 'Payment Edit' } },


  { path: 'stores/:id/catalogs/:id2/offers', canActivate: [AuthGuard], component: OfferListComponent, data: { title: 'Offer Listing' } },
  { path: 'stores/:id/catalogs/:id2/products', canActivate: [AuthGuard], component: ProductListComponent, data: { title: 'Product Listing' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles', canActivate: [AuthGuard], component: ProductBundleListComponent, data: { title: 'Product Bundle Listing' } },

  { path: 'stores/:id/catalogs/:id2/offers/new', canActivate: [AuthGuard], resolve: { offer: OfferResolverService }, component: OfferEditComponent, data: { title: 'Offer Creation' } },
  { path: 'stores/:id/catalogs/:id2/products/new', canActivate: [AuthGuard], resolve: { product: ProductResolverService }, component: ProductEditComponent, data: { title: 'Product Creation' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles/new', canActivate: [AuthGuard], resolve: { productBundle: ProductBundleResolverService }, component: ProductBundleEditComponent, data: { title: 'Product Bundle Creation' } },


  { path: 'stores/:id/catalogs/:id2/offers/:id3', canActivate: [AuthGuard], resolve: { offer: OfferViewResolverService }, component: OfferViewComponent, data: { title: 'Offer' } },
  { path: 'stores/:id/catalogs/:id2/products/:id3', canActivate: [AuthGuard], resolve: { product: ProductViewResolverService }, component: ProductViewComponent, data: { title: 'Product' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles/:id3', canActivate: [AuthGuard], resolve: { productBundle: ProductBundleViewResolverService }, component: ProductBundleViewComponent, data: { title: 'Product Bundle' } },


  { path: 'stores/:id/catalogs/:id2/offers/:id3/edit', canActivate: [AuthGuard], resolve: { offer: OfferResolverService }, component: OfferEditComponent, data: { title: 'Offer Edit' } },
  { path: 'stores/:id/catalogs/:id2/products/:id3/edit', canActivate: [AuthGuard], resolve: { product: ProductResolverService }, component: ProductEditComponent, data: { title: 'Product Edit' } },
  { path: 'stores/:id/catalogs/:id2/product-bundles/:id3/edit', canActivate: [AuthGuard], resolve: { productBundle: ProductBundleResolverService }, component: ProductBundleEditComponent, data: { title: 'Product Bundle Edit' } },

  { path: '**', redirectTo: '/not-found' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
