import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SubconsolDraftTpFl36RoutingModule } from './subconsol-draft-tp-fl36-routing.module';
import { SubconsolDraftTpFl36Component } from './subconsol-draft-tp-fl36.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeoapprovalComponent } from './deoapproval/deoapproval.component';
import { DeocancelComponent } from './deocancel/deocancel.component';

@NgModule({
  declarations: [SubconsolDraftTpFl36Component,AddComponent, ViewComponent, DeoapprovalComponent, DeocancelComponent],
  imports: [
    CommonModule,
    SubconsolDraftTpFl36RoutingModule,
    SharedModule
  ]
})
export class SubconsolDraftTpFl36Module { }
