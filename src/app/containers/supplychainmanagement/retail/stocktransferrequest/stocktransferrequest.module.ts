import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { StocktransferrequestComponent } from './stocktransferrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {StocktransferrequestRoutingModule} from './stocktransferrequest-routing.module';

@NgModule({
  declarations: [StocktransferrequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    StocktransferrequestRoutingModule,
    SharedModule
  ]
})
export class StocktransferrequestModule { }
