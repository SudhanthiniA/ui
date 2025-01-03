import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RequestforreturntpwithinupomdComponent } from './requestforreturntpwithinupomd.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {RequestforreturntpwithinupomdRoutingModule} from './requestforreturntpwithinupomd-routing.module';

@NgModule({
  declarations: [RequestforreturntpwithinupomdComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequestforreturntpwithinupomdRoutingModule
  ]
})
export class RequestforreturntpwithinupomdModule { }
