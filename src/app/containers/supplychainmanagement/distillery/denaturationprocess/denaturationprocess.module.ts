import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import {DenaturationprocessRoutingModule} from './denaturationprocess-routing.module';
import { DenaturationprocessComponent } from './denaturationprocess.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [DenaturationprocessComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    DenaturationprocessRoutingModule,
    SharedModule
  ]
})
export class DenaturationprocessModule { }
