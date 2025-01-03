import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { ViewstateComponent } from './viewstate/viewstate.component';



@NgModule({
  declarations: [StateComponent, ViewstateComponent,],
  imports: [
    CommonModule,
    SharedModule,
    StateRoutingModule
  ]
})
export class StateModule { }
