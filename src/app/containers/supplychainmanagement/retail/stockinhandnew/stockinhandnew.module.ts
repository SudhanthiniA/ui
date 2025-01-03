import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { StockinhandnewRoutingModule } from './stockinhandnew-routing.module';
import { StockinhandnewComponent } from './stockinhandnew.component';
import { ViewstockinhandnewComponent } from './viewstockinhandnew/viewstockinhandnew.component';

@NgModule({
  declarations: [StockinhandnewComponent, ViewstockinhandnewComponent],
  imports: [
    CommonModule,
    StockinhandnewRoutingModule,
    SharedModule
  ]
})
export class StockinhandnewModule { }
