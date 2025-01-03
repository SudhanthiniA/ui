import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd26acknowledgementIdComponent } from './pd26acknowledgement-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Pd26acknowledgementIdRoutingModule } from './pd26acknowledgement-id-routing.module';



@NgModule({
  declarations: [Pd26acknowledgementIdComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd26acknowledgementIdRoutingModule
  ]
})
export class Pd26acknowledgementIdModule { }
