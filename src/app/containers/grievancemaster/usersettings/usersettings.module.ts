import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { UsersettingsComponent } from './usersettings.component';
import { AddusersettingsComponent } from './addusersettings/addusersettings.component';
import { ViewusersettingsComponent } from './viewusersettings/viewusersettings.component';
import { UsersettingsRoutingModule } from './usersettings-routing.module';


@NgModule({
  declarations: [UsersettingsComponent,AddusersettingsComponent,ViewusersettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersettingsRoutingModule
  ]
})
export class UsersettingsModule { }
