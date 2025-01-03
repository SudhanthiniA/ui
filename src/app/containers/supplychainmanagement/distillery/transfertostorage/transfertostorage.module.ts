import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';


import { TransfertostorageRoutingModule } from './transfertostorage-routing.module';
import { TransfertostorageComponent } from './transfertostorage.component';
import { AddtransfertostorageComponent } from './addtransfertostorage/addtransfertostorage.component';
import { ViewtransfertostorageComponent } from './viewtransfertostorage/viewtransfertostorage.component';

@NgModule({
  declarations: [TransfertostorageComponent, AddtransfertostorageComponent, ViewtransfertostorageComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransfertostorageRoutingModule
  ]
})
export class TransfertostorageModule { }
