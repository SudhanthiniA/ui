import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module'; 
import { AdddamagetypeComponent } from './adddamagetype/adddamagetype.component';
import { ViewdamagetypeComponent } from './viewdamagetype/viewdamagetype.component';
import { DamagetypeComponent } from './damagetype.component';
import { DamagetypeRoutingModule } from './damagetype-routing.module';

@NgModule({
  declarations: [
    DamagetypeComponent,
    AdddamagetypeComponent,
    ViewdamagetypeComponent
  ],
  imports: [
    CommonModule,
    DamagetypeRoutingModule,
    SharedModule
  ]
})
export class DamagetypeModule { }





