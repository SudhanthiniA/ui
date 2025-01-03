import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NdlcexpRoutingModule } from './ndlcexp-routing.module';
import { ViewComponent } from './view/view.component';
import { NdlcexpComponent } from './ndlcexp.component';



@NgModule({
  declarations: [ViewComponent, NdlcexpComponent],
  imports: [
    CommonModule,
    SharedModule,
    NdlcexpRoutingModule
  ]
})
export class NdlcexpModule { }
