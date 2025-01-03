import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { VehicledetailvtsComponent } from './vehicledetailvts.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { VehicledetailvtsRoutingModule } from './vehicledetailvts-routing.module';


@NgModule({
  declarations: [VehicledetailvtsComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    VehicledetailvtsRoutingModule
  ]
})
export class VehicledetailvtsModule { }
