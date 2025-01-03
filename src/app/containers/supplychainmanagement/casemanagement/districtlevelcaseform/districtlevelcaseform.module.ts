import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DistrictlevelcaseformRoutingModule } from './districtlevelcaseform-routing.module';
import { DistrictlevelcaseformComponent } from './districtlevelcaseform.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [DistrictlevelcaseformComponent,
    AddComponent,
    ViewComponent,
    EditComponent,],
  imports: [
    CommonModule,
    SharedModule,
    DistrictlevelcaseformRoutingModule
  ]
})
export class DistrictlevelcaseformModule { }
