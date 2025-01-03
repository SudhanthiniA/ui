import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl22importpermitComponent } from './fl22importpermit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Fl22importpermitRoutingModule } from './fl22importpermit-routing.module'

@NgModule({
  declarations: [
    Fl22importpermitComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Fl22importpermitRoutingModule
  ]
})
export class Fl22importpermitModule { }
