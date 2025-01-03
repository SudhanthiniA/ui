import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutemasterComponent } from './routemaster.component';
import { AddeditrouteComponent } from './addeditroute/addeditroute.component';
import { ViewrouteComponent } from './viewroute/viewroute.component';


const routes: Routes = [
  {
    path: 'list',
    component: RoutemasterComponent
  },
  {
    path: 'add',
    component: AddeditrouteComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditrouteComponent
  },
  {
    path: 'view/:Id',
    component: ViewrouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutemasterRoutingModule { }
