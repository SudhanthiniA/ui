import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BeerwastageduringbottlingRoutingModule } from './beerwastageduringbottling-routing.module';
import { BeerwastageduringbottlingComponent } from './beerwastageduringbottling.component';
import { AddbeerwastageduringbottlingComponent } from './addbeerwastageduringbottling/addbeerwastageduringbottling.component';
import { EditbeerwastageduringbottlingComponent } from './editbeerwastageduringbottling/editbeerwastageduringbottling.component';
import { ViewbeerwastageduringbottlingComponent } from './viewbeerwastageduringbottling/viewbeerwastageduringbottling.component';



@NgModule({
  declarations: [BeerwastageduringbottlingComponent, AddbeerwastageduringbottlingComponent, EditbeerwastageduringbottlingComponent, ViewbeerwastageduringbottlingComponent],
  imports: [
    CommonModule,
    SharedModule,
    BeerwastageduringbottlingRoutingModule
  ]
})
export class BeerwastageduringbottlingModule { }
