import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {DistilleryconfigurationRoutingModule} from './wholesaleconfiguration-routing.module';
import { WholesaleconfigurationComponent } from './wholesaleconfiguration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [WholesaleconfigurationComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    DistilleryconfigurationRoutingModule,
    SharedModule
  ]
})
export class WholesaleconfigurationModule { }
