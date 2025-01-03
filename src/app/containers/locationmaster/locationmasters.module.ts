import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { LocationMasterPageRoutingModule } from './locationmasters-page-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LocationMasterPageRoutingModule,
  ]
})
export class LocationMastersModule { }
