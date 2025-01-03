import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/theme/shared/shared.module';
import { TransportpassafterorderpickupComponent } from './transportpassafterorderpickup.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {TransportpassafterorderpickupRoutingModule} from './transportpassafterorderpickup-routing.module';



@NgModule({
  declarations: [TransportpassafterorderpickupComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassafterorderpickupRoutingModule
  ]
})
export class TransportpassafterorderpickupModule { }
