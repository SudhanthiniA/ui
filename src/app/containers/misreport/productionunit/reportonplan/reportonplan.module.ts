import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ReportonplanRoutingModule } from './reportonplan-routing.module';
import { ReportonplanComponent } from './reportonplan.component';



@NgModule({
  declarations: [ReportonplanComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportonplanRoutingModule
  ]
})
export class ReportonplanModule { }
