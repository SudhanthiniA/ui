import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundandduplicatesComponent } from './foundandduplicates.component';
import { ViewfoundandduplicatesComponent } from './viewfoundandduplicates/viewfoundandduplicates.component';

const routes: Routes = [
  { path: 'list', component: FoundandduplicatesComponent },

  {
    path: 'view',
    component: ViewfoundandduplicatesComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundandduplicatesRoutingModule { }
