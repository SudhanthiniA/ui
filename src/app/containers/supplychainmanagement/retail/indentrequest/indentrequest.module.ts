import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { IndentrequestRoutingModule } from './indentrequest-routing.module';
import { IndentrequestComponent } from './indentrequest.component';
import { IndentrequestwholesaleComponent } from './indentrequestwholesale/indentrequestwholesale.component';
import { ProductindentComponent } from './productindent/productindent.component';
import { PaymentindentComponent } from './paymentindent/paymentindent.component';
import { IndentconfirmationComponent } from './indentconfirmation/indentconfirmation.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    IndentrequestComponent,
    IndentrequestwholesaleComponent,
    ProductindentComponent,
    PaymentindentComponent,
    IndentconfirmationComponent,
    ViewindentrequestComponent
  ],
  imports: [
    CommonModule,
    IndentrequestRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class IndentrequestModule { }
