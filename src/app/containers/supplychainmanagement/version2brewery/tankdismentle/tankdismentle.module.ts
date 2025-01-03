import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TankdismentleRoutingModule } from './tankdismentle-routing.module';
import { TankdismentleComponent } from './tankdismentle.component';
import { AddtankdismentleComponent } from './addtankdismentle/addtankdismentle.component';
import { ViewtankdismentleComponent } from './viewtankdismentle/viewtankdismentle.component';



@NgModule({
  declarations: [TankdismentleComponent, AddtankdismentleComponent, ViewtankdismentleComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankdismentleRoutingModule
  ]
})
export class TankdismentleModule { }
