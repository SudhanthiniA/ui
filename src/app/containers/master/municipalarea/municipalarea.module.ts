import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MunicipalareaRoutingModule } from './municipalarea-routing.module';
import { MunicipalareaComponent } from './municipalarea.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [MunicipalareaComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    MunicipalareaRoutingModule,
    SharedModule
  ]
})
export class MunicipalareaModule { }
