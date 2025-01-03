import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TanktransferRoutingModule } from './tanktransfer-routing.module';
import { TanktransferComponent } from './tanktransfer.component';
import { TanktransferviewComponent } from './tanktransferview/tanktransferview.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [TanktransferComponent, TanktransferviewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    TanktransferRoutingModule
  ]
})
export class TanktransferModule { }
