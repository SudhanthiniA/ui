import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NdlcimpRoutingModule } from './ndlcimp-routing.module';
import { ViewComponent } from './view/view.component';
import { NdlcimpComponent } from './ndlcimp.component';



@NgModule({
  declarations: [ViewComponent, NdlcimpComponent],
  imports: [
    CommonModule,
    SharedModule,
    NdlcimpRoutingModule
  ]
})
export class NdlcimpModule { }
