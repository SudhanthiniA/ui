import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { EiRoutingModule } from './ei-routing.module';
import { ViewComponent } from './view/view.component';
import { EiComponent } from './ei.component';


@NgModule({
  declarations: [ViewComponent, EiComponent],
  imports: [
    CommonModule,
    SharedModule,
    EiRoutingModule
  ]
})
export class EiModule { }
