import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockinformComponent } from './stockinform.component';
import { AddstockinformComponent } from './addstockinform/addstockinform.component';
import { ViewstockinformComponent } from './viewstockinform/viewstockinform.component';
import { StockinformRoutingModule } from './stockinform-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [StockinformComponent, AddstockinformComponent, ViewstockinformComponent],
  imports: [
    CommonModule,
    StockinformRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class StockinformModule { }
