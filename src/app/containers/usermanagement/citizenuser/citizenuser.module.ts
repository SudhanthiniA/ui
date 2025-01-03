import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizenuserRoutingModule } from './citizenuser-routing.module';
import { CitizenuserComponent } from './citizenuser.component';
import { AddcitizenuserComponent } from './addcitizenuser/addcitizenuser.component';
import { ViewcitizenuserComponent } from './viewcitizenuser/viewcitizenuser.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    CitizenuserComponent, 
    AddcitizenuserComponent, 
    ViewcitizenuserComponent
  ],
  imports: [
    CommonModule,
    CitizenuserRoutingModule,
    SharedModule
  ],
})
export class CitizenuserModule { }
