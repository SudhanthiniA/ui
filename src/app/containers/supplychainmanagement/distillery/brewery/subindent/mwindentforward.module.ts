import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MwindentforwardRoutingModule } from './mwindentforward-routing.module';
import { MwindentforwardComponent } from './mwindentforward.component';
import { AddmwindentforwardComponent } from './addmwindentforward/addmwindentforward.component';
import { ViewmwindentforwardComponent } from './viewmwindentforward/viewmwindentforward.component';
import { MwsubindentComponent } from './mwsubindent/mwsubindent.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [MwindentforwardComponent, AddmwindentforwardComponent, ViewmwindentforwardComponent, MwsubindentComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    MwindentforwardRoutingModule
  ]
})
export class MwindentforwardModule { }
