import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FermenterprocessRoutingModule } from './/fermenterprocess-routing.module';
import { FermenterprocessComponent } from './fermenterprocess.component';
import { AddfermenterprocessComponent } from './addfermenterprocess/addfermenterprocess.component';
import { ViewfermenterprocessComponent } from './viewfermenterprocess/viewfermenterprocess.component';

@NgModule({
  declarations: [FermenterprocessComponent, AddfermenterprocessComponent, ViewfermenterprocessComponent],
  imports: [
    CommonModule,
    SharedModule,
    FermenterprocessRoutingModule
  ]
})
export class FermenterprocessModule { }
