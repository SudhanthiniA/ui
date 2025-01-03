import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MwindentacceptanceComponent } from './mwindentacceptance.component';
import { ViewmwindentacceptanceComponent } from './viewmwindentacceptance/viewmwindentacceptance.component';


const routes: Routes = [
  { path: 'list', component: MwindentacceptanceComponent },
{ path: 'view', component: ViewmwindentacceptanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwindentacceptanceRoutingModule { }
