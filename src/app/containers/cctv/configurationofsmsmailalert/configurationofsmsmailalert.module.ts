import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ConfigurationofsmsmailalertRoutingModule } from './configurationofsmsmailalert-routing.module';
import { ConfigurationofsmsmailalertComponent } from './configurationofsmsmailalert.component';
import { AddconfigurationofsmsmailalertComponent } from './addconfigurationofsmsmailalert/addconfigurationofsmsmailalert.component';
import { ViewconfigurationofsmsmailalertComponent } from './viewconfigurationofsmsmailalert/viewconfigurationofsmsmailalert.component';



@NgModule({
  declarations: [ConfigurationofsmsmailalertComponent, AddconfigurationofsmsmailalertComponent, ViewconfigurationofsmsmailalertComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationofsmsmailalertRoutingModule
  ]
})
export class ConfigurationofsmsmailalertModule { }
