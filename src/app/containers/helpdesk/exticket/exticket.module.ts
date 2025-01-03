import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ExticketRoutingModule } from './exticket-routing.module';
import { ExticketComponent } from './exticket.component';
import { AddexticketComponent } from './addexticket/addexticket.component';
import { ViewexticketComponent } from './viewexticket/viewexticket.component';

@NgModule({
  declarations: [ExticketComponent, AddexticketComponent, ViewexticketComponent],
  imports: [
    CommonModule,
    ExticketRoutingModule,
    SharedModule
  ]
})
export class ExticketModule { }
