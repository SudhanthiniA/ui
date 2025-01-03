import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportpermitTpAckComponent } from './exportpermit-tp-ack.component';
// import { AddexportpermitComponent } from './addexportpermit/addexportpermit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { 
    path: 'list',
     component: ExportpermitTpAckComponent 
    },
    // { 
    //   path: 'add',
    //    component: AddexportpermitComponent 
    //   },
  {
    path: 'view',
    component: ViewComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportpermitTpAckRoutingModule { }
