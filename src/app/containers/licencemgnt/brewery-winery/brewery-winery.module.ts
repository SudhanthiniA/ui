import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BreweryWineryComponent } from './brewery-winery.component';
import { BreweryWineryRoutingModule } from './brewery-winery-routing.module';


@NgModule({
  declarations: [BreweryWineryComponent,  ],
  imports: [
    CommonModule,
    BreweryWineryRoutingModule,
    SharedModule
  ]
})
export class BreweryWineryModule { }
