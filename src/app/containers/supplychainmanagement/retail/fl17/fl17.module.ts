import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Fl17RoutingModule } from './fl17-routing.module';
import { Fl17Component } from './fl17.component';
import { Viewfl17Component } from './viewfl17/viewfl17.component';
import { Addfl17Component } from './addfl17/addfl17.component';

@NgModule({
  declarations: [Fl17Component, Addfl17Component,Viewfl17Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl17RoutingModule
  ]
})
export class Fl17Module { }
