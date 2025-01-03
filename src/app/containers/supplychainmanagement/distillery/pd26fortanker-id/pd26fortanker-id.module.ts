import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd26fortankerIdRoutingModule } from './pd26fortanker-id-routing.module';
import { Pd26fortankerIdComponent } from './pd26fortanker-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

@NgModule({
  declarations: [Pd26fortankerIdComponent, AddComponent, ViewComponent, AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd26fortankerIdRoutingModule
  ]
})
export class Pd26fortankerIdModule { }
