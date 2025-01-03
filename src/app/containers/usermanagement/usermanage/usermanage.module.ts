import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UsermanageRoutingModule } from './usermanage-routing.module';
import { UsermanageComponent } from './usermanage.component';
import { AddusersComponent } from './addusers/addusers.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [UsermanageComponent, AddusersComponent, ViewusersComponent],
  imports: [
    CommonModule,
    UsermanageRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [DatePipe]

})
export class UsermanageModule { }
