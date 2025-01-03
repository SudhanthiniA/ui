import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { InsideupindustryRoutingModule } from './insideupindustry-routing.module';
import { InsideupindustryComponent } from './insideupindustry.component';

@NgModule({
  imports: [
    CommonModule,
    InsideupindustryRoutingModule,
    SharedModule
  ],
  declarations: [InsideupindustryComponent]
})
export class InsideupindustryModule { }
