import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SampledetailsentryRoutingModule } from './sampledetailsentry-routing.module';
import { SampledetailsentryComponent } from './sampledetailsentry.component';
import { AddeditsampledetailsentryComponent } from './addeditsampledetailsentry/addeditsampledetailsentry.component';
import { ViewsampledetailsentryComponent } from './viewsampledetailsentry/viewsampledetailsentry.component';

@NgModule({
  declarations: [
    SampledetailsentryComponent,
    AddeditsampledetailsentryComponent,
    ViewsampledetailsentryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SampledetailsentryRoutingModule
  ]
})
export class SampledetailsentryModule { }
