import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { Nd02permitComponent } from './nd02permit.component';
import { Nd02permitRoutingModule } from './nd02permit-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AddComponent, ViewComponent , Nd02permitComponent],
  imports: [
    CommonModule,
    Nd02permitRoutingModule,
    SharedModule
  ]
})
export class Nd02permitModule { }
