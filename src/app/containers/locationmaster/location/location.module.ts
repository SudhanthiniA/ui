import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { AddeditLocationComponent } from './addedit-location/addedit-location.component';
import { ViewLocationComponent } from './view-location/view-location.component';

@NgModule({
  declarations: [
    LocationComponent,
    AddeditLocationComponent,
    ViewLocationComponent,
  ],
  imports: [
    LocationRoutingModule,
    SharedModule
  ]
})
export class LocationModule { }
