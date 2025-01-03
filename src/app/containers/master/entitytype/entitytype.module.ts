import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitytypeRoutingModule } from './entitytype-routing.module';
import { EntitytypeComponent } from './entitytype.component';
import { AddentitytypeComponent } from './addentitytype/addentitytype.component';
import { ViewentitytypeComponent } from './viewentitytype/viewentitytype.component';

import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    EntitytypeComponent,
    AddentitytypeComponent,
    ViewentitytypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EntitytypeRoutingModule
  ]
})
export class EntitytypeModule { }
