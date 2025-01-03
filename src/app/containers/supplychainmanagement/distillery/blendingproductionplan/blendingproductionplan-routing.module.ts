import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddblendingproductionplanComponent } from './addblendingproductionplan/addblendingproductionplan.component';
import { ViewblendingproductionplanComponent } from './viewblendingproductionplan/viewblendingproductionplan.component';
import { BlendingproductionplanComponent } from './blendingproductionplan.component';

const routes: Routes = [
  { path: 'list', component: BlendingproductionplanComponent},
  {path: 'add', component: AddblendingproductionplanComponent},
  {path: 'view', component: ViewblendingproductionplanComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlendingproductionplanRoutingModule { }
