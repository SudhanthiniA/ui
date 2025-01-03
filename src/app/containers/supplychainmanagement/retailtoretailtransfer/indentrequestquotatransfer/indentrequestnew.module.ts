import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { IndentrequestnewRoutingModule } from './indentrequestnew-routing.module';
import { IndentrequestnewComponent } from './indentrequestnew.component';
import { AddindentrequestnewComponent } from './addindentrequestnew/addindentrequestnew.component';
import { ViewindentrequestnewComponent } from './viewindentrequestnew/viewindentrequestnew.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [IndentrequestnewComponent, AddindentrequestnewComponent, ViewindentrequestnewComponent, SuccessComponent],
  imports: [
    CommonModule,
    IndentrequestnewRoutingModule,
    SharedModule
  ]
})
export class IndentrequestnewModule { }
