import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { PermitreportsRoutingModule } from './permitreports-routing.module';
import { PermitreportsComponent } from './permitreports.component';



@NgModule({
  declarations: [PermitreportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PermitreportsRoutingModule
  ]
})
export class PermitreportsModule { }
