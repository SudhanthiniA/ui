import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Nonregisterbrandpd2RoutingModule } from './nonregisterbrandpd2-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Nonregisterbrandpd2RoutingModule
  ]
})
export class Nonregisterbrandpd2Module { }
