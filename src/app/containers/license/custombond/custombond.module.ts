import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CustombondRoutingModule } from './custombond-routing.module';
import { AddcustombondComponent } from './addcustombond/addcustombond.component';
import { ViewcustombondComponent } from './viewcustombond/viewcustombond.component';

@NgModule({
  declarations: [AddcustombondComponent, ViewcustombondComponent ],
  imports: [
    CommonModule,
    SharedModule,
    CustombondRoutingModule
  ]
})
export class CustombondModule { }
