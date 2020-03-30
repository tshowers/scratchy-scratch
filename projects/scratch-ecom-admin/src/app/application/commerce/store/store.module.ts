import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreViewComponent } from './store-view/store-view.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        StoreEditComponent,
        StoreListComponent,
        StoreViewComponent,

    ],
    exports: [
        StoreEditComponent,
        StoreListComponent,
        StoreViewComponent,

    ]
})
export class StoreModule { }