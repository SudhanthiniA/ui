import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UserauthenticationRoutingModule } from './userauthentication-routing.module';
import { UserauthenticationComponent } from './userauthentication.component';
import { AdduserauthenticationComponent } from './adduserauthentication/adduserauthentication.component';
import { ViewuserauthenticationComponent } from './viewuserauthentication/viewuserauthentication.component';



@NgModule({
  declarations: [UserauthenticationComponent, AdduserauthenticationComponent, ViewuserauthenticationComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserauthenticationRoutingModule
  ]
})
export class UserauthenticationModule { }
