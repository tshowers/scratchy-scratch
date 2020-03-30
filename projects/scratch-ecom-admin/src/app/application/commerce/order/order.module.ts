import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        OrderEditComponent,
        OrderListComponent,
        OrderViewComponent,

    ],
    exports: [
        OrderEditComponent,
        OrderListComponent,
        OrderViewComponent,

    ]
})
export class OrderModule { }