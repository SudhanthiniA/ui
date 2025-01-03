import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import {Fl32Pd25RoutingModule} from './fl32-pd25-routing.module';
import { Fl32Pd25Component } from './fl32-pd25.component';
import { Addfl32Pd25Component } from './addfl32-pd25/addfl32-pd25.component';
import { Viewfl32Pd25Component } from './viewfl32-pd25/viewfl32-pd25.component';



@NgModule({
  declarations: [Fl32Pd25Component,Addfl32Pd25Component,Viewfl32Pd25Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl32Pd25RoutingModule
  ]
})
export class Fl32Pd25Module { }
