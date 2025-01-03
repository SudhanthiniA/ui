import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OutupdistbrandregRoutingModule } from './outupdistbrandreg-routing.module';
import { OutupdistbrandregComponent } from './outupdistbrandreg.component';
import { AddoutupdistbrandregComponent } from './addoutupdistbrandreg/addoutupdistbrandreg.component';
import { ViewoutupdistbrandregComponent } from './viewoutupdistbrandreg/viewoutupdistbrandreg.component';


@NgModule({
  declarations: [OutupdistbrandregComponent, AddoutupdistbrandregComponent, ViewoutupdistbrandregComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    OutupdistbrandregRoutingModule,
  ]
})
export class OutupdistbrandregModule { }
