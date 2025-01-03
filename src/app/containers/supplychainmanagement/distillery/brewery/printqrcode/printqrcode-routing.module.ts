import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintqrcodeComponent } from './printqrcode.component';
import { AddprintqrcodeComponent } from './addprintqrcode/addprintqrcode.component';
import { ViewprintqrcodeComponent } from './viewprintqrcode/viewprintqrcode.component';   

const routes: Routes = [ 
  {
    path : 'add',
    component : AddprintqrcodeComponent
  },
  {
    path : 'view',
    component : ViewprintqrcodeComponent
  },
  {
    path : 'list',
    component : PrintqrcodeComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintqrcodeRoutingModule { }
