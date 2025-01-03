import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaserequestComponent } from './purchaserequest.component';
import { ViewpurchaserequestComponent } from './viewpurchaserequest/viewpurchaserequest.component';
import { AddeditpurchaserequestComponent } from './addeditpurchaserequest/addeditpurchaserequest.component';


const routes: Routes = [
  {
    path : 'list',
    component : PurchaserequestComponent
  },
  {
    path: 'view/:id',
    component : ViewpurchaserequestComponent
  },
  {
    path: 'preview',
    component : ViewpurchaserequestComponent
  },
  {
    path : 'add',
    component : AddeditpurchaserequestComponent
  },
  {
    path : 'edit/:id',
    component : AddeditpurchaserequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaserequestRoutingModule { }
