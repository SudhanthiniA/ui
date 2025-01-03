import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SamplefeebookRoutingModule } from './samplefeebook-routing.module';
import { SamplefeebookComponent } from './samplefeebook.component';
import { AddsamplefeebookComponent } from './addsamplefeebook/addsamplefeebook.component';
import { ViewsamplefeebookComponent } from './viewsamplefeebook/viewsamplefeebook.component';


@NgModule({
  declarations: [SamplefeebookComponent, AddsamplefeebookComponent,ViewsamplefeebookComponent],
  imports: [
    CommonModule,
    SamplefeebookRoutingModule,
    SharedModule
  ]
})
export class SamplefeebookModule { }
