import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { EntitysubuserRoutingModule } from './entitysubuser-routing.module';
import { EntitysubuserComponent } from './entitysubuser.component';
import { ViewentitysubuserComponent } from './Viewentitysubuser/Viewentitysubuser.component';
import { AddentitysubuserComponent } from './addentitysubuser/addentitysubuser.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    EntitysubuserComponent,
    ViewentitysubuserComponent,
    AddentitysubuserComponent,
    EditComponent
  ],
  imports: [
    SharedModule,
    EntitysubuserRoutingModule,
    CommonModule
  ]
})
export class EntitysubuserModule { }
