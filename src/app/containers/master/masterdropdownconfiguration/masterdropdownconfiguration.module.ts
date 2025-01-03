import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { MasterdropdownconfigurationComponent } from './masterdropdownconfiguration.component';
import { MasterDropdownconfigurationRoutingModule } from './masterdropdownconfiguration-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
      MasterdropdownconfigurationComponent,
      AddComponent,
      ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MasterDropdownconfigurationRoutingModule
  ]
})
export class MasterDropdownConfigurationModule { }
