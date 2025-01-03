import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WastageqrreqaddqrbarRoutingModule } from './wastageqrreqaddqrbar-routing.module';
import { WastageqrreqaddqrbarComponent } from './wastageqrreqaddqrbar.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

@NgModule({
  declarations: [WastageqrreqaddqrbarComponent, AddComponent, ViewComponent,PaymentscreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastageqrreqaddqrbarRoutingModule
  ]
})
export class WastageqrreqaddqrbarModule { }
