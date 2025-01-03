import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoremasterComponent } from './storemaster.component';
import { AddstoremasterComponent } from './addstoremaster/addstoremaster.component';
import { ViewstoremasterComponent } from './viewstoremaster/viewstoremaster.component';


const routes: Routes = [
  {
    path : 'list',
    component : StoremasterComponent
  },
  {
    path : 'add',
    component : AddstoremasterComponent
  },
  {
    path : 'edit/:Id',
    component : AddstoremasterComponent
  },
  {
    path : 'view/:Id',
    component : ViewstoremasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoremasterRoutingModule { }
