import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IndustryoutsidestateRoutingModule } from './industryoutsidestate-routing.module';
import { IndustryoutsidestateComponent } from './industryoutsidestate.component';

@NgModule({
  imports: [
    CommonModule,
    IndustryoutsidestateRoutingModule,
    SharedModule
  ],
  declarations: [IndustryoutsidestateComponent]
})
export class IndustryoutsidestateModule { }
