import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Exportofspiritpd18Component } from './exportofspiritpd18.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {Exportofspiritpd18RoutingModule} from './exportofspiritpd18-routing.module';


@NgModule({
  declarations: [Exportofspiritpd18Component, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    Exportofspiritpd18RoutingModule,
    SharedModule
  ]
})
export class Exportofspiritpd18Module { }
