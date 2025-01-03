import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddtanktransferComponent } from './addtanktransfer/addtanktransfer.component';
import { ViewtanktransferComponent } from './viewtanktransfer/viewtanktransfer.component';

import { TanktransferRoutingModule} from './tanktransfer-routing.module';

import { TanktransferComponent } from './tanktransfer.component';
@NgModule({
  declarations: [AddtanktransferComponent, ViewtanktransferComponent, TanktransferComponent],
  imports: [
    CommonModule,
    TanktransferRoutingModule,
    SharedModule
  ]
})
export class TanktransferModule { }
