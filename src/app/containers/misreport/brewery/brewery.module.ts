import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BreweryRoutingModule } from './brewery-routing.module';
import { Breweryform1Component } from './breweryform1/breweryform1.component';
import { Breweryform3Component } from './breweryform3/breweryform3.component';
import { Breweryform2Component } from './breweryform2/breweryform2.component';
import { Breweryform4Component } from './breweryform4/breweryform4.component';
import { Breweryform5Component } from './breweryform5/breweryform5.component';

@NgModule({
  declarations: [Breweryform1Component, Breweryform3Component, Breweryform2Component, Breweryform4Component, Breweryform5Component],

  imports: [
    CommonModule,
    SharedModule,
    BreweryRoutingModule
  ]
})
export class BreweryModule { }
