import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ImportpermitrequestRoutingModule } from './importpermitrequest-routing.module';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [AddComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitrequestRoutingModule
  ]
})
export class ImportpermitrequestModule { }
