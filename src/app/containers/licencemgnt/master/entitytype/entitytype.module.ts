import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { EntitytypeRoutingModule } from './entitytype-routing.module';
import { EntitytypeComponent } from './entitytype.component';
import { ViewentitytypeComponent } from './viewentitytype/viewentitytype.component';



@NgModule({
  declarations: [EntitytypeComponent, ViewentitytypeComponent,],
  imports: [
    CommonModule,
    SharedModule,
    EntitytypeRoutingModule
  ]
})
export class EntitytypeModule { }
