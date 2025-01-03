import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CencusdataofdistrictsRoutingModule } from './cencusdataofdistricts-routing.module';
import { CencusdataofdistrictsComponent } from './cencusdataofdistricts.component';
import { AddeditcencusdataofdistrictsComponent } from './addeditcencusdataofdistricts/addeditcencusdataofdistricts.component';
import { ViewcencusdataofdistrictsComponent } from './viewcencusdataofdistricts/viewcencusdataofdistricts.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    CencusdataofdistrictsComponent,
    AddeditcencusdataofdistrictsComponent,
    ViewcencusdataofdistrictsComponent
  ],
  imports: [
    CommonModule,
    CencusdataofdistrictsRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    DataTablesModule
  ]
})
export class CencusdataofdistrictsModule { }
