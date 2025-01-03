import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExportpassoutsideupRoutingModule } from './exportpassoutsideup-routing.module';
import { ExportpassoutsideupComponent } from './exportpassoutsideup.component';


@NgModule({
  declarations: [ExportpassoutsideupComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExportpassoutsideupRoutingModule
  ]
})
export class ExportpassoutsideupModule { }
