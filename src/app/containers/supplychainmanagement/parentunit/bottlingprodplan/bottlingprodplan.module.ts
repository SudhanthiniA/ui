import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import{BottlingprodplanRoutingModule} from './bottlingprodplan-routing.module';
import { BottlingprodplanComponent } from './bottlingprodplan.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MappedComponent } from './mapped/mapped.component';
import { PaymentforcancelrequestComponent } from './paymentforcancelrequest/paymentforcancelrequest.component';



@NgModule({
  declarations: [BottlingprodplanComponent, AddComponent, ViewComponent, MappedComponent, PaymentforcancelrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingprodplanRoutingModule
  ]
})
export class BottlingprodplanModule { }
