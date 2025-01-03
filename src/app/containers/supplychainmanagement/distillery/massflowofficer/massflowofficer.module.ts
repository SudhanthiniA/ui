import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassflowofficerRoutingModule } from './massflowofficer-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { MassflowofficerComponent } from './massflowofficer.component';
import { AddmassflowofficerComponent } from './addmassflowofficer/addmassflowofficer.component';
import { ViewmassflowofficerComponent } from './viewmassflowofficer/viewmassflowofficer.component';



@NgModule({
  declarations: [MassflowofficerComponent, AddmassflowofficerComponent, ViewmassflowofficerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MassflowofficerRoutingModule
  ]
})
export class MassflowofficerModule { }
