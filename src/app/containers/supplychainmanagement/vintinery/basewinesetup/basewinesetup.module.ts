import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BasewinesetupComponent } from './basewinesetup.component';
import {BasewinesetupRoutingModule} from './basewinesetup-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [BasewinesetupComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BasewinesetupRoutingModule
  ]
})
export class BasewinesetupModule { }
