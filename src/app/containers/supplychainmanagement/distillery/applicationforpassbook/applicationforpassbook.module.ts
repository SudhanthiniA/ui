import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ApplicationforpassbookRoutingModule } from './applicationforpassbook-routing.module';

import { ApplicationforpassbookComponent } from './applicationforpassbook.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ApplicationforpassbookComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ApplicationforpassbookRoutingModule,
    SharedModule
  ]
})
export class ApplicationforpassbookModule { }
