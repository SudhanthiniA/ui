import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftconfigComponent } from './shiftconfig.component';
import { AddshiftconfigComponent } from './addshiftconfig/addshiftconfig.component';
import { ViewshiftconfigComponent } from './viewshiftconfig/viewshiftconfig.component';


const routes: Routes = [
  {
    path: 'list',
    component: ShiftconfigComponent
  },
  {
    path: 'add',
    component: AddshiftconfigComponent
  },
  {
    path: 'view',
    component: ViewshiftconfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftconfigRoutingModule { }
