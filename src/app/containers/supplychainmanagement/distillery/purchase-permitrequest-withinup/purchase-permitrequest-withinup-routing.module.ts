import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasePermitrequestWithinupComponent } from './purchase-permitrequest-withinup.component';
import { AddPermitrequestComponent } from './add-permitrequest/add-permitrequest.component';
import { ViewPermitrequestComponent } from './view-permitrequest/view-permitrequest.component';

const routes: Routes = [{ path: 'list', component: PurchasePermitrequestWithinupComponent },
{ path: 'add', component: AddPermitrequestComponent },
{ path: 'edit/:id', component: AddPermitrequestComponent },
{ path: 'preview', component: ViewPermitrequestComponent },
{ path: 'view/:id', component: ViewPermitrequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasePermitrequestWithinupRoutingModule { }
