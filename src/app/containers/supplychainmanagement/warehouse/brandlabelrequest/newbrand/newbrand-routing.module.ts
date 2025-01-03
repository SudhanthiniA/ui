import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewbrandComponent } from './newbrand.component';
import { ViewnewbrandComponent } from './viewnewbrand/viewnewbrand.component';
import { AddnewbrandComponent } from './addnewbrand/addnewbrand.component';

const routes: Routes = [
  { path: 'list', component: NewbrandComponent },
  { path: 'add', component: AddnewbrandComponent },
  { path: 'edit/:id', component: AddnewbrandComponent },
  { path: 'view/:id', component: ViewnewbrandComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewbrandRoutingModule { }
