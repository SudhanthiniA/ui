import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RedistillationrequestforspiritblindRoutingModule } from './redistillationrequestforspiritblind-routing.module';
import { RedistillationrequestforspiritblindComponent } from './redistillationrequestforspiritblind.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [RedistillationrequestforspiritblindComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RedistillationrequestforspiritblindRoutingModule
  ]
})
export class RedistillationrequestforspiritblindModule { }
