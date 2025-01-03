import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { FoundryindustrieswithupRoutingModule } from './foundryindustiewithup-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FoundryindustrieswithupRoutingModule
  ],
  providers: [DatePipe],
  declarations: [] 
})
export class FoundryindustrieswithupModule { }
