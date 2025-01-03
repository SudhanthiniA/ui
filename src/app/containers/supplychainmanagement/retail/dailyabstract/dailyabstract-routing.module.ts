import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyabstractComponent } from './dailyabstract.component';
import { ViewabstractComponent } from './viewabstract/viewabstract.component';
import { AddabstractComponent } from './addabstract/addabstract.component';

const routes: Routes = [
  {
    path: 'list',
    component: DailyabstractComponent
  },
  {
    path: 'add',
    component: AddabstractComponent
  },
  {
    path: 'view/:id',
    component: ViewabstractComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyabstractRoutingModule { }
