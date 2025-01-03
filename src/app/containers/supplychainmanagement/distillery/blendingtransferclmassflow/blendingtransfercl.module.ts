import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';
import { BlendingtransferclRoutingModule } from './blendingtransfercl-routing.module'
import { BlendingtransferclComponent } from './blendingtransfercl.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, BlendingtransferclComponent],
  imports: [
    CommonModule,
    SharedModule,
    BlendingtransferclRoutingModule,
  ]
})
export class BlendingtransferclModule { }
