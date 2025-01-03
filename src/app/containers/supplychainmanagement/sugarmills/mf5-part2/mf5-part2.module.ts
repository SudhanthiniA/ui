import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Mf5Part2RoutingModule } from './mf5-part2-routing.module';
import { Mf5Part2Component } from './mf5-part2.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditMf5part2Component } from './addedit-mf5part2/addedit-mf5part2.component';
import { ViewMf5part2Component } from './view-mf5part2/view-mf5part2.component';


@NgModule({
  declarations: [Mf5Part2Component, AddeditMf5part2Component, ViewMf5part2Component],
  imports: [
    CommonModule,
    Mf5Part2RoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Mf5Part2Module { }
