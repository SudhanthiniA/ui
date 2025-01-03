import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';


import { Pd24PartwiseissuanceIdRoutingModule } from './pd24-partwiseissuance-id-routing.module';
import { Pd24PartwiseissuanceIdComponent } from './pd24-partwiseissuance-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Pd24PartwiseissuanceIdComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd24PartwiseissuanceIdRoutingModule
  ]
})
export class Pd24PartwiseissuanceIdModule { }
