import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesalemonocartonorderpickupRoutingModule } from './wholesalemonocartonorderpickup-routing.module';
import { WholesalemonocartonorderpickupComponent } from './wholesalemonocartonorderpickup.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    WholesalemonocartonorderpickupComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WholesalemonocartonorderpickupRoutingModule
  ]
})
export class WholesalemonocartonorderpickupModule { }
