import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl50stockinComponent } from './fl50stockin.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PreviewComponent } from './preview/preview.component';
import {Fl50stockinRoutingModule} from './fl50stockin-routing.module';



@NgModule({
  declarations: [Fl50stockinComponent, AddComponent, ViewComponent, PreviewComponent],
  imports: [
    CommonModule,
    Fl50stockinRoutingModule,
    SharedModule
  ]
})
export class Fl50stockinModule { }
