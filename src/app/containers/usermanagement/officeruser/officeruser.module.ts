import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OfficeruserRoutingModule } from './officeruser-routing.module';
import { OfficeruserComponent } from './officeruser.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [OfficeruserComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    OfficeruserRoutingModule
  ]
})
export class OfficeruserModule { }
