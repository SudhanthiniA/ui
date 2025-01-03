import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RequitionofrawmaterialRoutingModule } from './requitionofrawmaterial-routing.module';
import { RequitionofrawmaterialComponent } from './requitionofrawmaterial.component';
import { AddeditrequitionofrawmaterialComponent } from './addeditrequitionofrawmaterial/addeditrequitionofrawmaterial.component';
import { ViewrequitionofrawmaterialComponent } from './viewrequitionofrawmaterial/viewrequitionofrawmaterial.component';

@NgModule({
  declarations: [
    RequitionofrawmaterialComponent,
    AddeditrequitionofrawmaterialComponent,
    ViewrequitionofrawmaterialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RequitionofrawmaterialRoutingModule
  ]
})
export class RequitionofrawmaterialModule { }
