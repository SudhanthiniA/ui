import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BreakagefeesRoutingModule } from './breakagefees-routing.module';
import { BreakagefeesComponent } from './breakagefees.component';
import { AddbreakagefeesComponent } from './addbreakagefees/addbreakagefees.component';
import { EditbreakagefeesComponent } from './editbreakagefees/editbreakagefees.component';
import { ViewbreakagefeesComponent } from './viewbreakagefees/viewbreakagefees.component';



@NgModule({
  declarations: [BreakagefeesComponent, AddbreakagefeesComponent, EditbreakagefeesComponent, ViewbreakagefeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    BreakagefeesRoutingModule
  ]
})
export class BreakagefeesModule { }
