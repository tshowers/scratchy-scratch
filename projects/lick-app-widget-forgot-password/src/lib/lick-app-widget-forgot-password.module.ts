import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LickAppWidgetForgotPasswordComponent } from './lick-app-widget-forgot-password.component';

@NgModule({
  declarations: [LickAppWidgetForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [LickAppWidgetForgotPasswordComponent]
})
export class LickAppWidgetForgotPasswordModule { }
