import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        PaymentEditComponent,
        PaymentListComponent,
        PaymentViewComponent,

    ],
    exports: [
        PaymentEditComponent,
        PaymentListComponent,
        PaymentViewComponent,

    ]
})
export class PaymentModule { }