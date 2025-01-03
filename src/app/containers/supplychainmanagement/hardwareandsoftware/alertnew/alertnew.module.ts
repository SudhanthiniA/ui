import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AlertnewComponent } from './alertnew.component';
import {AlertnewRoutingModule} from './alertnew-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AlertnewComponent,ViewComponent],
  imports: [
    CommonModule,
    AlertnewRoutingModule,
    SharedModule
  ]
})
export class AlertnewModule { }
