import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarqrwastageRoutingModule } from './barqrwastage-routing.module';
import { BarqrwastageComponent } from './barqrwastage.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [BarqrwastageComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
    BarqrwastageRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BarqrwastageModule { }
