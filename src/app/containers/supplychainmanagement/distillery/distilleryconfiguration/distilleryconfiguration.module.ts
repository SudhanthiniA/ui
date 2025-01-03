import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {DistilleryconfigurationRoutingModule} from './distilleryconfiguration-routing.module';
import { DistilleryconfigurationComponent } from './distilleryconfiguration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [DistilleryconfigurationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    DistilleryconfigurationRoutingModule,
    SharedModule
  ]
})
export class DistilleryconfigurationModule { }
