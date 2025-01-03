import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    TreeViewModule
  ]
})
export class ProfileModule { }
