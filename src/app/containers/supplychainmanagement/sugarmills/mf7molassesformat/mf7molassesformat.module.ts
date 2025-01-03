import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf7molassesformatRoutingModule } from './mf7molassesformat-routing.module';
import { Mf7molassesformatComponent } from './mf7molassesformat.component';
import { Addmf7molassesformatComponent } from './addmf7molassesformat/addmf7molassesformat.component';
import { Viewmf7molassesformatComponent } from './viewmf7molassesformat/viewmf7molassesformat.component';


@NgModule({
  declarations: [Mf7molassesformatComponent, Addmf7molassesformatComponent, Viewmf7molassesformatComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf7molassesformatRoutingModule
  ]
})
export class Mf7molassesformatModule { }
