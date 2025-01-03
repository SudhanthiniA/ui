import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { FormFl54RoutingModule } from './form-fl54-routing.module';


@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    FormFl54RoutingModule,
    SharedModule
  ]
})
export class FormFl54Module { }
