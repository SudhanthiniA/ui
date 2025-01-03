import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationtypeRoutingModule } from './applicationtype-routing.module';
import { ApplicationtypeComponent } from './applicationtype.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditapplicationtypeComponent } from './addeditapplicationtype/addeditapplicationtype.component';
import { ViewapplicationtypeComponent } from './viewapplicationtype/viewapplicationtype.component';

@NgModule({
  declarations: [ApplicationtypeComponent, AddeditapplicationtypeComponent, ViewapplicationtypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationtypeRoutingModule
  ]
})
export class ApplicationtypeModule { }
