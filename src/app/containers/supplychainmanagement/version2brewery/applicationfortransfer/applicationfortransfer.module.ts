import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ApplicationfortransferRoutingModule } from './applicationfortransfer-routing.module';
import { ApplicationfortransferComponent } from './applicationfortransfer.component';
import { AddapplicationfortransferComponent } from './addapplicationfortransfer/addapplicationfortransfer.component';
import { ViewapplicationfortransferComponent } from './viewapplicationfortransfer/viewapplicationfortransfer.component';


@NgModule({
  declarations: [ApplicationfortransferComponent, AddapplicationfortransferComponent, ViewapplicationfortransferComponent],
  imports: [
    CommonModule,
    ApplicationfortransferRoutingModule,
    SharedModule
  ]
})
export class ApplicationfortransferModule { }
