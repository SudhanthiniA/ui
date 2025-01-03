import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CountryRoutingModule } from './country-routing.module';
// import { Viewcl7Component } from './viewcl7/viewcl7.component';
import { CountryComponent } from './country.component';
import { ViewcountryComponent } from './viewcountry/viewcountry.component';


@NgModule({
  declarations: [CountryComponent, ViewcountryComponent],
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
