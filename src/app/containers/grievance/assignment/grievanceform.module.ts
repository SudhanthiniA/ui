import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrievanceformComponent } from './grievanceform.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { GrievanceformRoutingModule } from './grievanceform-routing.module';
import { AddgrievanceformComponent } from './addgrievanceform/addgrievanceform.component';
import { ViewgrievanceformComponent } from './viewgrievanceform/viewgrievanceform.component';
import { CheckgrievanceformComponent } from './checkgrievanceform/checkgrievanceform.component';


@NgModule({
  declarations: [GrievanceformComponent, AddgrievanceformComponent, ViewgrievanceformComponent, CheckgrievanceformComponent],
  imports: [
    CommonModule,
    SharedModule,
    GrievanceformRoutingModule
  ]
})
export class GrievanceformModule { }
