import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IntercbwindentacceptRoutingModule } from './intercbwindentaccept-routing.module';
import { IntercbwindentacceptComponent } from './intercbwindentaccept.component';
import { ViewintercbwindentacceptComponent } from './viewintercbwindentaccept/viewintercbwindentaccept.component';



@NgModule({
  declarations: [IntercbwindentacceptComponent, ViewintercbwindentacceptComponent],
  imports: [
    CommonModule,
    SharedModule,
    IntercbwindentacceptRoutingModule
  ]
})
export class IntercbwindentacceptModule { }
