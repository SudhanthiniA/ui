import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerComponent } from './winner.component';
import { WinnerRoutingModule } from './winner-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';



@NgModule({
  declarations: [WinnerComponent],
  imports: [
    CommonModule,
    WinnerRoutingModule,
    SharedModule
  ]
})
export class WinnerModule { }
