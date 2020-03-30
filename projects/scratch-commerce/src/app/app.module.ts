import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core.module';

import { NgwWowModule } from 'ngx-wow';

import { LickAppWidgetNotFoundModule } from 'lick-app-widget-not-found';
import { LickAppWidgetMenuModule } from 'lick-app-widget-menu';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickMarketingFooter2Module} from 'lick-marketing-footer2';
import { LickMarketingCarouselModule } from 'lick-marketing-carousel';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './application/not-found/not-found.component';
import { NavComponent } from './shared/nav/nav/nav.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LickAppWidgetMenuModule,
    LickMarketingMenuModule,
    LickAppWidgetFooterModule,
    LickAppWidgetNotFoundModule,
    LickMarketingFooter2Module,
    LickMarketingCarouselModule,
    RouterModule,
    AppRoutingModule,
    NgwWowModule,
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
