import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PalletmasterRoutingModule } from './palletmaster-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PalletmasterComponent } from './palletmaster.component';



@NgModule({
  declarations: [PalletmasterComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PalletmasterRoutingModule
  ]
})
export class PalletmasterModule { }
