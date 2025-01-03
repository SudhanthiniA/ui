import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { RetailmstistRoutingModule } from './retailmstist-routing.module';
import { RetailmstistComponent } from './retailmstist.component';
import { AddretailmstistComponent } from './addretailmstist/addretailmstist.component';
import { ViewretailmstistComponent } from './viewretailmstist/viewretailmstist.component';



@NgModule({
  declarations: [RetailmstistComponent, AddretailmstistComponent, ViewretailmstistComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RetailmstistRoutingModule
  ]
})
export class RetailmstistModule { }
