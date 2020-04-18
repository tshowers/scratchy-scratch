import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GeneralComponent } from './general/general.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [

    GeneralComponent],
    exports: [
        GeneralComponent
    ]
})
export class SettingsModule { }