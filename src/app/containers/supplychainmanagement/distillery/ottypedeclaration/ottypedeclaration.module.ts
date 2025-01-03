import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {OttypedeclarationComponent  } from './ottypedeclaration.component';
import {OttypedeclarationRoutingModule} from './ottypedeclaration-routing.module';



@NgModule({
  declarations: [AddComponent, ViewComponent, OttypedeclarationComponent],
  imports: [
    CommonModule,
    OttypedeclarationRoutingModule,
    SharedModule
  ]
})
export class OttypedeclarationModule { }
