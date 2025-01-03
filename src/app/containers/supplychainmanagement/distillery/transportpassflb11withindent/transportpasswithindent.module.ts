import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/theme/shared/shared.module';
import { TransportpasswithindentComponent } from './transportpasswithindent.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {TransportpasswithindentRoutingModule} from './transportpasswithindent-routing.module';


@NgModule({
  declarations: [TransportpasswithindentComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpasswithindentRoutingModule
  ]
})
export class TransportpasswithindentModule { }
