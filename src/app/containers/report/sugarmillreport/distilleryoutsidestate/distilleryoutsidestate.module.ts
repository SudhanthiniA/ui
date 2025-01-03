import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DistilleryoutsidestateRoutingModule } from './distilleryoutsidestate-routing.module';
import { DistilleryoutsidestateComponent } from './distilleryoutsidestate.component';
import { GlobalService } from '../../service/global.service';

@NgModule({
  imports: [
    CommonModule,
    DistilleryoutsidestateRoutingModule,
    SharedModule
  ],
  providers: [GlobalService],
  declarations: [DistilleryoutsidestateComponent]
})
export class DistilleryoutsidestateModule { }
