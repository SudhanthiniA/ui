import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import {Fl32Pd21RoutingModule} from './fl32-pd21-routing.module';
import { Fl32Pd21Component } from './fl32-pd21.component';
import { Addfl32Pd21Component } from './addfl32-pd21/addfl32-pd21.component';
import { Viewfl32Pd21Component } from './viewfl32-pd21/viewfl32-pd21.component';


@NgModule({
  declarations: [Fl32Pd21Component,Addfl32Pd21Component,Viewfl32Pd21Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl32Pd21RoutingModule
  ]
})
export class Fl32Pd21Module { }
