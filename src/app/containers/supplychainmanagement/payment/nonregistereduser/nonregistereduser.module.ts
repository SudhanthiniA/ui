import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { NonregistereduserRoutingModule } from './nonregistereduser-routing.module';
import { NonregistereduserComponent } from './nonregistereduser.component';

@NgModule({
  declarations: [NonregistereduserComponent],
  imports: [
    CommonModule,
    SharedModule,
    NonregistereduserRoutingModule
  ]
})
export class NonregistereduserModule { }
