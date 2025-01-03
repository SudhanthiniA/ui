import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DenaturationofspiritRoutingModule  } from './denaturationofspirit-routing.module';
import { DenaturationofspiritComponent } from './denaturationofspirit.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

// import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
// import { EdittransitgatepassComponent } from './edittransitgatepass/edittransitgatepass.component';


@NgModule({
  declarations: [DenaturationofspiritComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
    DenaturationofspiritRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class  DenaturationofspiritModule { }
