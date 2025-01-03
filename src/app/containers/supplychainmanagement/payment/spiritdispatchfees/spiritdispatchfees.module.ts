import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritdispatchfeesRoutingModule } from './spiritdispatchfees-routing.module';
import { SpiritdispatchfeesComponent } from './spiritdispatchfees.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SpiritdispatchfeesComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpiritdispatchfeesRoutingModule
  ]
})
export class SpiritdispatchfeesModule { }
