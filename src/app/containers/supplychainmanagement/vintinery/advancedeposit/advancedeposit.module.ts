import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedepositRoutingModule  } from './advancedeposit-routing.module';
import { AdvancedepositComponent } from './advancedeposit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AdvancedepositComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvancedepositRoutingModule
  ]
})
export class AdvancedepositModule { }
