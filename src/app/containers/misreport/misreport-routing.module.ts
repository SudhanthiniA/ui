import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
   {
    path: 'revenuemgnt',
    loadChildren: () => import('./revenuemgnt/revenuemgnt.module').then(m => m.RevenuemgntModule)
  },
  {
    path: 'transportpass',
    loadChildren: () => import('./transportpass/transportpass.module').then(m => m.TransportpasstModule)
  },
  {
    path: 'usefulpublicservice',
    loadChildren: () => import('./usefulpublicservice/usefulpublicservice.module').then(m => m.UsefulpublicserviceModule)
  },
  {
    path: 'receiptack',
    loadChildren: () => import('./receiptack/receiptack.module').then(m => m.ReceiptackModule)
  },
  {
    path: 'prodispatchreport',
    loadChildren: () => import('./prodispatchreport/prodispatchreport.module').then(m => m.ProdispatchreportModule)
  },
  {
    path: 'impexppermitreport',
    loadChildren: () => import('./impexppermitreport/impexppermitreport.module').then(m => m.ImpexppermitreportModule)
  },
  {
    path: 'beerliftingcomparison',
    loadChildren: () => import('./beerliftingcompare/beerliftingcompare.module').then(m => m.BeerliftingcompareModule)
  },
  {
    path: 'chemicalexamination',
    loadChildren: () => import('./chemicalexamination/chemicalexamination.module').then(m => m.ChemicalexaminationModule)
    
  },
  {
    path: 'wholesale',
    loadChildren: () => import('./wholesale/wholesale.module').then(m => m.WholesaleModule)
    
  },
  
  {
    path: 'licensereport',
    loadChildren: () => import('./licensereport/licensereport.module').then(m => m.LicensereportModule)
  },
  {
    path: 'rawmaterial',
    loadChildren: () => import('./rawmaterial/rawmaterial.module').then(m => m.RawmaterialModule)
    
  },
  {
    path: 'wholesaleindent',
    loadChildren: () => import('./wholesaleindent/wholesaleindent.module').then(m => m.WholesaleindentModule)
    
  },
  {
    path: 'import',
    loadChildren: () => import('./import/import.module').then(m => m.ImportModule)
    
  },
  {
    path: 'export',
    loadChildren: () => import('./export/export.module').then(m => m.ExportModule)
    
  },
  {
    path: 'spirit',
    loadChildren: () => import('./spirit/spirit.module').then(m => m.SpiritModule)
  },
  {
    path: 'retail',
    loadChildren: () => import('./retail/retail.module').then(m => m.RetailModule)
  },
  {
    path: 'usefulpublicservice',
    loadChildren: () => import('./usefulpublicservice/usefulpublicservice.module').then(m => m.UsefulpublicserviceModule)
    
  },
  {
    path: 'molasses',
    loadChildren: () => import('./molasses/molasses.module').then(m => m.MolassesModule)
    
  },
  {
    path: 'registrationreport',
    loadChildren: () => import('./registrationreport/registrationreport.module').then(m => m.RegistrationreportModule)
    
  },
  {
    path: 'productionunit',
    loadChildren: () => import('./productionunit/productionunit.module').then(m => m.ProductionunitModule)
    
  },
  {
    path: 'financialmis',
    loadChildren: () => import('./financialmis/financialmis.module').then(m => m.FinancialmisModule)
    
  },
  {
    path: 'brewery',
    loadChildren: () => import('./brewery/brewery.module').then(m => m.BreweryModule)
    
  },
  {
    path: 'retailtoretailtransfer',
    loadChildren: () => import('./retailtoretailtransfer/retailtoretailtransfer.module').then(m => m.RetailtoretailtransferModule)
    
  }
]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisreportRoutingModule { }    
