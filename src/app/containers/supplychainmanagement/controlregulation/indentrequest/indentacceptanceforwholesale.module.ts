import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { IndentacceptanceforwholesaleRoutingModule } from './indentacceptanceforwholesale-routing.module';
import { IndentacceptanceforwholesaleComponent } from './indentacceptanceforwholesale.component';
import { ViewindentacceptanceComponent } from './viewindentacceptance/viewindentacceptance.component';
import { ViewindentacceptancenewComponent } from './viewindentacceptancenew/viewindentacceptancenew.component';
import { PartdeliveredindentComponent } from './partdeliveredindent/partdeliveredindent.component';
import { ViewdeliveredindentComponent } from './viewdeliveredindent/viewdeliveredindent.component';

@NgModule({
  declarations: [IndentacceptanceforwholesaleComponent, ViewindentacceptanceComponent, ViewindentacceptancenewComponent, PartdeliveredindentComponent, ViewdeliveredindentComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentacceptanceforwholesaleRoutingModule

  ]
})
export class IndentacceptanceforwholesaleModule { }
