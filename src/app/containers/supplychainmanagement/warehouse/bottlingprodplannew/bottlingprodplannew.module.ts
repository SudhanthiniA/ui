import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BottlingprodplannewRoutingModule } from './bottlingprodplannew-routing.module';
import { BottlingprodplannewComponent } from './bottlingprodplannew.component';
import { AddbottlingprodplannewComponent } from './addbottlingprodplannew/addbottlingprodplannew.component';
import { ViewbottlingprodplannewComponent } from './viewbottlingprodplannew/viewbottlingprodplannew.component';

@NgModule({
  declarations: [BottlingprodplannewComponent, AddbottlingprodplannewComponent, ViewbottlingprodplannewComponent],
  imports: [
    CommonModule,
    BottlingprodplannewRoutingModule,
    SharedModule
  ]
})
export class BottlingprodplannewModule { }
