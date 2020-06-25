import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LickDataModule } from 'lick-data';
import { LickyServicesModule } from 'licky-services';
import { LickAppWidgetChatModule} from 'lick-app-widget-chat';
import { LickAppWidgetChatPopupComponent } from './lick-app-widget-chat-popup.component';

@NgModule({
  declarations: [LickAppWidgetChatPopupComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LickDataModule,
    LickyServicesModule,
    LickAppWidgetChatModule
  ],
  exports: [LickAppWidgetChatPopupComponent]
})
export class LickAppWidgetChatPopupModule { }
