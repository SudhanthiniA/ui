import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SizedvehicleRoutingModule } from './sizedvehicle-routing.module';
import { SizedvehicleComponent } from './sizedvehicle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [SizedvehicleComponent,
    AddComponent,
    ViewComponent,
    EditComponent,],
  imports: [
    CommonModule,
    SharedModule,
    SizedvehicleRoutingModule
  ]
})
export class SizedvehicleModule { }
