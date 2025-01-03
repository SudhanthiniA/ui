import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottlingindentComponent } from './bottlingindent.component';
import { BottlingindentdetailComponent } from './bottlingindentdetail/bottlingindentdetail.component';
import { ApprovalmatrixComponent } from './approvalmatrix/approvalmatrix.component';
import { ApprovalmatrixindentlistComponent } from './approvalmatrixindentlist/approvalmatrixindentlist.component';

const routes: Routes = [
  {
    path : 'list',
    component: BottlingindentComponent
  },
  {
    path: 'view/:id',
    component: BottlingindentdetailComponent
  },
  {
    path: 'approve/:id',
    component: ApprovalmatrixComponent
  },
  {
    path: 'approvelist/:id',
    component: ApprovalmatrixindentlistComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingindentRoutingModule { }
