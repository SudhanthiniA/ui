import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TankoverviewRoutingModule } from './tankoverview-routing.module';
import { TankoverviewComponent } from './tankoverview.component';
import { TankoverviewlistComponent } from './tankoverviewlist/tankoverviewlist.component';
import { ViewtankoverviewComponent } from './viewtankoverview/viewtankoverview.component';


@NgModule({
  declarations: [ TankoverviewComponent, TankoverviewlistComponent, ViewtankoverviewComponent,],
  imports: [
    CommonModule,
    SharedModule,
    TankoverviewRoutingModule,
    NgbModule
  ]
})
export class TankoverviewModule { }
