import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ViewCountryComponent } from './view-country/view-country.component';

@NgModule({
  declarations: [
    CountryComponent,
    AddCountryComponent,
    ViewCountryComponent
  ],
  imports: [
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
