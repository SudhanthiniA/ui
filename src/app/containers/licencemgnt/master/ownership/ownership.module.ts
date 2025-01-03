import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OwnershipRoutingModule } from './ownership-routing.module';
import { OwnershipComponent } from './ownership.component';
import { ViewownershipComponent } from './viewownership/viewownership.component';



@NgModule({
  declarations: [OwnershipComponent, ViewownershipComponent,],
  imports: [
    CommonModule,
    SharedModule,
    OwnershipRoutingModule
  ]
})
export class OwnershipModule { }
