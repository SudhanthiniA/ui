import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { BreweryRoutingModule } from './brewery-routing.module';


@NgModule({
  
  imports: [
    SharedModule,
    BreweryRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
  // declarations: [],
})
export class BreweryModule { }
