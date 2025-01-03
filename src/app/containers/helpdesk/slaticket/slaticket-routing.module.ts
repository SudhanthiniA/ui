import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'rule', 
    loadChildren: () => import('./rule/rule.module').then(m => m.RuleModule) 
  },
  {
  path: 'template', 
    loadChildren: () => import ('./template/template.module').then(m => m.TemplateModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaticketRoutingModule { }
