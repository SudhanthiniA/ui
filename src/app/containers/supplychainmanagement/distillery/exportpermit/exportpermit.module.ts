import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AddexportpermitComponent } from './addexportpermit/addexportpermit.component';
import { ViewexportpermitComponent } from './viewexportpermit/viewexportpermit.component';
import { ExportpermitRoutingModule } from './exportpermit-routing.module';
import { ExportpermitComponent } from './exportpermit.component';

@NgModule({
  declarations: [ExportpermitComponent, AddexportpermitComponent, ViewexportpermitComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    ExportpermitRoutingModule
  ]
})
export class ExportpermitModule { }
