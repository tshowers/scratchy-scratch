import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LickAppWidgetSectionEditComponent } from './lick-app-widget-section-edit.component';



@NgModule({
  declarations: [LickAppWidgetSectionEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    LickDataModule
  ],
  exports: [LickAppWidgetSectionEditComponent]
})
export class LickAppWidgetSectionEditModule { }
