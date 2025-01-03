import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';

import {TransportpassforaccidentalfordispatchRoutingModule} from './transportpassforaccidentalfordispatch-routing.module';
import { TransportpassforaccidentalfordispatchComponent } from './transportpassforaccidentalfordispatch.component';
@NgModule({
  declarations: [TransportpassforaccidentalfordispatchComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassforaccidentalfordispatchRoutingModule
  ]
})
export class TransportpassforaccidentalfordispatchModule { }
