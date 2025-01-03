import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisitionoftransportpassComponent } from './requisitionoftransportpass.component';
import { AddrequisitionoftransportpassComponent } from './addrequisitionoftransportpass/addrequisitionoftransportpass.component';
import { ViewrequisitionoftransportpassComponent } from './viewrequisitionoftransportpass/viewrequisitionoftransportpass.component';
import { CancelmodifyrequisitionoftransportpassComponent } from './cancelmodifyrequisitionoftransportpass/cancelmodifyrequisitionoftransportpass.component';
import { EditrequisitionoftransportpassComponent } from './editrequisitionoftransportpass/editrequisitionoftransportpass.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { RequisitionoftransportpassRoutingModule } from './requisitionoftransportpass-routing.module';


@NgModule({
  declarations: [RequisitionoftransportpassComponent, AddrequisitionoftransportpassComponent, ViewrequisitionoftransportpassComponent, CancelmodifyrequisitionoftransportpassComponent, EditrequisitionoftransportpassComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequisitionoftransportpassRoutingModule
  ]
})
export class RequisitionoftransportpassModule { }
