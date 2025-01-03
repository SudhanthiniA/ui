import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OvearseasgatepassRoutingModule } from './ovearseasgatepass-routing.module';
import { OvearseasgatepassComponent } from './ovearseasgatepass.component';
import { ViewovearseasgatepassComponent } from './viewovearseasgatepass/viewovearseasgatepass.component';
import { AddovearseasgatepassComponent } from './addovearseasgatepass/addovearseasgatepass.component';



@NgModule({
  declarations: [OvearseasgatepassComponent, ViewovearseasgatepassComponent,AddovearseasgatepassComponent],
  imports: [
    CommonModule,
    OvearseasgatepassRoutingModule,
    SharedModule
  ]
})
export class OvearseasgatepassModule { }
