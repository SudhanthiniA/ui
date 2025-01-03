import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { RetailtransferRoutingModule } from './retailtransfer-routing.module';
import { RetailtransferComponent } from './retailtransfer.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RetailtransferComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtransferRoutingModule
  ]
})
export class RetailtransferModule { }
