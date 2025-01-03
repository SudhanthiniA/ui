import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwtranspasscanmodRoutingModule } from './mwtranspasscanmod-routing.module';
import { MwtranspasscanmodComponent } from './mwtranspasscanmod.component';
import { AddmwtranspasscanmodComponent } from './addmwtranspasscanmod/addmwtranspasscanmod.component';
import { ViewmwtranspasscanmodComponent } from './viewmwtranspasscanmod/viewmwtranspasscanmod.component';

@NgModule({
  declarations: [MwtranspasscanmodComponent, AddmwtranspasscanmodComponent, ViewmwtranspasscanmodComponent],
  imports: [
    CommonModule,
    MwtranspasscanmodRoutingModule,
    SharedModule
  ]
})
export class MwtranspasscanmodModule { }
