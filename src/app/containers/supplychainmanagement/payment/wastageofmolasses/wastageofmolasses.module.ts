import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WastageofmolassesRoutingModule } from './wastageofmolasses-routing.module';
import { WastageofmolassesComponent } from './wastageofmolasses.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [WastageofmolassesComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastageofmolassesRoutingModule
  ]
})
export class WastageofmolassesModule { }
