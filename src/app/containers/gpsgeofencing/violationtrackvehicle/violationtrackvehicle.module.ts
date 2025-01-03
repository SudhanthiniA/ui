import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViolationtrackvehicleComponent } from './violationtrackvehicle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ViolationtrackvehicleRoutingModule } from './violationtrackvehicle-routing.module';


@NgModule({
  declarations: [ViolationtrackvehicleComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViolationtrackvehicleRoutingModule
  ]
})
export class ViolationtrackvehicleModule { }
