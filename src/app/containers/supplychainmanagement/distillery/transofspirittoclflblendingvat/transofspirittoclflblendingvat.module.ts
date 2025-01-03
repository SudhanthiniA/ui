import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TransofspirittoclflblendingvatRoutingModule } from './transofspirittoclflblendingvat-routing.module';
import { TransofspirittoclflblendingvatComponent } from './transofspirittoclflblendingvat.component';
import { AddtransofspirittoclflblendingvatComponent } from './addtransofspirittoclflblendingvat/addtransofspirittoclflblendingvat.component';
import { ViewtransofspirittoclflblendingvatComponent } from './viewtransofspirittoclflblendingvat/viewtransofspirittoclflblendingvat.component';


@NgModule({
  declarations: [TransofspirittoclflblendingvatComponent, AddtransofspirittoclflblendingvatComponent, ViewtransofspirittoclflblendingvatComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransofspirittoclflblendingvatRoutingModule
  ]
})
export class TransofspirittoclflblendingvatModule { }
