import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {EalwastageRoutingModule} from './ealwastage-routing.module';
import { EalwastageComponent } from './ealwastage.component';
import { AddComponent } from './add.component';
import { ViewComponent } from './view.component';



@NgModule({
  declarations: [EalwastageComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    EalwastageRoutingModule,
    SharedModule
  ]
})
export class EalwastageModule { }
