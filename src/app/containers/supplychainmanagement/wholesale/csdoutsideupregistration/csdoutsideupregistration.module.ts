import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CsdoutsideupregistrationRoutingModule } from './csdoutsideupregistration-routing.module';
import { EditoutsideComponent } from './editoutside/editoutside.component';
import { ViewoutsideComponent } from './viewoutside/viewoutside.component';
import { CsdoutsideupregistrationComponent } from  './csdoutsideupregistration.component';

@NgModule({
  declarations: [EditoutsideComponent, ViewoutsideComponent, CsdoutsideupregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    CsdoutsideupregistrationRoutingModule
  ]
})
export class CsdoutsideupregistrationModule { }
