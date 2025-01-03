import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EalrequestRoutingModule } from './ealrequest-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { PuapplicantviewComponent } from './puapplicantview/puapplicantview.component';
import { BwflacceptanceComponent } from './bwflacceptance/bwflacceptance.component';
import { BwfltransportpassComponent } from './bwfltransportpass/bwfltransportpass.component';
import { BwfltransportpassviewComponent } from './bwfltransportpassview/bwfltransportpassview.component';
import { VendordispatchComponent } from './vendordispatch/vendordispatch.component';
import { VendordispatchviewComponent } from './vendordispatchlist/vendordispatchview.component';


@NgModule({
  declarations: [VendordispatchviewComponent,ListComponent, AddComponent, PuapplicantviewComponent, BwflacceptanceComponent,VendordispatchComponent, BwfltransportpassComponent, BwfltransportpassviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    EalrequestRoutingModule
  ]
})
export class EalrequestModule { }
