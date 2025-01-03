import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { AccountpurchaserRoutingModule } from './accountpurchaser-routing.module';
import { AccountpurchaserComponent } from './accountpurchaser.component';
import { ViewpurchaserComponent } from './viewpurchaser/viewpurchaser.component';
import { AddpurchaserComponent } from './addpurchaser/addpurchaser.component';


@NgModule({
  declarations: [AccountpurchaserComponent, ViewpurchaserComponent, AddpurchaserComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountpurchaserRoutingModule
  ]
})
export class AccountpurchaserModule { }
