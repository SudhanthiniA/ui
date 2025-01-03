import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { AddconfigurationComponent } from './addconfiguration/addconfiguration.component';
import { ViewconfigurationComponent } from './viewconfiguration/viewconfiguration.component';


@NgModule({
  declarations: [ConfigurationComponent, AddconfigurationComponent, ViewconfigurationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
