import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { InternalauditoraudparaRoutingModule } from './internalauditoraudpara-routing.module';
import { InternalauditoraudparaComponent } from './internalauditoraudpara.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [InternalauditoraudparaComponent,ViewComponent],
  imports: [
    CommonModule,
    InternalauditoraudparaRoutingModule,
    SharedModule
  ]
})
export class InternalauditoraudparaModule { }
