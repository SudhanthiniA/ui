import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinealComponent } from './stockineal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import  {StockinealRoutingModule} from './stockineal-routing.module';



@NgModule({
  declarations: [StockinealComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockinealRoutingModule
  ]
})
export class StockinealModule { }
