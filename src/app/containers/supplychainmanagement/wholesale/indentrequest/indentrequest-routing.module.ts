import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddindentrequestComponent } from './addindentrequest/addindentrequest.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { IndentrequestsendComponent } from './indentrequestsend/indentrequestsend.component';
import { IndentrequestComponent } from './indentrequest.component';
import { EditindentrequestComponent } from './editindentrequest/editindentrequest.component';
import { PaymentComponent } from './payment/payment.component';
import { ApprovalComponent } from './approval/approval.component';


const routes: Routes = [
  {
    path : 'list',
    component : IndentrequestComponent
  },
  {
    path : 'approval',
    component : ApprovalComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  },
  {
    path : 'add',
    component : AddindentrequestComponent
  },
  {
    path : 'edit',
    component : EditindentrequestComponent
  },
  {
    path : 'edit/:id',
    component : AddindentrequestComponent
  },
  {
    path : 'success',
    component : IndentrequestsendComponent
  },
  {
    path : 'view',
    component : ViewindentrequestComponent
  },
  {
    path : 'preview',
    component : ViewindentrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentrequestRoutingModule { }
