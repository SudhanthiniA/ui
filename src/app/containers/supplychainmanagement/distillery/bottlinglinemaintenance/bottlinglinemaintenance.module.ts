import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlinglinemaintenanceRoutingModule } from './bottlinglinemaintenance-routing.module';
import { BottlinglinemaintenanceComponent } from './bottlinglinemaintenance.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [BottlinglinemaintenanceComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglinemaintenanceRoutingModule
  ]
})
export class BottlinglinemaintenanceModule { }
