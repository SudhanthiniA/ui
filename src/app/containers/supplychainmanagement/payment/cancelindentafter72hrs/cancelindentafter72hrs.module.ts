import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Cancelindentafter72hrsRoutingModule } from './cancelindentafter72hrs-routing.module';
import { Cancelindentafter72hrsComponent } from './cancelindentafter72hrs.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

// import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
// import { EdittransitgatepassComponent } from './edittransitgatepass/edittransitgatepass.component';


@NgModule({
  declarations: [Cancelindentafter72hrsComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
    Cancelindentafter72hrsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Cancelindentafter72hrsModule { }
