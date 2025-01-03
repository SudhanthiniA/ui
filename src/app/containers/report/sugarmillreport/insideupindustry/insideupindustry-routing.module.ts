import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsideupindustryComponent } from './insideupindustry.component';

const routes: Routes = [
  {
    path : 'list',
    component : InsideupindustryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideupindustryRoutingModule { }
