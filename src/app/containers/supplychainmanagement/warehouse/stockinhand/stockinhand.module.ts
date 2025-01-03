import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinhandRoutingModule } from './stockinhand-routing.module';
import { StockinhandComponent } from './stockinhand.component';
import { ViewstockinhandnewComponent } from './viewstockinhandnew/viewstockinhandnew.component';

@NgModule({
  declarations: [StockinhandComponent,ViewstockinhandnewComponent],
  imports: [
    CommonModule,
    StockinhandRoutingModule,
    SharedModule
  ]
})
export class StockinhandModule { }
