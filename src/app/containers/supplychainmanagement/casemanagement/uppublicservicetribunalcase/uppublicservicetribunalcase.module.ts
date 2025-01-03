import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UppublicservicetribunalcaseRoutingModule } from './uppublicservicetribunalcase-routing.module';
import { UppublicservicetribunalcaseComponent } from '../uppublicservicetribunalcase/uppublicservicetribunalcase.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [UppublicservicetribunalcaseComponent,
    AddComponent,
    ViewComponent,
    EditComponent,],
  imports: [
    CommonModule,
    SharedModule,
    UppublicservicetribunalcaseRoutingModule
  ]
})
export class UppublicservicetribunalcaseModule { }
