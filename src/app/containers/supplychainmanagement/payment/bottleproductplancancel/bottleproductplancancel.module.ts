import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BottleproductplancancelRoutingModule } from './bottleproductplancancel-routing.module';
import { BottleproductplancancelComponent } from './bottleproductplancancel.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [BottleproductplancancelComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
    BottleproductplancancelRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BottleproductplancancelModule { }
