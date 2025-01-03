import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesalemonocartonindentacceptanceRoutingModule } from './wholesalemonocartonindentacceptance-routing.module'
import { WholesalemonocartonindentacceptanceComponent } from './wholesalemonocartonindentacceptance.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    WholesalemonocartonindentacceptanceComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WholesalemonocartonindentacceptanceRoutingModule
  ]
})
export class WholesalemonocartonindentacceptanceModule { }
