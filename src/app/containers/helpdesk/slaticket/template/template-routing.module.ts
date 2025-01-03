import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'list', component: TemplateComponent },
  { path: 'add', component: AddComponent  },
  { path: 'add/:Id', component: AddComponent  },
  { path: 'view/:Id', component: ViewComponent  },
  { path: 'dashboard', component: DashboardComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
