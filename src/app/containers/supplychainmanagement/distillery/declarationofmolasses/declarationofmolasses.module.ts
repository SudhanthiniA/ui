import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import {DeclarationofmolassesRoutingModule} from './declarationofmolasses-routing.module';
import { DeclarationofmolassesComponent } from './declarationofmolasses.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [DeclarationofmolassesComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeclarationofmolassesRoutingModule
  ]
})
export class DeclarationofmolassesModule { }
