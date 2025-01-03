import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandmasterRoutingModule } from './brandmaster-routing.module';
import { BrandmasterComponent } from './brandmaster.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { ViewbrandComponent } from './viewbrand/viewbrand.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MastersModule } from '../masters.module';

@NgModule({
  declarations: [BrandmasterComponent, AddbrandComponent, ViewbrandComponent],
  imports: [
    CommonModule,
    BrandmasterRoutingModule,
    SharedModule,
    DataTablesModule,
    MastersModule
  ]
})
export class BrandmasterModule { }
