import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Mb2RoutingModule } from './mb2-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mb2RoutingModule
  ]
})
export class Mb2Module { }
