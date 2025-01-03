import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { ImportunitRoutingModule } from './importunit-routing.module';
import { ImportunitComponent } from './importunit.component';
import { ViewimportunitComponent } from './viewimportunit/viewimportunit.component';


@NgModule({
  declarations: [ImportunitComponent, ViewimportunitComponent],
  imports: [
    ImportunitRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ImportunitModule { }
