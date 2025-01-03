import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {AlltransactionRoutingModule} from './alltransaction-routing.module';
import { AlltransactionComponent } from './alltransaction.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [AlltransactionComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AlltransactionRoutingModule,
    SharedModule
  ]
})
export class AlltransactionModule { }
