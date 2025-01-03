import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl10aRoutingModule } from './cl10a-routing.module';
import { ViewComponent } from './view/view.component';
import { Cl10aComponent } from './cl10a.component';


@NgModule({
  declarations: [ViewComponent, Cl10aComponent],
  imports: [
    CommonModule,
    SharedModule,
    Cl10aRoutingModule
  ]
})
export class Cl10aModule { }
