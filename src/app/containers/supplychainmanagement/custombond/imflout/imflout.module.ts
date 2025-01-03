import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ImfloutComponent } from './imflout.component';
import { ImfloutRoutingModule } from './imflout-routing.module';


@NgModule({
  declarations: [ImfloutComponent],
  imports: [
    CommonModule,
    ImfloutRoutingModule,
    SharedModule
  ]
})
export class ImfloutModule { }
