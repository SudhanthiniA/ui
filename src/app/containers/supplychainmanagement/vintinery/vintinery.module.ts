import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { VintineryRoutingModule } from './vintinery-routing.module';

@NgModule({
  providers: [DatePipe],
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    VintineryRoutingModule
  ]
})
export class VintineryModule { }
