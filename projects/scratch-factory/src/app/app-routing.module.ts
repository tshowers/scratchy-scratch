import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LickyMarketingModule } from './licky-marketing/licky-marketing.module';
import { LickyAppModule } from './licky-app/licky-app.module';

const routes: Routes = [
  { path: '', redirectTo: 'marketing/general-widgets', pathMatch: 'full' },
  { path: 'marketing', loadChildren: () => import('./licky-marketing/licky-marketing.module').then(m => m.LickyMarketingModule) },
  { path: 'application', loadChildren: () => import('./licky-app/licky-app.module').then(m => m.LickyAppModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
