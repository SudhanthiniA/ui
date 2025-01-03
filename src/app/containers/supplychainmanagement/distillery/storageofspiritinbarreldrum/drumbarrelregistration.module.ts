import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import {DrumbarrelregistrationRoutingModule} from './drumbarrelregistration-routing.module';
import { DrumbarrelregistrationComponent } from './drumbarrelregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [DrumbarrelregistrationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    DrumbarrelregistrationRoutingModule,
    SharedModule
  ]
})
export class DrumbarrelregistrationModule { }
