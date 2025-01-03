import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReturnRoutingModule } from './return-routing.module';
import { ReturnComponent } from './return.component';
import { AddreturnComponent } from './addreturn/addreturn.component';
import { ViewreturnComponent } from './viewreturn/viewreturn.component';
import { ReturnqrscanComponent } from './returnqrscan/returnqrscan.component';


@NgModule({
  declarations: [ReturnComponent, AddreturnComponent, ViewreturnComponent, ReturnqrscanComponent],
  imports: [
    CommonModule,
    ReturnRoutingModule,
    SharedModule
  ]
})
export class ReturnModule { }
