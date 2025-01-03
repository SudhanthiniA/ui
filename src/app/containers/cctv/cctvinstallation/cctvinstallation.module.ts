import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CctvinstallationRoutingModule } from './cctvinstallation-routing.module';
import { CctvinstallationComponent } from './cctvinstallation.component';
import { AddcctvinstallationComponent } from './addcctvinstallation/addcctvinstallation.component';
import { ViewcctvinstallationComponent } from './viewcctvinstallation/viewcctvinstallation.component';



@NgModule({
  declarations: [CctvinstallationComponent, AddcctvinstallationComponent, ViewcctvinstallationComponent],
  imports: [
    CommonModule,
    SharedModule,
    CctvinstallationRoutingModule
  ]
})
export class CctvinstallationModule { }
