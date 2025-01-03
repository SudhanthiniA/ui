import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentacceptanceRoutingModule } from './indentacceptance-routing.module';
import { IndentacceptanceComponent } from './indentacceptance.component';
import { ViewindentacceptanceComponent } from './viewindentacceptance/viewindentacceptance.component';
import { PartdeliveredComponent } from './partdelivered/partdelivered.component';


@NgModule({
  declarations: [IndentacceptanceComponent, ViewindentacceptanceComponent, PartdeliveredComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentacceptanceRoutingModule
  ]
})
export class IndentacceptanceModule { }
