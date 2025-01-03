import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { PolicestationRoutingModule } from './policestation-routing.module';
import { PolicestationComponent } from './policestation.component';
import { ViewpolicestationComponent } from './viewpolicestation/viewpolicestation.component';



@NgModule({
  declarations: [PolicestationComponent, ViewpolicestationComponent,],
  imports: [
    CommonModule,
    SharedModule,
    PolicestationRoutingModule
  ]
})
export class PolicestationModule { }
