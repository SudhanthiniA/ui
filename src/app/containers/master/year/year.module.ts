import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { YearRoutingModule } from './year-routing.module';
import { YearComponent } from './year.component';
import { AddedityearComponent } from './addedityear/addedityear.component';
import { ViewyearComponent } from './viewyear/viewyear.component';

@NgModule({
  declarations: [
    YearComponent, 
    AddedityearComponent, 
    ViewyearComponent
  ],
  imports: [
    SharedModule,
    YearRoutingModule
  ]
})
export class YearModule { }
