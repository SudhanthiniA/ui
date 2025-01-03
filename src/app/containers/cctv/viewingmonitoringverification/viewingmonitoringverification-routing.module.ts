import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewingmonitoringverificationComponent } from './viewingmonitoringverification.component';
import { AddviewingmonitoringverificationComponent } from './addviewingmonitoringverification/addviewingmonitoringverification.component';
import { ViewviewingmonitoringverificationComponent } from './viewviewingmonitoringverification/viewviewingmonitoringverification.component';

const routes: Routes = [
  {
    path: 'list',
    component: ViewingmonitoringverificationComponent
  },
  {
    path: 'add',
    component: AddviewingmonitoringverificationComponent
  },
  {
    path: 'view',
    component: ViewviewingmonitoringverificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewingmonitoringverificationRoutingModule { }
