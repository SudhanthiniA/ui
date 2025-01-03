import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

import { AddfaqComponent } from './addfaq/addfaq.component';
import { ViewfaqComponent } from './viewfaq/viewfaq.component';

@NgModule({
  declarations: [FaqComponent, AddfaqComponent, ViewfaqComponent],
  imports: [
    CommonModule,
    SharedModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
