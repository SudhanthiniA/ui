import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TransitpassvehicleComponent } from './transitpassvehicle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { TransitpassvehicleRoutingModule } from './transitpassvehicle-routing.module';


@NgModule({
  declarations: [TransitpassvehicleComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransitpassvehicleRoutingModule
  ]
})
export class TransitpassvehicleModule { }
