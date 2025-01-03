import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4ReceivedbydistilleryComponent } from './mf4-receivedbydistillery.component';
import { Mf4RecievedbydistilleryViewComponent } from './mf4-recievedbydistillery-view/mf4-recievedbydistillery-view.component';
import { Mf4RecieddistilleryEditComponent } from './mf4-recieddistillery-edit/mf4-recieddistillery-edit.component';
import { Previewmf4RecivedComponent } from './previewmf4-recived/previewmf4-recived.component';
import { AddComponent } from './add/add.component';
import { AcklistComponent } from './acklist/acklist.component';
import { ApprovalviewComponent } from './approvalview/approvalview.component';



const routes: Routes = [{ path: 'list', component: Mf4ReceivedbydistilleryComponent },
{ path: 'view', component: Mf4RecievedbydistilleryViewComponent},
{ path: 'add', component: AddComponent},
{ path: 'preview', component: Previewmf4RecivedComponent},
{ path: 'edit', component: Mf4RecieddistilleryEditComponent},
{ path: 'acklist', component: AcklistComponent},
{ path: 'approvalview', component: ApprovalviewComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4ReceivedbydistilleryRoutingModule { }
