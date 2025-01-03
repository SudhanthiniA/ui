import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { UrbanRoutingModule } from './urban-routing.module';
import { UrbanComponent } from './urban.component';
import { ViewurbanComponent } from './viewurban/viewurban.component';



@NgModule({
  declarations: [UrbanComponent, ViewurbanComponent,],
  imports: [
    CommonModule,
    SharedModule,
    UrbanRoutingModule
  ]
})
export class UrbanModule { }
