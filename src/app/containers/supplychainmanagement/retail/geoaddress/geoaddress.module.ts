import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { GeoaddressRoutingModule } from './geoaddress-routing.module';
import { GeoaddressComponent } from './geoaddress.component';
import { AddgeoaddressComponent } from './addgeoaddress/addgeoaddress.component';
import { ViewgeoaddressComponent } from './viewgeoaddress/viewgeoaddress.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdategeoaddressComponent } from './updategeoaddress/updategeoaddress.component';

@NgModule({
  declarations: [GeoaddressComponent, AddgeoaddressComponent,ViewgeoaddressComponent,ProfileComponent,UpdategeoaddressComponent],
  imports: [
    CommonModule,
    SharedModule,
    GeoaddressRoutingModule
  ]
})
export class GeoaddressModule { }
