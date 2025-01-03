import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TankdismantleRoutingModule } from './tankdismantle-routing.module';
import { TankdismantleComponent } from './tankdismantle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TankdismantleComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankdismantleRoutingModule
  ]
})
export class TankdismantleModule { }
