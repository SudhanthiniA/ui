import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { SugarmilloutsideupRoutingModule } from './sugarmilloutsideup-routing.module';
import { SugarmilloutsideupComponent } from './sugarmilloutsideup.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    SugarmilloutsideupComponent,
    ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SugarmilloutsideupRoutingModule
  ]
})
export class SugarmilloutsideupModule { }
