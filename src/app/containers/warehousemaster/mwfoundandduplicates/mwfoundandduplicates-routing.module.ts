import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwfoundandduplicatesComponent } from './mwfoundandduplicates.component';
import { ViewmwfoundandduplicatesComponent } from './viewmwfoundandduplicates/viewmwfoundandduplicates.component';

const routes: Routes = [
  { path: 'list', component: MwfoundandduplicatesComponent },
  { path: 'view', component: ViewmwfoundandduplicatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwfoundandduplicatesRoutingModule { }
