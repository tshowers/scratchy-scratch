import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferViewComponent } from './offer-view/offer-view.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        OfferEditComponent,
        OfferListComponent,
        OfferViewComponent,
    ],
    exports: [
        OfferEditComponent,
        OfferListComponent,
        OfferViewComponent,
    ]
})
export class OfferModule { }