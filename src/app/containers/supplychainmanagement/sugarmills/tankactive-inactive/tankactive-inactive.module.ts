import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TankactiveInactiveRoutingModule } from './tankactive-inactive-routing.module';
import { TankactiveinactiveViewComponent } from './tankactiveinactive-view/tankactiveinactive-view.component';
import { TankactiveinactiveListComponent } from './tankactiveinactive-list/tankactiveinactive-list.component';
import { TankmaintainanceComponent } from './tankactiveinactive.component'

@NgModule({
  declarations: [TankactiveinactiveViewComponent, TankactiveinactiveListComponent,TankmaintainanceComponent],
  imports: [
    CommonModule,
    TankactiveInactiveRoutingModule,
    SharedModule
  ]
})
export class TankactiveInactiveModule { }
