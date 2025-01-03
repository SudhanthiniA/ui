import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { PosdamageRoutingModule } from './posdamage-routing.module';
import { PosdamageComponent } from './posdamage.component';
import { AddposdamageComponent } from './addposdamage/addposdamage.component';
import { ViewposdamageComponent } from './viewposdamage/viewposdamage.component';
import { CreateticketComponent } from './createticket/createticket.component';



@NgModule({
  declarations: [PosdamageComponent, AddposdamageComponent, ViewposdamageComponent, CreateticketComponent],
  imports: [
    CommonModule,
    SharedModule,
    PosdamageRoutingModule
  ]
})
export class PosdamageModule { }
