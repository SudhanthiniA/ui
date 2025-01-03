import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AdministrationchargesRoutingModule } from './administrationcharges-routing.module';
import { AdministrationchargesComponent } from './administrationcharges.component';
import { AddadministrationchargesComponent } from './addadministrationcharges/addadministrationcharges.component';
import { ViewadministrationchargesComponent } from './viewadministrationcharges/viewadministrationcharges.component';

@NgModule({
  declarations: [AdministrationchargesComponent, AddadministrationchargesComponent, ViewadministrationchargesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdministrationchargesRoutingModule
  ]
})
export class AdministrationchargesModule { }
