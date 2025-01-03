import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ButtonmasterRoutingModule } from './buttonmaster-routing.module';
import { ButtonmasterComponent } from './buttonmaster.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [ButtonmasterComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    ButtonmasterRoutingModule,
    SharedModule
    
  ]
})
export class ButtonmasterModule { }
