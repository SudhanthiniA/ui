import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl1aRoutingModule } from './fl1a-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl1aRoutingModule
  ]
})
export class Fl1aModule { }
