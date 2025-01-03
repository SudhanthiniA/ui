import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TranspassgenfordistbondwareRoutingModule } from './transpassgenfordistbondware-routing.module';
import { TranspassgenfordistbondwareComponent } from './transpassgenfordistbondware.component';
import { AddtranspassgenfordistbondwareComponent } from './addtranspassgenfordistbondware/addtranspassgenfordistbondware.component';
import { ViewtranspassgenfordistbondwareComponent } from './viewtranspassgenfordistbondware/viewtranspassgenfordistbondware.component';
import { SubindenttranspassComponent } from './subindenttranspass/subindenttranspass.component';
import { CancelmodifyComponent } from './cancelmodify/cancelmodify.component';


@NgModule({
  declarations: [TranspassgenfordistbondwareComponent, AddtranspassgenfordistbondwareComponent, ViewtranspassgenfordistbondwareComponent, SubindenttranspassComponent, CancelmodifyComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranspassgenfordistbondwareRoutingModule
  ]
})
export class TranspassgenfordistbondwareModule { }
