import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchfaqComponent } from './searchfaq.component';


const routes: Routes = [
  { path: '', component: SearchfaqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchfaqRoutingModule { }
