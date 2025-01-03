import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MstistmolassesRoutingModule } from './mstistmolasses-routing.module';
import { MstistmolassesComponent } from './mstistmolasses.component';
import { AddmstistmolassesComponent } from './addmstistmolasses/addmstistmolasses.component';
import { ViewmstistmolassesComponent } from './viewmstistmolasses/viewmstistmolasses.component';

@NgModule({
  declarations: [MstistmolassesComponent, AddmstistmolassesComponent, ViewmstistmolassesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MstistmolassesRoutingModule
  ]
})
export class MstistmolassesModule { }
