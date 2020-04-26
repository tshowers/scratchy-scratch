import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GeneralComponent } from './general/general.component';
import { DisplayNameComponent } from './display-name/display-name.component';
import { EmailAddressComponent } from './email-address/email-address.component';
import { AvatarComponent } from './avatar/avatar.component';
import { VeriifyComponent } from './veriify/veriify.component';


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [

    GeneralComponent,

    DisplayNameComponent,

    EmailAddressComponent,

    AvatarComponent,

    VeriifyComponent],
    exports: [
    ]
})
export class SettingsModule { }