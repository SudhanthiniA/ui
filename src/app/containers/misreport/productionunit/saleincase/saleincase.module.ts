import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SaleincaseRoutingModule } from './saleincase-routing.module';
import { SaleincaseComponent } from './saleincase.component';



@NgModule({
  declarations: [SaleincaseComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaleincaseRoutingModule
  ]
})
export class SaleincaseModule { }
