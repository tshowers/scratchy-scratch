import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductBundleEditComponent } from './product-bundle-edit/product-bundle-edit.component';
import { ProductBundleListComponent } from './product-bundle-list/product-bundle-list.component';
import { ProductBundleViewComponent } from './product-bundle-view/product-bundle-view.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ProductEditComponent,
        ProductListComponent,
        ProductViewComponent,
        ProductBundleEditComponent,
        ProductBundleListComponent,
        ProductBundleViewComponent,

    ],
    exports: [
        ProductEditComponent,
        ProductListComponent,
        ProductViewComponent,
        ProductBundleEditComponent,
        ProductBundleListComponent,
        ProductBundleViewComponent,

    ]
})
export class ProductModule { }