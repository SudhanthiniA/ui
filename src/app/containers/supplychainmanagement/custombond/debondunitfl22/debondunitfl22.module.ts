import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { Debondunitfl22RoutingModule } from './debondunitfl22-routing.module';
import { Debondunitfl22Component } from './debondunitfl22.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [Debondunitfl22Component, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Debondunitfl22RoutingModule
  ]
})
export class Debondunitfl22Module { }
