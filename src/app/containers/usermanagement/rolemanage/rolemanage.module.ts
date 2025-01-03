import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { RolemanageRoutingModule } from './rolemanage-routing.module';
import { RolemanageComponent } from './rolemanage.component';
import { ViewrolemanageComponent } from './viewrolemanage/viewrolemanage.component';
import { AddrolemanageComponent } from './addrolemanage/addrolemanage.component';

@NgModule({
  declarations: [
    RolemanageComponent,
    ViewrolemanageComponent,
    AddrolemanageComponent
  ],
  imports: [
    SharedModule,
    RolemanageRoutingModule,
    TreeViewModule
  ]
})
export class RolemanageModule { }
