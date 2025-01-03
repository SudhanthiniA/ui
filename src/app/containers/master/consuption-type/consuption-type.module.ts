import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsuptionTypeRoutingModule } from './consuption-type-routing.module';
import { ConsuptionTypeComponent } from './consuption-type.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditConsuptionComponent } from './addedit-consuption/addedit-consuption.component';
import { ViewConsuptionComponent } from './view-consuption/view-consuption.component';

@NgModule({
  declarations: [
    ConsuptionTypeComponent,
    AddeditConsuptionComponent,
    ViewConsuptionComponent
  ],
  imports: [
    CommonModule,
    ConsuptionTypeRoutingModule,
    SharedModule
  ]
})
export class ConsuptionTypeModule { }
