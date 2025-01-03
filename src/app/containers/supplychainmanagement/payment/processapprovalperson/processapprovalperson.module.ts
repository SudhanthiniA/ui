import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProcessapprovalpersonRoutingModule } from './processapprovalperson-routing.module';
import { ProcessapprovalpersonComponent } from './processapprovalperson.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ProcessapprovalpersonComponent, 
    AddComponent, 
    EditComponent, 
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProcessapprovalpersonRoutingModule,
    SharedModule
  ]
})
export class ProcessapprovalpersonModule { }
