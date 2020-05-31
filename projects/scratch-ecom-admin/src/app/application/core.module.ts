import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModule } from './commerce/catalog/catalog.module';
import { OfferModule } from './commerce/offer/offer.module';
import { OrderModule } from './commerce/order/order.module';
import { PaymentModule } from './commerce/payment/payment.module';
import { ProductModule } from './commerce/product/product.module';
import { StoreModule } from './commerce/store/store.module';
import { AccessModule } from './access/access.module';
import { DashboardModule } from './commerce/dashboard/dashboard.module';
import { SettingsModule } from './settings/settings.module';
import { HomeModule } from './home/home.module';
import { LickyServicesModule } from 'licky-services';
import { DataMediationService } from '../shared/services/data-mediation.service';
import { BreadCrumbService } from '../shared/services/bread-crumb.service';
import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
    imports: [
        CommonModule,
        LickyServicesModule.forRoot(firebaseConfig),
        CatalogModule,
        OfferModule,
        OrderModule,
        PaymentModule,
        ProductModule,
        StoreModule,
        AccessModule,
        DashboardModule,
        HomeModule,
        SettingsModule
    ],
    declarations: [
    ],
    providers: [
        DataMediationService,
        BreadCrumbService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core already loaded');
        }
    }
    static forRoot() {
        return {
            ngModule: CoreModule
        }
    }
}