import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { PrintqrcodesRoutingModule } from './printqrcodes-routing.module';
import { PrintqrcodesComponent } from './printqrcodes.component';
import { AddprintqrcodesComponent } from './addprintqrcodes/addprintqrcodes.component';
import { ViewprintqrcodesComponent } from './viewprintqrcodes/viewprintqrcodes.component';


@NgModule({
  declarations: [PrintqrcodesComponent, AddprintqrcodesComponent, ViewprintqrcodesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PrintqrcodesRoutingModule
  ]
})
export class PrintqrcodesModule { }
