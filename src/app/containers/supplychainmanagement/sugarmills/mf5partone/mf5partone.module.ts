import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mf5partoneRoutingModule } from './mf5partone-routing.module';
import { Mf5partoneComponent } from './mf5partone.component';
import { Addeditmf5partoneComponent } from './addeditmf5partone/addeditmf5partone.component';
import { Viewmf5partoneComponent } from './viewmf5partone/viewmf5partone.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    Mf5partoneComponent,
    Addeditmf5partoneComponent,
    Viewmf5partoneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Mf5partoneRoutingModule
  ]
})
export class Mf5partoneModule { }
