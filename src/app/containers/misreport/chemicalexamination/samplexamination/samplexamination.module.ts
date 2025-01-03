import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SamplexaminationRoutingModule } from './samplexamination-routing.module';
import { SamplexaminationComponent } from './samplexamination.component';
import { ViewsamplexaminationComponent } from './viewsamplexamination/viewsamplexamination.component';



@NgModule({
  declarations: [SamplexaminationComponent, ViewsamplexaminationComponent],
  imports: [
    CommonModule,
    SharedModule,
    SamplexaminationRoutingModule
  ]
})
export class SamplexaminationModule { }
