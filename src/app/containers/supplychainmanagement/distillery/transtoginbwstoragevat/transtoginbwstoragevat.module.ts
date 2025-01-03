import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TranstoginbwstoragevatRoutingModule } from './transtoginbwstoragevat-routing.module';
import { TranstoginbwstoragevatComponent } from './transtoginbwstoragevat.component';
import { AddtranstoginbwstoragevatComponent } from './addtranstoginbwstoragevat/addtranstoginbwstoragevat.component';
import { ViewtranstoginbwstoragevatComponent } from './viewtranstoginbwstoragevat/viewtranstoginbwstoragevat.component';


@NgModule({
  declarations: [TranstoginbwstoragevatComponent, AddtranstoginbwstoragevatComponent, ViewtranstoginbwstoragevatComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranstoginbwstoragevatRoutingModule
  ]
})
export class TranstoginbwstoragevatModule { }
