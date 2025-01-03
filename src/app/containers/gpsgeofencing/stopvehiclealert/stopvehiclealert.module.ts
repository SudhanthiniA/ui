import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StopvehiclealertComponent } from './stopvehiclealert.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { StopvehiclealertRoutingModule } from './stopvehiclealert-routing.module';


@NgModule({
  declarations: [StopvehiclealertComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StopvehiclealertRoutingModule
  ]
})
export class StopvehiclealertModule { }
