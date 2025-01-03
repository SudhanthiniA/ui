import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Bwfl2a2b2c2dComponent } from './bwfl2a2b2c2d.component'; 
import { Viewbwfl2a2b2c2dComponent } from './viewbwfl2a2b2c2d/viewbwfl2a2b2c2d.component';
import { Bwfl2a2b2c2dRoutingModule } from './bwfl2a2b2c2d-routing.module';

@NgModule({
  declarations: [Bwfl2a2b2c2dComponent, Viewbwfl2a2b2c2dComponent],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl2a2b2c2dRoutingModule
  ]
})
export class Bwfl2a2b2c2dModule { }
