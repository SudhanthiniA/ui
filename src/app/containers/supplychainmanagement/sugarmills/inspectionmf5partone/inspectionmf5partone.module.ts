import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inspectionmf5partoneRoutingModule } from './inspectionmf5partone-routing.module';
import { Inspectionmf5partoneComponent } from './inspectionmf5partone.component';
import { Addeditinspectionmf5partoneComponent } from './addeditinspectionmf5partone/addeditinspectionmf5partone.component';
import { Viewinspectionmf5partoneComponent } from './viewinspectionmf5partone/viewinspectionmf5partone.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    Inspectionmf5partoneComponent,
    Addeditinspectionmf5partoneComponent,
    Viewinspectionmf5partoneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Inspectionmf5partoneRoutingModule
  ]
})
export class Inspectionmf5partoneModule { }
