import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SubmisofrptevidforunschdledinspectRoutingModule } from './submisofrptevidforunschdledinspect-routing.module';
import { SubmisofrptevidforunschdledinspectComponent } from './submisofrptevidforunschdledinspect.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './/view/view.component';
import { FieldofficerlistComponent } from './fieldofficerlist/fieldofficerlist.component';

@NgModule({
  declarations: [SubmisofrptevidforunschdledinspectComponent, AddComponent, ViewComponent, FieldofficerlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubmisofrptevidforunschdledinspectRoutingModule
  ]
})
export class SubmisofrptevidforunschdledinspectModule { }
