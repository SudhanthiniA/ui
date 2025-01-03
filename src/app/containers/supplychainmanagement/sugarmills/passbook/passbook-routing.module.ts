import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewpassbookComponent } from './viewpassbook/viewpassbook.component';
import { AddeditpassbookComponent } from './addeditpassbook/addeditpassbook.component';
import { PassbookComponent } from './passbook.component';


const routes: Routes = [

  {
    path : 'list',
    component : PassbookComponent
  },
  {
    path : 'add',
    component : AddeditpassbookComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditpassbookComponent
  },
  {
    path : 'view/:Id',
    component : ViewpassbookComponent
  },
  {
    path : 'preview',
    component : ViewpassbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassbookRoutingModule { }
