import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { VechicletrackingComponent } from './vechicletracking.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ViolationtrackvehicleRoutingModule } from './vechicletracking-routing.module';


@NgModule({
  declarations: [VechicletrackingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViolationtrackvehicleRoutingModule
  ]
})
export class ViolationtrackvehicleModule { }
