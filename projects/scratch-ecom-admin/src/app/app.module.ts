import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './application/core.module';

import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickAppWidgetLeftSideMenuModule} from 'lick-app-widget-left-side-menu';
import { LickAppWidgetChatPopupModule} from 'lick-app-widget-chat-popup';
import { LickAppWidgetRightSideMenuModule} from 'lick-app-widget-right-side-menu';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    LickAppWidgetFooterModule,
    LickAppWidgetRightSideMenuModule,
    LickAppWidgetChatPopupModule,
    LickAppWidgetLeftSideMenuModule,
    LickAppWidgetMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
