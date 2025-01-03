import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { BreweryregistrationRoutingModule } from './breweryregistration-routing.module';
import { BreweryregistrationComponent } from './breweryregistration.component';
import { AddbreweryregistrationComponent } from './addbreweryregistration/addbreweryregistration.component';
import { ViewbreweryregistrationComponent } from './viewbreweryregistration/viewbreweryregistration.component';

@NgModule({
  declarations: [BreweryregistrationComponent, AddbreweryregistrationComponent, ViewbreweryregistrationComponent],
  imports: [
    CommonModule,
    BreweryregistrationRoutingModule,
    SharedModule,
    NgbTabsetModule 
  ]
})
export class BreweryregistrationModule { }
