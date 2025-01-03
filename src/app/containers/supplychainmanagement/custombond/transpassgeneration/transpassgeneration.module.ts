import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TranspassgenerationRoutingModule } from './transpassgeneration-routing.module';
import { TranspassgenerationComponent } from './transpassgeneration.component';
import { AddtranspassgenerationComponent } from './addtranspassgeneration/addtranspassgeneration.component';
import { ViewtranspassgenerationComponent } from './viewtranspassgeneration/viewtranspassgeneration.component';
import { CancelmodifyComponent } from './cancelmodify/cancelmodify.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [TranspassgenerationComponent, AddtranspassgenerationComponent, ViewtranspassgenerationComponent, CancelmodifyComponent, EditComponent],
  imports: [
    CommonModule,
    TranspassgenerationRoutingModule,
    SharedModule
  ]
})
export class TranspassgenerationModule { }
