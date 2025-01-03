import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { GeneratecodeComponent } from './generatecode.component';
import { AddgeneratecodeComponent } from './addgeneratecode/addgeneratecode.component';
import { ViewgeneratecodeComponent } from './viewgeneratecode/viewgeneratecode.component';
import { GeneratecodeRoutingModule } from './generatecode-routing.module';

@NgModule({
  declarations: [GeneratecodeComponent, AddgeneratecodeComponent, ViewgeneratecodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    GeneratecodeRoutingModule
  ]
})

export class GeneratecodeModule { }
