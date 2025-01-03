import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { SubfeesapplicableRoutingModule } from './subfeesapplicable-routing.module';
import { SubfeesapplicableComponent } from './subfeesapplicable.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SubfeesapplicableComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubfeesapplicableRoutingModule
  ]
})
export class SubfeesapplicableModule { }
