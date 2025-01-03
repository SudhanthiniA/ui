import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RepackcartonsComponent } from './repackcartons.component';
import { RepackcartonsRoutingModule } from './repackcartons-routing.module';


@NgModule({
  declarations: [RepackcartonsComponent],
  imports: [
    CommonModule,
    RepackcartonsRoutingModule,
    SharedModule
  ]
})
export class RepackcartonsModule { }
