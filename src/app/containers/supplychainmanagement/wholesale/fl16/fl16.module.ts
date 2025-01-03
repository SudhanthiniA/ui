import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { Fl16RoutingModule } from './fl16-routing.module';
import { Fl16Component } from './fl16.component';
import { Viewfl16Component } from './viewfl16/viewfl16.component';
import { Addfl16Component } from './addfl16/addfl16.component';

@NgModule({
  declarations: [Fl16Component, Addfl16Component,Viewfl16Component ],
  imports: [
    CommonModule,
    SharedModule,
    Fl16RoutingModule
  ]
})
export class Fl16Module { }
