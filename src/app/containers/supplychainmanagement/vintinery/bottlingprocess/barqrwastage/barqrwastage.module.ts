import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BarqrwastageRoutingModule } from './barqrwastage-routing.module';
import { BarqrwastageComponent } from './barqrwastage.component';
import { AddbarqrwastageComponent } from './addbarqrwastage/addbarqrwastage.component';
import { ViewbarqrwastageComponent } from './viewbarqrwastage/viewbarqrwastage.component';


@NgModule({
  declarations: [BarqrwastageComponent,AddbarqrwastageComponent,ViewbarqrwastageComponent],
  imports: [
    CommonModule,
    SharedModule,
    BarqrwastageRoutingModule
  ]
})
export class BarqrwastageModule { }
