import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StockinRoutingModule } from './stockin-routing.module';
import { StockinComponent } from './stockin.component';
import { AddeditstockinComponent } from './addeditstockin/addeditstockin.component';

@NgModule({
  declarations: [
    StockinComponent, 
    AddeditstockinComponent
  ],
  imports: [
    SharedModule,
    StockinRoutingModule,
    NgbModule
  ]
})
export class StockinModule { }
