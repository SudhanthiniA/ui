import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailshoptypeRoutingModule } from './retailshoptype-routing.module';
import { RetailshoptypeComponent } from './retailshoptype.component';
import { AddretailshoptypeComponent } from './addretailshoptype/addretailshoptype.component';
import { ViewretailshoptypeComponent } from './viewretailshoptype/viewretailshoptype.component';


@NgModule({
  declarations: [
    RetailshoptypeComponent, AddretailshoptypeComponent, ViewretailshoptypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailshoptypeRoutingModule
  ]
})
export class RetailshoptypeModule { }
