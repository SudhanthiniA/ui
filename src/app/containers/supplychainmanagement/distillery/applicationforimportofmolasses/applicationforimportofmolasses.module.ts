import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationforimportofmolassesComponent } from './applicationforimportofmolasses.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import {ApplicationforimportofmolassesRoutingModule} from './applicationforimportofmolasses-routing.module';



@NgModule({
  declarations: [ApplicationforimportofmolassesComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationforimportofmolassesRoutingModule
  ]
})
export class ApplicationforimportofmolassesModule { }
