import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';

import { TranspassgenerationnewRoutingModule } from './transpassgenerationnew-routing.module';
import { TranspassgenerationnewComponent } from './transpassgenerationnew.component';
import { AddtranspassgenerationnewComponent } from './addtranspassgenerationnew/addtranspassgenerationnew.component';
import { ViewtranspassgenerationnewComponent } from './viewtranspassgenerationnew/viewtranspassgenerationnew.component';
import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [TranspassgenerationnewComponent, AddtranspassgenerationnewComponent, ViewtranspassgenerationnewComponent, CancelmodifypassComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranspassgenerationnewRoutingModule
  ]
})
export class TranspassgenerationnewModule { }
