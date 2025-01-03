import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DistilleryregoutsideupRoutingModule } from './distilleryregoutsideup-routing.module';
import { DistilleryregoutsideupComponent } from './distilleryregoutsideup.component';
import { AdddistilleryregoutsideupComponent } from './adddistilleryregoutsideup/adddistilleryregoutsideup.component';
import { ViewdistilleryregoutsideupComponent } from './viewdistilleryregoutsideup/viewdistilleryregoutsideup.component';

@NgModule({
  declarations: [DistilleryregoutsideupComponent, AdddistilleryregoutsideupComponent, ViewdistilleryregoutsideupComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistilleryregoutsideupRoutingModule,
    NgbModule
  ]
})
export class DistilleryregoutsideupModule { }
