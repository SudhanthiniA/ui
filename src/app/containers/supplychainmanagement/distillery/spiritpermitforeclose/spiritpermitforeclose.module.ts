import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpiritpermitforecloseRoutingModule } from './spiritpermitforeclose-routing.module';

import { AddspiritpermitforecloseComponent } from './addspiritpermitforeclose/addspiritpermitforeclose.component';
import { ViewspiritpermitforecloseComponent } from './viewspiritpermitforeclose/viewspiritpermitforeclose.component';
import { SpiritpermitforecloseComponent } from './spiritpermitforeclose.component';
import { SharedModule } from '@appThemeShared/shared.module';;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddspiritpermitforecloseComponent, ViewspiritpermitforecloseComponent,  SpiritpermitforecloseComponent],
  imports: [
    CommonModule,
    SpiritpermitforecloseRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class SpiritpermitforecloseModule { }
