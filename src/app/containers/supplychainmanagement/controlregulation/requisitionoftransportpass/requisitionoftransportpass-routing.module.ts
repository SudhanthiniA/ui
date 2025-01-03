import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisitionoftransportpassComponent } from './requisitionoftransportpass.component';
import { AddrequisitionoftransportpassComponent } from './addrequisitionoftransportpass/addrequisitionoftransportpass.component';
import { ViewrequisitionoftransportpassComponent } from './viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';
import { CancelmodifyrequisitionoftransportpassComponent } from './cancelmodifyrequisitionoftransportpass/cancelmodifyrequisitionoftransportpass.component';
import { EditrequisitionoftransportpassComponent } from './editrequisitionoftransportpass/editrequisitionoftransportpass.component';

const routes: Routes = [
  { path: 'list', component: RequisitionoftransportpassComponent},
  {path: 'add', component: AddrequisitionoftransportpassComponent},
  {path: 'edit', component: EditrequisitionoftransportpassComponent},
  {path: 'cancel', component: CancelmodifyrequisitionoftransportpassComponent},
  {path: 'view', component:ViewrequisitionoftransportpassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisitionoftransportpassRoutingModule { }
