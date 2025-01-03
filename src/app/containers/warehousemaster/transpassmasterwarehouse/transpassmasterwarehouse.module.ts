import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TranspassmasterwarehouseRoutingModule } from './transpassmasterwarehouse-routing.module';
import { TranspassmasterwarehouseComponent } from './transpassmasterwarehouse.component';
import { AddtranspassmasterwarehouseComponent } from './addtranspassmasterwarehouse/addtranspassmasterwarehouse.component';
import { ViewtranspassmasterwarehouseComponent } from './viewtranspassmasterwarehouse/viewtranspassmasterwarehouse.component';
import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';


@NgModule({
  declarations: [TranspassmasterwarehouseComponent, AddtranspassmasterwarehouseComponent, ViewtranspassmasterwarehouseComponent, CancelmodifypassComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranspassmasterwarehouseRoutingModule
  ]
})
export class TranspassmasterwarehouseModule { }
