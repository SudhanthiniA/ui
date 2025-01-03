import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { AdminuserRoutingModule } from './adminuser-routing.module';
import { AdminuserComponent } from './adminuser.component';
import { AddadminuserComponent } from './addadminuser/addadminuser.component';
import { ViewadminuserComponent } from './viewadminuser/viewadminuser.component';



@NgModule({
  declarations: [AdminuserComponent, AddadminuserComponent, ViewadminuserComponent],
  imports: [
    SharedModule,
    CommonModule,
    AdminuserRoutingModule
  ]
})
export class AdminuserModule { }
