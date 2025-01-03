import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { VintinerytavernComponent } from './vintinerytavern.component';
import { VintinerytavernRoutingModule } from './vintinerytavern-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [VintinerytavernComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    VintinerytavernRoutingModule,
  ]
})
export class VintinerytavernModule { }
