import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintqrcodesComponent } from './printqrcodes.component';
import { AddprintqrcodesComponent } from './addprintqrcodes/addprintqrcodes.component';
import { ViewprintqrcodesComponent } from './viewprintqrcodes/viewprintqrcodes.component';


const routes: Routes = [

  {
    path : 'list',
    component : PrintqrcodesComponent
  },
  {
    path: 'view/:Id',
    component : ViewprintqrcodesComponent
  },
  {
    path : 'add',
    component : AddprintqrcodesComponent
  },
  {
    path: 'edit/:Id',
    component: AddprintqrcodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintqrcodesRoutingModule { }
