import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TankoverviewRoutingModule } from './tankoverview-routing.module';
import { TankoverviewComponent } from './tankoverview.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TankoverviewComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankoverviewRoutingModule
  ]
})
export class TankoverviewModule { }
