import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagetypeRoutingModule } from './packagetype-routing.module';
import { PackagetypeComponent } from './packagetype.component';
import { AddeditpackagetypeComponent } from './addeditpackagetype/addeditpackagetype.component';
import { ViewpackagetypeComponent } from './viewpackagetype/viewpackagetype.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    PackagetypeComponent, 
    AddeditpackagetypeComponent, 
    ViewpackagetypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PackagetypeRoutingModule
  ]
})
export class PackagetypeModule { }
