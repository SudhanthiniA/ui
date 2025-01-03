import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mf7registerRoutingModule } from './mf7register-routing.module';
import { Mf7registerComponent } from './mf7register.component';
import { Addeditmf7registerComponent } from './addeditmf7register/addeditmf7register.component';
import { Viewmf7registerComponent } from './viewmf7register/viewmf7register.component';

@NgModule({
  declarations: [
    Mf7registerComponent, 
    Addeditmf7registerComponent, 
    Viewmf7registerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Mf7registerRoutingModule
  ]
})
export class Mf7registerModule { }
