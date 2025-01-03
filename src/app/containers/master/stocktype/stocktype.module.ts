import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StocktypeRoutingModule } from './stocktype-routing.module';
import { StocktypeComponent } from './stocktype.component';
import { AddstocktypeComponent } from './addstocktype/addstocktype.component';
import { ViewstocktypeComponent } from './viewstocktype/viewstocktype.component';

@NgModule({
  declarations: [StocktypeComponent, AddstocktypeComponent, ViewstocktypeComponent],
  imports: [
    CommonModule,
    StocktypeRoutingModule,
    SharedModule
  ]
})
export class StocktypeModule { }
