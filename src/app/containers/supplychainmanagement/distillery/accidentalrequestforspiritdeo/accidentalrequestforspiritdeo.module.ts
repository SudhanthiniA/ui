import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalrequestforspiritdeoComponent } from './accidentalrequestforspiritdeo.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {AccidentalrequestforspiritdeoRoutingModule} from './accidentalrequestforspiritdeo-routing.module';



@NgModule({
  declarations: [AccidentalrequestforspiritdeoComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AccidentalrequestforspiritdeoRoutingModule,
    SharedModule
  ]
})
export class AccidentalrequestforspiritdeoModule { }
