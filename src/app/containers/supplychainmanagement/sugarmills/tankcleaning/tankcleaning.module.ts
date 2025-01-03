import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {TankcleaningRoutingModule} from './tankcleaning-routing.module';
import { TankcleaningComponent } from './tankcleaning.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [TankcleaningComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankcleaningRoutingModule
  ]
})
export class TankcleaningModule { }
