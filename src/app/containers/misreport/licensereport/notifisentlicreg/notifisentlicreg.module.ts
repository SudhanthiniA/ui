import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { NotifisentlicregRoutingModule } from './notifisentlicreg-routing.module';
import { NotifisentlicregComponent } from './notifisentlicreg.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [NotifisentlicregComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NotifisentlicregRoutingModule
  ]
})
export class NotifisentlicregModule { }
