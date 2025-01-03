import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Cl7sRoutingModule } from './cl7s-routing.module';
import { ViewComponent } from './view/view.component';
import { Cl7sComponent } from './cl7s.component';


@NgModule({
  declarations: [ViewComponent, Cl7sComponent],
  imports: [
    CommonModule,
    SharedModule,
    Cl7sRoutingModule
  ]
})
export class Cl7sModule { }
