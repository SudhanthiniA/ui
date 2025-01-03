import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SheeranidhiregisterRoutingModule } from './sheeranidhiregister-routing.module';
import { SheeranidhiregisterComponent } from './sheeranidhiregister.component';
import { AddsheeranidhiregisterComponent } from './addsheeranidhiregister/addsheeranidhiregister.component';
import { ViewsheeranidhiregisterComponent } from './viewsheeranidhiregister/viewsheeranidhiregister.component';



@NgModule({
  declarations: [SheeranidhiregisterComponent, AddsheeranidhiregisterComponent, ViewsheeranidhiregisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    SheeranidhiregisterRoutingModule
  ]
})
export class SheeranidhiregisterModule { }
