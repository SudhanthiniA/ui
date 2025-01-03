import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddnewlineregistrationComponent } from './addnewlineregistration/addnewlineregistration.component';
import { ViewnewlineregistrationComponent } from './viewnewlineregistration/viewnewlineregistration.component'; 
import { NewlineregistrationComponent } from './newlineregistration.component';   
import { NewlineregistrationRoutingModule } from './newlineregistration-routing.module';

@NgModule({
  declarations: [AddnewlineregistrationComponent, ViewnewlineregistrationComponent, NewlineregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewlineregistrationRoutingModule
  ]
})
export class NewlineregistrationModule { }
