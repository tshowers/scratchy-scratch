import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LickAppWidgetStats1Module } from 'lick-app-widget-stats1';
import { LickAppWidgetStats2Module } from 'lick-app-widget-stats2';
import { LickAppWidgetStats3Module } from 'lick-app-widget-stats3';
import { LickAppWidgetStats4Module } from 'lick-app-widget-stats4';
import { LickAppWidgetStats5Module } from 'lick-app-widget-stats5';
import { LickAppWidgetStats6Module } from 'lick-app-widget-stats6';
import { LickAppWidgetStats9Module } from 'lick-app-widget-stats9';
import { LickAppWidgetStats11Module } from 'lick-app-widget-stats11';



@NgModule({
    imports: [
        SharedModule,
        LickAppWidgetStats1Module,
        LickAppWidgetStats2Module,
        LickAppWidgetStats3Module,
        LickAppWidgetStats4Module,
        LickAppWidgetStats5Module,
        LickAppWidgetStats6Module,
        LickAppWidgetStats9Module,
        LickAppWidgetStats11Module
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule { }