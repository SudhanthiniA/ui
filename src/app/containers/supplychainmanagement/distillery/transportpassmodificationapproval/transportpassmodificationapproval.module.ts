import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TransportpassmodificationapprovalRoutingModule } from './transportpassmodificationapproval-routing.module';
import { TransportpassmodificationapprovalComponent } from './transportpassmodificationapproval.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    TransportpassmodificationapprovalComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassmodificationapprovalRoutingModule
  ]
})
export class TransportpassmodificationapprovalModule { }
