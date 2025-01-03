import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { EscalatelevelRoutingModule } from './escalatelevel-routing.module';
import { EscalatelevelComponent } from './escalatelevel.component';
import { AddescalatelevelComponent } from './addescalatelevel/addescalatelevel.component';
import { ViewescalatelevelComponent } from './viewescalatelevel/viewescalatelevel.component';

@NgModule({
  declarations: [EscalatelevelComponent, AddescalatelevelComponent, ViewescalatelevelComponent],
  imports: [
    CommonModule,
    SharedModule,
    EscalatelevelRoutingModule
  ]
})
export class EscalatelevelModule { }
