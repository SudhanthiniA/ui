import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StateofmattermasterRoutingModule } from './stateofmattermaster-routing.module';
import { StateofmattermasterComponent } from './stateofmattermaster.component';
import { AddstateofmattermasterComponent } from './addstateofmattermaster/addstateofmattermaster.component';
import { ViewstateofmattermasterComponent } from './viewstateofmattermaster/viewstateofmattermaster.component';

@NgModule({
  declarations: [StateofmattermasterComponent, AddstateofmattermasterComponent, ViewstateofmattermasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    StateofmattermasterRoutingModule
  ]
})
export class StateofmattermasterModule { }
