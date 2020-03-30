import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        CatalogEditComponent,
        CatalogListComponent,
        CatalogViewComponent,
    ],
    exports: [
        CatalogEditComponent,
        CatalogListComponent,
        CatalogViewComponent,
    ]
})
export class CatalogModule { }