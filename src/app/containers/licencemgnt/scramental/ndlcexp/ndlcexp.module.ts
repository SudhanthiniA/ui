import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NdlcexpRoutingModule } from './ndlcexp-routing.module';
import { ViewndlcexpComponent } from './viewndlcexp/viewndlcexp.component';
import { NdlcexpComponent } from './ndlcexp.component';



@NgModule({
  declarations: [ViewndlcexpComponent, NdlcexpComponent],
  imports: [
    CommonModule,
    SharedModule,
    NdlcexpRoutingModule
  ]
})
export class NdlcexpModule { }
