import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mf6Part2RoutingModule } from './mf6-part2-routing.module';
import { Mf6Part2Component } from './mf6-part2.component';
import { AddMf6Part2Component } from './add-mf6-part2/add-mf6-part2.component';
import { ViewMf6Part2Component } from './view-mf6-part2/view-mf6-part2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Mf6Part2Component, AddMf6Part2Component, ViewMf6Part2Component],
  imports: [
    CommonModule,
    NgbModule,
    Mf6Part2RoutingModule,
    SharedModule
  ]
})
export class Mf6Part2Module { }
