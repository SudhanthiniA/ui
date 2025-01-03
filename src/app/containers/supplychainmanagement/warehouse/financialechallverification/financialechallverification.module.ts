import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FinancialechallverificationRoutingModule } from './financialechallverification-routing.module';
import { FinancialechallverificationComponent } from './financialechallverification.component';
import { AddfinancialechallverificationComponent } from './addfinancialechallverification/addfinancialechallverification.component';
import { ViewfinancialechallverificationComponent } from './viewfinancialechallverification/viewfinancialechallverification.component';

@NgModule({
  declarations: [FinancialechallverificationComponent, AddfinancialechallverificationComponent, ViewfinancialechallverificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinancialechallverificationRoutingModule
  ]
})
export class FinancialechallverificationModule { }

