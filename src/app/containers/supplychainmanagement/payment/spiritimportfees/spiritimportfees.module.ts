import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SpiritimportfeesRoutingModule } from './spiritimportfees-routing.module';
import { SpiritimportfeesComponent } from './spiritimportfees.component';
import { AddspiritimportfeesComponent } from './addspiritimportfees/addspiritimportfees.component';
import { EditspiritimportfeesComponent } from './editspiritimportfees/editspiritimportfees.component';
import { ViewspiritimportfeesComponent } from './viewspiritimportfees/viewspiritimportfees.component';



@NgModule({
  declarations: [SpiritimportfeesComponent, AddspiritimportfeesComponent, EditspiritimportfeesComponent, ViewspiritimportfeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpiritimportfeesRoutingModule
  ]
})
export class SpiritimportfeesModule { }
