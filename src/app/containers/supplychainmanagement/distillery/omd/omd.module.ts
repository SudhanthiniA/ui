import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OmdRoutingModule  } from './omd-routing.module';
import { OmdComponent } from './omd.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [OmdComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    OmdRoutingModule
  ]
})
export class OmdModule { }
