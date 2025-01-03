import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemmasterRoutingModule } from './itemmaster-routing.module';
import { ItemmasterComponent } from './itemmaster.component';
import { AdditemmasterComponent } from './additemmaster/additemmaster.component';
import { ViewitemmasterComponent } from './viewitemmaster/viewitemmaster.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [ItemmasterComponent, AdditemmasterComponent, ViewitemmasterComponent],
  imports: [
    CommonModule,
    ItemmasterRoutingModule,
    SharedModule
  ]
})
export class ItemmasterModule { }
