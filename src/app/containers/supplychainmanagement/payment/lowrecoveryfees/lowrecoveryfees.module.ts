import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LowrecoveryfeesRoutingModule } from './lowrecoveryfees-routing.module';
import { LowrecoveryfeesComponent } from './lowrecoveryfees.component';
import { AddlowrecoveryfeesComponent } from './addlowrecoveryfees/addlowrecoveryfees.component';
import { EditlowrecoveryfeesComponent } from './editlowrecoveryfees/editlowrecoveryfees.component';
import { ViewlowrecoveryfeesComponent } from './viewlowrecoveryfees/viewlowrecoveryfees.component';



@NgModule({
  declarations: [LowrecoveryfeesComponent, AddlowrecoveryfeesComponent, EditlowrecoveryfeesComponent, ViewlowrecoveryfeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    LowrecoveryfeesRoutingModule
  ]
})
export class LowrecoveryfeesModule { }
