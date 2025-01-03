import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitComponent } from './importpermit.component';
import { AddimportpermitComponent } from './addimportpermit/addimportpermit.component';
import { ViewimportpermitComponent } from './viewimportpermit/viewimportpermit.component';
import { ImportpermitsuccessComponent } from './importpermitsuccess/importpermitsuccess.component';
import { EditimportpermitComponent } from './editimportpermit/editimportpermit.component';
import { ListapproverComponent } from './listapprover/listapprover.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : ImportpermitComponent
  },
  {
    path : 'add',
    component : AddimportpermitComponent
  },
  {
    path : 'edit',
    component : EditimportpermitComponent
  },
  {
    path : 'view',
    component : ViewimportpermitComponent
  },
  {
    path : 'preview',
    component : ViewimportpermitComponent
  },
  {
    path : 'success',
    component : ImportpermitsuccessComponent
  },
  {
    path : 'listapproval',
    component : ListapproverComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitRoutingModule { }
