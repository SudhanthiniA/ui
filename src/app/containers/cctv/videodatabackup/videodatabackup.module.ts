import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { VideodatabackupRoutingModule } from './videodatabackup-routing.module';
import { VideodatabackupComponent } from './videodatabackup.component';
import { AddvideodatabackupComponent } from './addvideodatabackup/addvideodatabackup.component';
import { ViewvideodatabackupComponent } from './viewvideodatabackup/viewvideodatabackup.component';



@NgModule({
  declarations: [VideodatabackupComponent, AddvideodatabackupComponent, ViewvideodatabackupComponent],
  imports: [
    CommonModule,
    SharedModule,
    VideodatabackupRoutingModule
  ]
})
export class VideodatabackupModule { }
