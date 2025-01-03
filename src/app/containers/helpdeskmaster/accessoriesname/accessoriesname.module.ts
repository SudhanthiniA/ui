import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AccessoriesnameRoutingModule } from './accessoriesname-routing.module';
import { AccessoriesnameComponent } from './accessoriesname.component';
import { AddaccessoriesnameComponent } from './adddaccessoriesname/accessoriesname.component';
import { ViewaccessoriesnameComponent } from './viewaccessoriesname/accessoriesname.component';


@NgModule({
  declarations: [AddaccessoriesnameComponent, ViewaccessoriesnameComponent, AccessoriesnameComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccessoriesnameRoutingModule
  ]
})
export class AccessoriesnameModule { }
