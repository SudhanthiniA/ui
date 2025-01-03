import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Id14bRoutingModule } from './id14b-routing.module';
import { Viewid14bComponent } from './viewid14b/viewid14b.component';
import { Id14bComponent } from './id14b.component';


@NgModule({
  declarations: [Viewid14bComponent, Id14bComponent],
  imports: [
    CommonModule,
    SharedModule,
    Id14bRoutingModule
  ]
})
export class Id14bModule { }
