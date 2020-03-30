import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LickMarketingSecurityModule } from 'lick-marketing-security';

import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
    imports: [
        LickMarketingSecurityModule,
        SharedModule
    ],
    declarations: [
        LoginPageComponent,
        LogoutPageComponent,
        ResetPageComponent,
        SignUpPageComponent,

    ],
    exports: [
        LoginPageComponent,
        LogoutPageComponent,
        ResetPageComponent,
        SignUpPageComponent,

    ]
})
export class AccessModule { }