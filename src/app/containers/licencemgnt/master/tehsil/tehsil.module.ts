import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TehsilRoutingModule } from './tehsil-routing.module';
import { TehsilComponent } from './tehsil.component';
import { ViewtehsilComponent } from './viewtehsil/viewtehsil.component';



@NgModule({
  declarations: [TehsilComponent, ViewtehsilComponent,],
  imports: [
    CommonModule,
    SharedModule,
    TehsilRoutingModule
  ]
})
export class TehsilModule { }
