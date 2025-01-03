import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TransferofbeerRoutingModule } from './transferofbeer-routing.module';
import { TransferofbeerComponent } from './transferofbeer.component';
import { AddtransferofbeerComponent } from './addtransferofbeer/addtransferofbeer.component';
import { ViewtransferofbeerComponent } from './viewtransferofbeer/viewtransferofbeer.component';



@NgModule({
  declarations: [TransferofbeerComponent, AddtransferofbeerComponent,ViewtransferofbeerComponent],
  imports: [
    CommonModule,
    TransferofbeerRoutingModule,
    SharedModule
  ]
})
export class TransferofbeerModule { }
