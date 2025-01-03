import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditpenaltymasterComponent } from './addeditpenaltymaster/addeditpenaltymaster.component';
import { ViewpenaltyComponent } from './viewpenalty/viewpenalty.component';
import { PenaltymasterComponent } from './penaltymaster.component';


const routes: Routes = [
  {
    path: 'list',
    component: PenaltymasterComponent
  },
  {
    path: 'add',
    component: AddeditpenaltymasterComponent
  },
  {
    path : 'edit/:Id',
    component: AddeditpenaltymasterComponent
  },
  {
    path : 'view/:Id',
    component : ViewpenaltyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenaltymasterRoutingModule { }
