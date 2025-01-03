import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { WastagefeesRoutingModule } from './wastagefees-routing.module';
import { WastagefeesComponent } from './wastagefees.component';
import { AddwastagefeesComponent } from './addwastagefees/addwastagefees.component';
import { EditwastagefeesComponent } from './editwastagefees/editwastagefees.component';
import { ViewwastagefeesComponent } from './viewwastagefees/viewwastagefees.component';



@NgModule({
  declarations: [WastagefeesComponent, AddwastagefeesComponent, EditwastagefeesComponent, ViewwastagefeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastagefeesRoutingModule
  ]
})
export class WastagefeesModule { }
