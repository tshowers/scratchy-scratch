import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgbTypeaheadModule, NgbPopoverModule, NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
import { LickAppWidgetFooterModule } from 'lick-app-widget-footer';

import { LickMarketingFaq2Module } from 'lick-marketing-faq2';
import { LickMarketingAboutProduct5Module} from 'lick-marketing-about-product5'; 
import { LickMarketingAboutProduct7Module} from 'lick-marketing-about-product7'; 
import { LickMarketingPrices2Module} from 'lick-marketing-prices2';
import { LickMarketingLightbox1Module} from 'lick-marketing-lightbox1';

import { LickAppWidgetTableDataModule } from 'lick-app-widget-table-data';
import { LickAppWidgetStats15Module } from 'lick-app-widget-stats15';
import { LickAppWidgetItemView1Module} from 'lick-app-widget-item-view1';
import { LickAppWidgetDropBoxModule} from 'lick-app-widget-drop-box';
import { LickAppWidgetSectionEditModule } from 'lick-app-widget-section-edit';

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
      NgbTypeaheadModule, NgbPopoverModule, NgbTabsetModule, NgbDatepickerModule,
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
      LickAppWidgetFooterModule,
      LickAppWidgetStats15Module,
      LickAppWidgetTableDataModule,
      LickAppWidgetItemView1Module,
      LickMarketingFaq2Module,
      LickMarketingAboutProduct5Module,
      LickMarketingAboutProduct7Module,
      LickMarketingPrices2Module,
      LickMarketingLightbox1Module,
      CKEditorModule,
      LickAppWidgetDropBoxModule,
      LickAppWidgetSectionEditModule
    ],
    exports: [
      CommonModule,
      AutoFocusDirective,
      FormsModule,
      RouterModule,
      AgmCoreModule,
      HttpClientModule,
      NgbTypeaheadModule, NgbPopoverModule, NgbTabsetModule, NgbDatepickerModule,
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
      LickAppWidgetFooterModule,
      LickAppWidgetStats15Module,
      LickAppWidgetTableDataModule,
      LickAppWidgetItemView1Module,
      LickMarketingFaq2Module,
      LickMarketingAboutProduct5Module,
      LickMarketingAboutProduct7Module,
      LickMarketingPrices2Module,
      LickMarketingLightbox1Module,
      CKEditorModule,
      LickAppWidgetDropBoxModule,
      LickAppWidgetSectionEditModule
    ]
  })
  export class SharedModule { }