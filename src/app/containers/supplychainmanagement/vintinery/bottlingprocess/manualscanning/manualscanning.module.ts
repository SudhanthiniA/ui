import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ManualscanningComponent } from './manualscanning.component';
import { ViewmanualscanningComponent } from './viewmanualscanning/viewmanualscanning.component';
import { ManualscanningRoutingModule } from './manualscanning-routing.module';

@NgModule({
  declarations: [ManualscanningComponent,ViewmanualscanningComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManualscanningRoutingModule
  ]
})
export class ManualscanningModule { }
