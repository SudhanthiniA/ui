import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { MunicipalityRoutingModule } from './municipality-routing.module';
import { MunicipalityComponent } from './municipality.component';
import { ViewMunicipalityComponent } from './view-municipality/view-municipality.component';
import { AddMunicipalityComponent } from './add-municipality/add-municipality.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    MunicipalityComponent,
    ViewMunicipalityComponent,
    AddMunicipalityComponent
  ],
  imports: [
    MunicipalityRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class MunicipalityModule { }
