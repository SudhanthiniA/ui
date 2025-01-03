import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Fl1aindentRoutingModule } from './fl1aindent-routing.module';
import { Fl1aindentComponent } from './fl1aindent.component';
import { Addfl1aindentComponent } from './addfl1aindent/addfl1aindent.component';
import { Viewfl1aindentComponent } from './viewfl1aindent/viewfl1aindent.component';
import { Approvalfl1aindentComponent } from './approvalfl1aindent/approvalfl1aindent.component';


@NgModule({
  declarations: [Fl1aindentComponent, Addfl1aindentComponent, Viewfl1aindentComponent, Approvalfl1aindentComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl1aindentRoutingModule
  ]
})
export class Fl1aindentModule { }
