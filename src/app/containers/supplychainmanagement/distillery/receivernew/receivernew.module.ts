import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';


import { ReceivernewRoutingModule } from './receivernew-routing.module';
import { ReceivernewComponent } from './receivernew.component';
import { AddreceivernewComponent } from './addreceivernew/addreceivernew.component';
import { ViewreceivernewComponent } from './viewreceivernew/viewreceivernew.component';

@NgModule({
  declarations: [ReceivernewComponent, AddreceivernewComponent, ViewreceivernewComponent],
  imports: [
    CommonModule,
    ReceivernewRoutingModule,
    SharedModule
  ]
})
export class ReceivernewModule { }
