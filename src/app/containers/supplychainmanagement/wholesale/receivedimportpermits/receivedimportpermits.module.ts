import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewreceivedimportpermitsComponent } from './viewreceivedimportpermits/viewreceivedimportpermits.component';
import { ReceivedimportpermitsRoutingModule } from './receivedimportpermits-routing.module';
import { ReceivedimportpermitsComponent } from './receivedimportpermits.component'; 
import { SharedModule } from '@app/theme/shared/shared.module';

@NgModule({
  declarations: [ReceivedimportpermitsComponent, ViewreceivedimportpermitsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReceivedimportpermitsRoutingModule
  ]
})
export class ReceivedimportpermitsModule { }
