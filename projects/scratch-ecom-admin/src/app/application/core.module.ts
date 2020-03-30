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
import { HomeModule } from './home/home.module';

import {
    FirebaseDataService,
    DropdownService,
    DateUtilService,
    LickyLoginService,
    NewsService,
    RemoteAssetService,
    UserLocationService,
    UploadService,
    TypeFindService,
    SortHelperService,
    WeatherService
} from 'licky-services';

@NgModule({
    imports: [
        CommonModule,
        CatalogModule,
        OfferModule,
        OrderModule,
        PaymentModule,
        ProductModule,
        StoreModule,
        AccessModule,
        DashboardModule,
        HomeModule
    ],
    declarations: [
    ],
    providers: [
        FirebaseDataService,
        DropdownService,
        DateUtilService,
        LickyLoginService,
        NewsService,
        RemoteAssetService,
        UserLocationService,
        UploadService,
        TypeFindService,
        SortHelperService,
        WeatherService,
        HomeModule
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