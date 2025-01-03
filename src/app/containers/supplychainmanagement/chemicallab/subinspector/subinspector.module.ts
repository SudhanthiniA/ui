import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { SubinspectorRoutingModule } from './subinspector-routing.module';
import { SubinspectorComponent } from './subinspector.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SubinspectorComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubinspectorRoutingModule
  ]
})
export class SubinspectorModule { }
