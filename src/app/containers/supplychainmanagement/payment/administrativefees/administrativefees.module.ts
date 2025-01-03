import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AdministrativefeesRoutingModule } from './administrativefees-routing.module';
import { AdministrativefeesComponent } from './administrativefees.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AdministrativefeesComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdministrativefeesRoutingModule
  ]
})
export class AdministrativefeesModule { }
