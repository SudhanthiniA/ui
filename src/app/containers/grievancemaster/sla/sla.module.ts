import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SlaComponent } from './sla.component';
import { SlaRoutingModule } from './sla-routing.module';
import { AddslaComponent } from './addsla/addsla.component';
import { ViewslaComponent } from './viewsla/viewsla.component';


@NgModule({
  declarations: [SlaComponent, AddslaComponent, ViewslaComponent],
  imports: [
    CommonModule,
    SharedModule,
    SlaRoutingModule
  ]
})
export class SlaModule { }
