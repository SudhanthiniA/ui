import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf5Part3RoutingModule } from './mf5-part3-routing.module';
import { Mf5Part3Component } from './mf5-part3.component';
import { Addeditmf5Part3Component } from './addeditmf5-part3/addeditmf5-part3.component';
import { Viewmf5Part3Component } from './viewmf5-part3/viewmf5-part3.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Mf5Part3Component, Addeditmf5Part3Component, Viewmf5Part3Component],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Mf5Part3RoutingModule
  ]
})
export class Mf5Part3Module { }
