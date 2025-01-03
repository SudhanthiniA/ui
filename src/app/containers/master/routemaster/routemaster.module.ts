import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutemasterRoutingModule } from './routemaster-routing.module';
import { RoutemasterComponent } from './routemaster.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditrouteComponent } from './addeditroute/addeditroute.component';
import { ViewrouteComponent } from './viewroute/viewroute.component';

@NgModule({
  declarations: [
    RoutemasterComponent, 
    AddeditrouteComponent, 
    ViewrouteComponent
  ],
  imports: [
    CommonModule,
    RoutemasterRoutingModule,
    SharedModule
  ]
})
export class RoutemasterModule { }
