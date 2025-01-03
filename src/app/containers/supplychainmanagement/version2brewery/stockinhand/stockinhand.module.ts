import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { StockinhandRoutingModule } from './stockinhand-routing.module';
import { StockinhandComponent } from './stockinhand.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [StockinhandComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockinhandRoutingModule
  ]
})
export class StockinhandModule { }
