import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndentforblendComponent } from './indentforblend.component';
import { AddindentforblendComponent } from './addindentforblend/addindentforblend.component';
import { ViewindentforblendComponent } from './viewindentforblend/viewindentforblend.component';
import { ApprovalindentComponent } from './approvalindent/approvalindent.component';


const routes: Routes = [

  {
    path : 'list',
    component : IndentforblendComponent
  },
  {
    path: 'view/:Id',
    component : ViewindentforblendComponent
  },
  {
    path: 'preview',
    component : ViewindentforblendComponent
  },
  {
    path : 'add',
    component : AddindentforblendComponent
  },
  {
    path : 'edit/:Id',
    component : AddindentforblendComponent
  },
  {
    path : 'approval',
    component : ApprovalindentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentforblendRoutingModule { }
