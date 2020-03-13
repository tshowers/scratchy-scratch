import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './application/not-found/not-found.component';

import { MarketingModule } from './marketing/marketing.module';
import { ApplicationModule } from './application/application.module';


const routes: Routes = [
  { path: 'shop', loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule) },
  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
  { path: '',   redirectTo: 'shop', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
