import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@app/theme/shared/shared.module';

import {TransportpassfortheftcaseRoutingModule} from './transportpassfortheftcase-routing.module';
import { TransportpassfortheftcaseComponent } from './transportpassfortheftcase.component';
@NgModule({
  declarations: [TransportpassfortheftcaseComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassfortheftcaseRoutingModule
  ]
})
export class TransportpassfortheftcaseModule { }
