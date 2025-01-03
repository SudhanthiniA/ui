import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SamplereceivedRoutingModule } from './samplereceived-routing.module';
import { SamplereceivedComponent } from './samplereceived.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SamplereceivedComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SamplereceivedRoutingModule

  ]
})
export class SamplereceivedModule { }
