import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { SampledisposableRoutingModule } from './sampledisposable-routing.module';
import { SampledisposableComponent } from './sampledisposable.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SampledisposableComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SampledisposableRoutingModule
  ]
})
export class SampledisposableModule { }
