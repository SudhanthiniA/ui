import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { NdepermitComponent } from './ndepermit.component';
import { NdepermitRoutingModule } from './ndepermit-routing.module';


@NgModule({
  declarations: [NdepermitComponent],
  imports: [
    CommonModule,
    NdepermitRoutingModule,
    SharedModule
  ]
})
export class NdepermitModule { }
