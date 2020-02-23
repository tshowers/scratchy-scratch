import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LickyMarketingModule } from './licky-marketing/licky-marketing.module';
import { LickyAppModule } from './licky-app/licky-app.module';

const routes: Routes = [
  { path: '', redirectTo: 'marketing/general-widgets', pathMatch: 'full' },
  { path: 'marketing', loadChildren: './licky-marketing/licky-marketing.module#LickyMarketingModule' },
  { path: 'application', loadChildren: './licky-app/licky-app.module#LickyAppModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
