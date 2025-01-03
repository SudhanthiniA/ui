import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { FieldengineerRoutingModule } from './fieldengineer-routing.module';
import { FieldengineerComponent } from './fieldengineer.component';
import { ViewfieldengineerComponent } from './viewfieldengineer/viewfieldengineer.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [FieldengineerComponent, ViewfieldengineerComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    FieldengineerRoutingModule
  ]
})
export class FieldengineerModule { }
