import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BottlingprodplannewupRoutingModule } from './bottlingprodplannewup-routing.module';
import { BottlingprodplannewupComponent } from './bottlingprodplannewup.component';
import { AddbottlingprodplannewupComponent } from './addbottlingprodplannewup/addbottlingprodplannewup.component';
import { ViewbottlingprodplannewupComponent } from './viewbottlingprodplannewup/viewbottlingprodplannewup.component';

@NgModule({
  declarations: [BottlingprodplannewupComponent, AddbottlingprodplannewupComponent, ViewbottlingprodplannewupComponent],
  imports: [
    CommonModule,
    BottlingprodplannewupRoutingModule,
    SharedModule
  ]
})
export class BottlingprodplannewupModule { }
