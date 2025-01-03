import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesaleindentRoutingModule } from './wholesaleindent-routing.module';
import { WholesaleindentComponent } from './wholesaleindent.component';
import { ViewwholesaleindentComponent } from './viewwholesaleindent/viewwholesaleindent.component';



@NgModule({
  declarations: [WholesaleindentComponent,ViewwholesaleindentComponent],
  imports: [
    CommonModule,
    WholesaleindentRoutingModule,
    SharedModule
  ]
})
export class WholesaleindentModule { }
