import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountToModule } from 'angular-count-to';
import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationRoutingModule } from './application-routing.module';

import { LickAppWidgetSignupModule } from 'lick-app-widget-signup';
import { LickAppWidgetMaintenanceModule } from 'lick-app-widget-maintenance';
import { LickAppWidgetLoginModule } from 'lick-app-widget-login';
import { LickAppWidgetLockScreenModule } from 'lick-app-widget-lock-screen';
import { LickAppWidgetForgotPasswordModule } from 'lick-app-widget-forgot-password';
import { LickAppWidgetLogoutModule } from 'lick-app-widget-logout';
import { LickMarketingMenuModule } from 'lick-marketing-menu';
import { LickAppWidgetPost1Module } from 'lick-app-widget-post1';
import { LickAppWidgetPost2Module } from 'lick-app-widget-post2';
import { LickAppWidgetPost3Module } from 'lick-app-widget-post3';
import { LickAppWidgetPost4Module } from 'lick-app-widget-post4';
import { LickMarketingLatestPost1Module } from 'lick-marketing-latest-post1';
import { LickMarketingLatestPost2Module } from 'lick-marketing-latest-post2';
import { LickAppWidgetSpinnerModule } from 'lick-app-widget-spinner';
import { LickAppWidgetWeatherModule } from 'lick-app-widget-weather';
import { LickMarketingSimpleHeaderModule} from 'lick-marketing-simple-header';
import { LickMarketingSimplePageModule} from 'lick-marketing-simple-page';
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';
import { LickMarketingFooter1Module } from 'lick-marketing-footer1';
import { LickMarketingFooter2Module } from 'lick-marketing-footer2';
import { LickAppWidgetProfileModule } from 'lick-app-widget-profile';
import { LickMarketingVideo1Module } from 'lick-marketing-video1';
import { LickAppWidgetFeedModule } from 'lick-app-widget-feed';
import { NewsPickerComponent } from './news-picker/news-picker.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsLoginComponent } from './news-login/news-login.component';
import { NewsMaintenanceComponent } from './news-maintenance/news-maintenance.component';
import { NewsSignupComponent } from './news-signup/news-signup.component';
import { NewsForgotPasswordComponent } from './news-forgot-password/news-forgot-password.component';
import { NewsScreenLockComponent } from './news-screen-lock/news-screen-lock.component';
import { NewsLogoutComponent } from './news-logout/news-logout.component';
import { NewsReaderComponent } from './news-reader/news-reader.component';
import { NewsHelperService} from './services/news-helper.service';
import { NewsProfileComponent } from './news-profile/news-profile.component';

@NgModule({
  declarations: [NewsPickerComponent, NewsViewComponent, NewsLoginComponent, NewsMaintenanceComponent, NewsSignupComponent, NewsForgotPasswordComponent, NewsScreenLockComponent, NewsLogoutComponent, NewsReaderComponent, NewsProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    SharedModule,
    CountToModule,
    ApplicationRoutingModule,
    LickAppWidgetSignupModule,
    LickAppWidgetMaintenanceModule,
    LickAppWidgetLoginModule,
    LickAppWidgetLockScreenModule,
    LickAppWidgetForgotPasswordModule,
    LickAppWidgetLogoutModule,
    LickMarketingMenuModule,
    LickAppWidgetPost1Module,
    LickAppWidgetPost2Module,
    LickAppWidgetPost3Module,
    LickAppWidgetPost4Module,
    LickMarketingLatestPost1Module,
    LickMarketingLatestPost2Module,
    LickAppWidgetSpinnerModule,
    LickMarketingFooter1Module,
    LickAppWidgetWeatherModule,
    LickMarketingSimpleHeaderModule,
    LickMarketingSimplePageModule,
    LickAppWidgetFooterModule,
    LickMarketingFooter2Module,
    LickAppWidgetProfileModule,
    LickMarketingVideo1Module,
    LickAppWidgetFeedModule
  ],
  providers: [
    NewsHelperService
  ]

})
export class ApplicationModule { }
