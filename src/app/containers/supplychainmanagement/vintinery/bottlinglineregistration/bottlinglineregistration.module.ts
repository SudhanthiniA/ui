import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddnewlineregistrationComponent } from './addnewlineregistration/addnewlineregistration.component';
import { ViewnewlineregistrationComponent } from './viewnewlineregistration/viewnewlineregistration.component'; 
import { BottlinglineregistrationComponent } from './bottlinglineregistration.component';   
import { BottlinglineregistrationRoutingModule } from './bottlinglineregistration-routing.module';

@NgModule({
  declarations: [AddnewlineregistrationComponent, ViewnewlineregistrationComponent, BottlinglineregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglineregistrationRoutingModule
  ]
})
export class BottlinglineregistrationModule { }
