import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { MarketingModule } from './marketing/marketing.module';
import { ApplicationModule } from './application/application.module';

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule) },
  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
  { path: '',   redirectTo: 'about', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
