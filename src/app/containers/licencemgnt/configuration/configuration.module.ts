import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';

import { AddconfigurationComponent } from './addconfiguration/addconfiguration.component'
import { ViewconfigurationComponent } from './viewconfiguration/viewconfiguration.component';

@NgModule({
  declarations: [ConfigurationComponent, AddconfigurationComponent, ViewconfigurationComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule
  ]
})
export class ConfigurationModule { }
