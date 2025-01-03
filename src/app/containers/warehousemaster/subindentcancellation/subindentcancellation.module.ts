import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SubindentcancellationComponent } from './subindentcancellation.component';
import { AddtpackComponent } from './addtpack/addtpack.component';
import { ViewtpackComponent } from './viewtpack/viewtpack.component';
import { SubindentcancellationRoutingModule } from './subindentcancellation-routing.module';

@NgModule({
  declarations: [SubindentcancellationComponent,AddtpackComponent,ViewtpackComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubindentcancellationRoutingModule
  ]
})
export class SubindentcancellationModule { }
