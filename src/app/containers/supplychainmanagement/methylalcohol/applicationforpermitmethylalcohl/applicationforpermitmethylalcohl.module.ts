import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DataTablesModule } from 'angular-datatables';
import { ApplicationforpermitmethylalcohlComponent } from './applicationforpermitmethylalcohl.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApplicationforpermitmethylalcohlRoutingModule } from './applicationforpermitmethylalcohl-routing.module';


@NgModule({
  declarations: [ApplicationforpermitmethylalcohlComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    ApplicationforpermitmethylalcohlRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class  ApplicationforpermitmethylalcohlModule { }
