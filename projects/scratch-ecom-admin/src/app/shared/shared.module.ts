import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoFocusDirective } from './directives/auto-focus.directive';

import { LickDataModule } from 'lick-data';
import { LickAppPageModule } from 'lick-app-page';
import { LickAppWidgetChatPopupModule } from 'lick-app-widget-chat-popup';
import { LickAppWidgetBreadcrumbModule } from 'lick-app-widget-breadcrumb';
import { LickAppWidgetDataFooterModule } from 'lick-app-widget-data-footer';
import { LickAppWidgetProfileModule } from 'lick-app-widget-profile';
import { LickAppWidgetLeftSideMenuModule } from 'lick-app-widget-left-side-menu';
import { LickAppWidgetRightSideMenuModule } from 'lick-app-widget-right-side-menu';
import { LickAppWidgetUnderConstructionModule } from 'lick-app-widget-under-construction';

import { environment } from '../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
    declarations: [AutoFocusDirective ],
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RouterModule,
      AgmCoreModule.forRoot({ apiKey: environment.googleMapsKey, libraries: ["places"] }),
      NgbModule,
      UiSwitchModule,
      LickDataModule,
      LickAppPageModule,
      LickAppWidgetChatPopupModule,
      LickAppWidgetBreadcrumbModule,
      LickAppWidgetDataFooterModule,
      LickAppWidgetProfileModule,
      LickAppWidgetLeftSideMenuModule,
      LickAppWidgetRightSideMenuModule,
      LickAppWidgetUnderConstructionModule,
    ],
    exports: [
      AutoFocusDirective,
      FormsModule,
      RouterModule,
      AgmCoreModule,
      HttpClientModule,
      NgbModule,
      UiSwitchModule,
      LickDataModule,
      LickAppPageModule,
      LickAppWidgetChatPopupModule,
      LickAppWidgetBreadcrumbModule,
      LickAppWidgetDataFooterModule,
      LickAppWidgetProfileModule,
      LickAppWidgetLeftSideMenuModule,
      LickAppWidgetRightSideMenuModule,
      LickAppWidgetUnderConstructionModule,
    ]
  })
  export class SharedModule { }