import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { CountToModule } from 'angular-count-to';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetChatComponent } from './lick-app-widget-chat.component';

@NgModule({
  declarations: [LickAppWidgetChatComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickDataModule,
    CountToModule,
    LickyServicesModule
  ],
  exports: [LickAppWidgetChatComponent]
})
export class LickAppWidgetChatModule { }
