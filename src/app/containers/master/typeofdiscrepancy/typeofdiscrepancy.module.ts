import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeofdiscrepancyRoutingModule } from './typeofdiscrepancy-routing.module';
import { TypeofdiscrepancyComponent } from './typeofdiscrepancy.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    TypeofdiscrepancyComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TypeofdiscrepancyRoutingModule
  ]
})
export class TypeofdiscrepancyModule { }
