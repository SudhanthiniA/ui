import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockinformComponent } from './stockinform.component';
import { AddstockinformComponent } from './addstockinform/addstockinform.component';
import { ViewstockinformComponent } from './viewstockinform/viewstockinform.component';


const routes: Routes = [
  {
    path: 'list',
    component: StockinformComponent
  },
  {
    path: 'add',
    component: AddstockinformComponent
  },
  {
    path : 'view',
    component: ViewstockinformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinformRoutingModule { }
