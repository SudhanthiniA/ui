import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchnewRoutingModule } from './dispatchnew-routing.module';
import { DispatchnewComponent } from './dispatchnew.component';
import { AdddispatchComponent } from './adddispatch/adddispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';

@NgModule({
  declarations: [DispatchnewComponent, AdddispatchComponent, ViewdispatchComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchnewRoutingModule
  ]
})
export class DispatchnewModule { }