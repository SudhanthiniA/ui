import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RequestforreturntpomdoutsideupComponent } from './requestforreturntpomdoutsideup.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {RequestforreturntpomdoutsideupRoutingModule} from './requestforreturntpomdoutsideup-routing.module';



@NgModule({
  declarations: [RequestforreturntpomdoutsideupComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequestforreturntpomdoutsideupRoutingModule
  ]
})
export class RequestforreturntpomdoutsideupModule { }
