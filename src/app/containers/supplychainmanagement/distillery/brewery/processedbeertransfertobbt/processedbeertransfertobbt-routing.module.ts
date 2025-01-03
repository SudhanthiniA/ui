
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessedbeertransfertobbtComponent } from './processedbeertransfertobbt.component';
import { AddprocessedbeertransfertobbtComponent } from './addprocessedbeertransfertobbt/addprocessedbeertransfertobbt.component';
import { ViewprocessedbeertransfertobbtComponent } from './viewprocessedbeertransfertobbt/viewprocessedbeertransfertobbt.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddprocessedbeertransfertobbtComponent
  },
  {
    path : 'view',
    component : ViewprocessedbeertransfertobbtComponent
  },
  {
    path : 'list',
    component : ProcessedbeertransfertobbtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessedbeertransfertobbtRoutingModule { }
