import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { LickAppWidgetDropBoxComponent } from './lick-app-widget-drop-box.component';

import { DragDropDirective } from './drag-drop.directive';


@NgModule({
  declarations: [LickAppWidgetDropBoxComponent, DragDropDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickDataModule
  ],
  exports: [LickAppWidgetDropBoxComponent]
})
export class LickAppWidgetDropBoxModule { }
