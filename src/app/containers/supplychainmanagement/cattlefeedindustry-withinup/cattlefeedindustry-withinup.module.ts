import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { CattlefeedindustryWithinupRoutingModule } from './cattlefeedindustry-withinup-routing.module';


@NgModule({
  imports: [
    SharedModule,
    CattlefeedindustryWithinupRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class CattlefeedindustryWithinupModule { }
