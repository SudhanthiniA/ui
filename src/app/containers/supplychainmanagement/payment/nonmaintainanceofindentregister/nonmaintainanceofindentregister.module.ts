import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NonmaintainanceofindentregisterRoutingModule } from './nonmaintainanceofindentregister-routing.module';
import { NonmaintainanceofindentregisterComponent } from './nonmaintainanceofindentregister.component';
import { AddnonmaintainanceofindentregisterComponent } from './addnonmaintainanceofindentregister/addnonmaintainanceofindentregister.component';
import { ViewnonmaintainanceofindentregisterComponent } from './viewnonmaintainanceofindentregister/viewnonmaintainanceofindentregister.component';
import { EditnonmaintainanceofindentregisterComponent } from './editnonmaintainanceofindentregister/editnonmaintainanceofindentregister.component';

@NgModule({
  declarations: [NonmaintainanceofindentregisterComponent, AddnonmaintainanceofindentregisterComponent, ViewnonmaintainanceofindentregisterComponent, EditnonmaintainanceofindentregisterComponent],
  imports: [
    CommonModule,
    NonmaintainanceofindentregisterRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class NonmaintainanceofindentregisterModule { }
