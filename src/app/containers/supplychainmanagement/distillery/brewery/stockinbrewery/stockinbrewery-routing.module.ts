import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinbreweryComponent } from './stockinbrewery.component';
import { AddstockinbreweryComponent } from './addstockinbrewery/addstockinbrewery.component';
import { ViewstockinbreweryComponent } from './viewstockinbrewery/viewstockinbrewery.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockinbreweryComponent
  },
  {
    path : 'add',
    component : AddstockinbreweryComponent
  },
  {
    path : 'view',
    component : ViewstockinbreweryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinbreweryRoutingModule { }
