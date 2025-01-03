import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Tariandsendhicl10aRoutingModule } from './tariandsendhicl10a-routing.module';
import { Tariandsendhicl10aComponent } from './tariandsendhicl10a.component';
import { Viewtariandsendhicl10aComponent } from './viewtariandsendhicl10a/viewtariandsendhicl10a.component';


@NgModule({
  declarations: [ Tariandsendhicl10aComponent, Viewtariandsendhicl10aComponent ],
  imports: [
    CommonModule,
    Tariandsendhicl10aRoutingModule,
    SharedModule
  ]
})
export class Tariandsendhicl10aModule { }
