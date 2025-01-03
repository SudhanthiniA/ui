import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SupremecourtcaseformRoutingModule } from './supremecourtcaseform-routing.module';
import { SupremecourtcaseformComponent } from './supremecourtcaseform.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [SupremecourtcaseformComponent,
    AddComponent,
    EditComponent,
    ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SupremecourtcaseformRoutingModule
  ]
})
export class SupremecourtcaseformModule { }
