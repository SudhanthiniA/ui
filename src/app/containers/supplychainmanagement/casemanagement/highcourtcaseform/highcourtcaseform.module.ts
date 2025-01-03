import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { HighcourtcaseformRoutingModule } from './highcourtcaseform-routing.module'
import { HighcourtcaseformComponent } from './highcourtcaseform.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ HighcourtcaseformComponent,
   AddComponent,
   EditComponent,
   ViewComponent,],
  imports: [
    CommonModule,
    SharedModule,
    HighcourtcaseformRoutingModule
  ]
})
export class HighcourtcaseformModule { }
