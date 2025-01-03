import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { InstallationandverificationRoutingModule } from './installationandverification-routing.module';
import { AddinstallationandverificationComponent } from './addinstallationandverification/addinstallationandverification.component';
import { ViewinstallationandverificationComponent } from './viewinstallationandverification/viewinstallationandverification.component';
import { InstallationandverificationComponent } from './installationandverification.component';



@NgModule({
  declarations: [AddinstallationandverificationComponent, ViewinstallationandverificationComponent, InstallationandverificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    InstallationandverificationRoutingModule
  ]
})
export class InstallationandverificationModule { }
