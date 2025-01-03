import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { ManualscanningRoutingModule } from './manualscanning-routing.module';
import { ManualscanningComponent } from './manualscanning.component';
import { AddmanualscanningComponent } from './addmanualscanning/addmanualscanning.component';
import { ViewmanualscanningComponent } from './viewmanualscanning/viewmanualscanning.component';


@NgModule({
  declarations: [ManualscanningComponent, AddmanualscanningComponent, ViewmanualscanningComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManualscanningRoutingModule
  ]
})
export class ManualscanningModule { }
