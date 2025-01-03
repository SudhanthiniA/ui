import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthanalindentacceptanceRoutingModule } from './ethanalindentacceptance-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EthanalindentacceptanceComponent } from './ethanalindentacceptance.component';
import { ViewethanlindentacceptanceComponent } from './viewethanlindentacceptance/viewethanlindentacceptance.component';

@NgModule({
  declarations: [EthanalindentacceptanceComponent, ViewethanlindentacceptanceComponent],
  imports: [
    CommonModule,
    EthanalindentacceptanceRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class EthanalindentacceptanceModule { }
