import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinbreweryRoutingModule} from './stockinbrewery-routing.module';
import { StockinbreweryComponent } from './stockinbrewery.component';
import { AddstockinbreweryComponent } from './addstockinbrewery/addstockinbrewery.component';
import { ViewstockinbreweryComponent } from './viewstockinbrewery/viewstockinbrewery.component';

@NgModule({
  declarations: [StockinbreweryComponent, AddstockinbreweryComponent, ViewstockinbreweryComponent],
  imports: [
    CommonModule,
    StockinbreweryRoutingModule,
    SharedModule
  ]
})
export class StockinbreweryModule { }
