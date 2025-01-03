import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RacaccountComponent } from './racaccount.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {RacaccountRoutingModule} from './racaccount-routing.module';


@NgModule({
  declarations: [RacaccountComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RacaccountRoutingModule
  ]
})
export class RacaccountModule { }
