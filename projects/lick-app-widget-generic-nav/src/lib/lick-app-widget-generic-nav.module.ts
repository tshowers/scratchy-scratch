import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LickAppWidgetGenericNavComponent } from './lick-app-widget-generic-nav.component';



@NgModule({
  declarations: [LickAppWidgetGenericNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LickAppWidgetGenericNavComponent]
})
export class LickAppWidgetGenericNavModule { }
