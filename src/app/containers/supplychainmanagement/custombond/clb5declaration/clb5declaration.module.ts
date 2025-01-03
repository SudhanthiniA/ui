import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Clb5declarationRoutingModule } from './clb5declaration-routing.module';
import { Clb5declarationComponent } from './clb5declaration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [Clb5declarationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Clb5declarationRoutingModule
  ]
})
export class Clb5declarationModule { }
