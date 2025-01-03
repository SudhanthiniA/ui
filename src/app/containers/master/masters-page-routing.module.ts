import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  

  {
    path: 'brand',
    loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'g6code',
    loadChildren: () => import('./g6code/g6code.module').then(m => m.G6codeModule)
  },
  {
    path: 'csdtypemaster',
    loadChildren: () => import('./csdtypemaster/csdtype.module').then(m => m.CategoryModule)
  },
  {
    path: 'accidenttype',
    loadChildren: () => import('./accidenttype/csdtype.module').then(m => m.CategoryModule)
  },
  {
    path: 'transportmode',
    loadChildren: () => import('./transportmode/transportmode.module').then(m => m.TransportmodeModule)
  },
  {
    path: 'supplytype',
    loadChildren: () => import('./supplytype/supplytype.module').then(m => m.SupplytypeModule)
  },
  {
    path: 'damagetype',
    loadChildren: () => import('./damagetype/damagetype.module').then(m => m.DamagetypeModule)
  },
  {
    path: 'entity',
    loadChildren: () => import('./entity/entity.module').then(m => m.EntityModule)
  },
  {
    path: 'entity-fees-penality',
    loadChildren: () => import('./entity-fees-penality/entity.module').then(m => m.EntityModule)
  },
  {
    path: 'fees-penality-type',
    loadChildren: () => import('./fees-penality-type/entity.module').then(m => m.FeesentityModule)
  },
  {
    path: 'liquor',
    loadChildren: () => import('./liquormaster/liquormaster.module').then(m => m.LiquormasterModule)
  },
  {
    path: 'brandmaster',
    loadChildren: () => import('./brandmaster/brandmaster.module').then(m => m.BrandmasterModule)
  },
  {
    path: 'ingrediantmaster',
    loadChildren: () => import('./ingredientmaster/ingredientmaster.module').then(m => m.IngredientmasterModule)
  },
  {
    path: 'licencetype',
    loadChildren: () => import('./licencetype/licencetype.module').then(m => m.LicencetypeModule)
  },
  {
    path: 'district',
    loadChildren: () => import('./districtmaster/districtmaster.module').then(m => m.DistrictmasterModule)
  },

  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'licencemaster',
    loadChildren: () => import('./licencemaster/licencemaster.module').then(m => m.LicencemasterModule)
  },
  {
    path: 'licensee',
    loadChildren: () => import('./licensee/licensee.module').then(m => m.LicenseeModule)
  },
  {
    path: 'feemaster',
    loadChildren: () => import('./feemaster/feemaster.module').then(m => m.FeemasterModule)
  },
  {
    path: 'liquortype',
    loadChildren: () => import('./liquortype/liquortype.module').then(m => m.LiquortypeModule)
  },
  {
    path: 'lablemaster',
    loadChildren: () => import('./lablemaster/lablemaster.module').then(m => m.LablemasterModule)
  },
  {
    path: 'cencusdataofdistricts',
    loadChildren: () => import('./cencusdataofdistricts/cencusdataofdistricts.module').then(m => m.CencusdataofdistrictsModule)
  },
  {
    path: 'vehiclemake',
    loadChildren: () => import('./vehicle/vehiclemake/vehiclemake.module').then(m => m.VehiclemakeModule)
  },
  {
    path: 'vehiclemodel',
    loadChildren: () => import('./vehicle/vehiclemodel/vehiclemodel.module').then(m => m.VehiclemodelModule)
  },
  {
    path: 'penaltymaster',
    loadChildren: () => import('./penaltymaster/penaltymaster.module').then(m => m.PenaltymasterModule)
  },
  {
    path: 'product-type',
    loadChildren: () => import('./product-type/product-type.module').then(m => m.ProductTypeModule)
  },
  {
    path: 'transfer-mode',
    loadChildren: () => import('./transfer-mode/transfer-mode.module').then(m => m.TransferModeModule)
  },
  {
    path: 'supplytype',
    loadChildren: () => import('./supllytype/supllytype.module').then(m => m.SupllytypeModule)
  },
  {
    path: 'routemaster',
    loadChildren: () => import('./routemaster/routemaster.module').then(m => m.RoutemasterModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then(m => m.StatusModule)
  },
  {
    path: 'tanktype',
    loadChildren: () => import('./tanktype/tanktype.module').then(m => m.TanktypeModule)
  },
  {
    path: 'year',
    loadChildren: () => import('./year/year.module').then(m => m.YearModule)
  },
  {
    path: 'molasses-type',
    loadChildren: () => import('./molasses-type/molasses-type.module').then(m => m.MolassesTypeModule)
  },
  {
    path: 'verification-type',
    loadChildren: () => import('./verification-type/verification-type.module').then(m => m.VerificationTypeModule)
  },
  {
    path: 'consuption-type',
    loadChildren: () => import('./consuption-type/consuption-type.module').then(m => m.ConsuptionTypeModule)
  },
  {
    path: 'domain',
    loadChildren: () => import('./domain/domain.module').then(m => m.DomainModule)
  },
  {
    path: 'packagetype',
    loadChildren: () => import('./packagetype/packagetype.module').then(m => m.PackagetypeModule)
  },
  {
    path: 'packagesize',
    loadChildren: () => import('./packagesize/packagetype.module').then(m => m.PackagetypeModule)
  },
  {
    path: 'modeofpay',
    loadChildren: () => import('./modeofpay/modeofpay.module').then(m => m.ModeofpayModule)
  },
  {
    path: 'typeofdiscrepancy',
    loadChildren: () => import('./typeofdiscrepancy/typeofdiscrepancy.module').then(m => m.TypeofdiscrepancyModule)
  },
  {
    path: 'modeofcomplaint',
    loadChildren: () => import('./modeofcomplaint/modeofcomplaint.module').then(m => m.ModeofcomplaintModule)
  },

  {
    path: 'revenue',
    loadChildren: () => import('./revenue/revenue.module').then(m => m.RevenueModule)
  },
  {
    path: 'stage',
    loadChildren: () => import('./stage/stage.module').then(m => m.StageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then(m => m.GenderModule)
  },
  {
    path: 'applicationtype',
    loadChildren: () => import('./applicationtype/applicationtype.module').then(m => m.ApplicationtypeModule)
  },
  {
    path: 'applicationstatus',
    loadChildren: () => import('./applicationstatus/applicationstatus.module').then(m => m.ApplicationstatusModule)
  },
  {
    path: 'measurement',
    loadChildren: () => import('./measurement/measurement.module').then(m => m.MeasurementModule)
  },
  {
    path: 'rawmaterial',
    loadChildren: () => import('./rawmaterial/rawmaterial.module').then(m => m.RawmaterialModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
  },
  {
    path: 'licencecategory',
    loadChildren: () => import('./licencecategory/licencecategory.module').then(m => m.LicencecategoryModule)
  },
  {
    path: 'cartons',
    loadChildren: () => import('./cartens/cartens.module').then(m => m.CartensModule)
  },
  {
    path: 'strength',
    loadChildren: () => import('./strength/strength.module').then(m => m.StrengthModule)
  },
  {
    path: 'liquourtype',
    loadChildren: () => import('./liquortype/liquortype.module').then(m => m.LiquortypeModule)
  },

  {
    path: 'spirit-type',
    loadChildren: () => import('./spirit-type/spirit-type.module').then(m => m.SpiritTypeModule)
  },
  {
    path: 'dip',
    loadChildren: () => import('./dip/dip.module').then(m => m.DipModule)
  },
  {
    path: 'tankshape',
    loadChildren: () => import('./tank-shape/tank-shape.module').then(m => m.TankShapeModule)
  },
  {
    path: 'salutation',
    loadChildren: () => import('./salutation/supllytype.module').then(m => m.SupllytypeModule)
  },
  {
    path: 'tankmaterial',
    loadChildren: () => import('./tank-material/tank-material.module').then(m => m.TankMaterialModule)
  },
  {
    path: 'tankcovertype',
    loadChildren: () => import('./tank-cover-type/tank-cover-type.module').then(m => m.TankCoverTypeModule)
  },
  {
    path: 'licensetemplateupload',
    loadChildren: () => import('./licensetemplateupload/licensetemplateupload.module').then(m => m.LicensetemplateuploadModule)
  },
  {
    path: 'workflowconfig', loadChildren: () => import('./workflowconfiguration/workflowconfiguration.module').then(m => m.WorkflowconfigurationModule)
  },
  {
    path: 'etingenerate', loadChildren: () => import('./etingenration/etingenration.module').then(m => m.EtingenrationModule)
  },
  {
    path: 'division',
    loadChildren: () => import('./division/division.module').then(m => m.DivisionModule)
  },
  {
    path: 'feetype',
    loadChildren: () => import('./feetype/feetype.module').then(m => m.FeetypeModule)
  },
  {
    path: 'headcode',
    loadChildren: () => import('./headcode/headcode.module').then(m => m.HeadcodeModule)
  },
  {
    path: 'treasury',
    loadChildren: () => import('./treasury/treasury.module').then(m => m.TreasuryModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then(m => m.DescriptionModule)
  },
  {
    path: 'subliquortype',
    loadChildren: () => import('./sub-liquortype/sub-liquortype.module').then(m => m.SubLiquortypeModule)
  },
  {
    path: 'dropdownconfiguration',
    loadChildren: () => import('./masterdropdownconfiguration/masterdropdownconfiguration.module')
      .then(m => m.MasterDropdownConfigurationModule)
  },
  {
    path: 'mappingconfiguration',
    loadChildren: () => import('./relation-configuration/relation-configuration.module')
      .then(m => m.RelationConfigurationModule)
  },
  {
    path: 'casesize',
    loadChildren: () => import('./casesize/casesize.module').then(m => m.CasesizeModule)
  },
  {
    path: 'liquorsubtype',
    loadChildren: () => import('./liquorsubtype/liquorsubtype.module').then(m => m.LiquorsubtypeModule)
  },
  {
    path: 'paymenttype',
    loadChildren: () => import('./paymenttype/paymenttype.module').then(m => m.PaymenttypeModule)
  },
  {
    path: 'goodstypemaster',
    loadChildren: () => import('./goodstypemaster/goodstypemaster.module').then(m => m.GoodstypemasterModule)
  },
  {
    path: 'goodssubcatmaster',
    loadChildren: () => import('./goodssubcatmaster/goodssubcatmaster.module').then(m => m.GoodssubcatmasterModule)
  },
  {
    path: 'stateofmattermaster',
    loadChildren: () => import('./stateofmattermaster/stateofmattermaster.module').then(m => m.StateofmattermasterModule)
  },
  {
    path: 'stocktype',
    loadChildren: () => import('./stocktype/stocktype.module').then(m => m.StocktypeModule)
  },
  {
    path: 'maintenancetypemaster',
    loadChildren: () => import('./maintenancetypemaster/maintenancetypemaster.module').then(m => m.MaintenancetypemasterModule)
  },
  {
    path: 'repairtypemaster',
    loadChildren: () => import('./repairtypemaster/repairtypemaster.module').then(m => m.RepairtypemasterModule)
  },
  {
    path: 'groupmaster',
    loadChildren: () => import('./groupmaster/groupmaster.module').then(m => m.GroupmasterModule)
  },
  {
    path: 'tankcategory',
    loadChildren: () => import('./tankcategory/tankcategory.module').then(m => m.TankcategoryModule)
  },
  {
    path: 'tankusage',
    loadChildren: () => import('./tank-usage/tank-usage.module').then(m => m.TankUsageModule)
  }, 
  {
    path: 'modulemaster',
    loadChildren: () => import('./modulemaster/modulemaster.module').then(m => m.ModulemasterModule)
  }, 
  {
    path: 'frequencymaster',
    loadChildren: () => import('./frequencymaster/frequencymaster.module').then(m => m.FrequencymasterModule)
  }, 
  {
    path: 'subfeesapplicable',
    loadChildren: () => import('./subfeesapplicable/subfeesapplicable.module').then(m => m.SubfeesapplicableModule)
  },
  {
    path: 'quotatimeline',
    loadChildren: () => import('./quotatimeline/quotatimeline.module').then(m => m.QuotatimelineModule)
  },
  {
    path: 'level',
    loadChildren: () => import('./level/level.module').then(m => m.LevelModule)
  },
  {
    path: 'entitytype',
    loadChildren: () => import('./entitytype/entitytype.module').then(m => m.EntitytypeModule)
  },
  {
    path: 'designation',
    loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule)
  }, 
  {
     path: 'bank',    loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)  
  },
  { 
     path: 'sector',    loadChildren: () => import('./sector/sector.module').then(m => m.SectorModule) 
  }, 
  {
    path: 'ownership',
    loadChildren: () => import('./ownership/ownership.module').then(m => m.OwnershipModule)
  },
  {
    path: 'itr',
    loadChildren: () => import('./itr/itr.module').then(m => m.ItrModule)
  },
  {
    path: 'retailshopid',
    loadChildren: () => import('./retailshopid/retailshopid.module').then(m => m.RetailshopidModule)
  },
  {
    path: 'liquordetaildesc',
    loadChildren: () => import('./liquordetaildesc/liquordetaildesc.module').then(m => m.LiquordetaildescModule)
  },
  {
    path: 'liquorsupplytype',
    loadChildren: () => import('./liquorsupplytype/liquorsupplytype.module').then(m => m.LiquorsupplytypeModule)
  },
  {
    path: 'codetype',
    loadChildren: () => import('./codetype/codetype.module').then(m => m.CodetypeModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./checklist/checklist.module').then(m => m.ChecklistModule)
  },
  {
    path: 'licensetenure',
    loadChildren: () => import('./licensetenure/licensetenure.module').then(m => m.LicensetenureModule)
  },
  {
    path: 'licensefunctionalyear',
    loadChildren: () => import('./licensefunctionalyear/licensefunctionalyear.module').then(m => m.LicensefunctionalyearModule)
  },
  {
    path: 'rangemaster',
    loadChildren: () => import('./rangemaster/rangemaster.module').then(m => m.RangemasterModule)
  },
  {
    path: 'issuetype',
    loadChildren: () => import('./issuetype/issuetype.module').then(m => m.IssuetypeModule)
  } ,
  {
    path: 'productstate',
    loadChildren: () => import('./productstate/productstate.module').then(m => m.ProductstateModule)
  },
  {
    path: 'transportpasstype',
    loadChildren: () => import('./transportpasstype/transportpasstype.module').then(m => m.TransportpasstypeModule)
  },
  {
    path: 'distillerytype',
    loadChildren: () => import('./distillerytype/distillerytype.module').then(m => m.DistillerytypeModule)
  },
  {
    path: 'stockinform',
    loadChildren: () => import('./stockinform/stockinform.module').then(m => m.StockinformModule)
  },
  {
    path: 'exportto',
    loadChildren: () => import('./exportto/exportto.module').then(m => m.ExporttoModule)
  },
  {
    path: 'damagemaster',
    loadChildren: () => import('./damagemaster/damagemaster.module').then(m => m.DamagemasterModule)
  },
  {
    path: 'edpcategory',
    loadChildren: () => import('./edpcategory/edpcategory.module').then(m => m.EdpcategoryModule)
  },
  {
    path: 'shelflife',
    loadChildren: () => import('./shelflife/shelflife.module').then(m => m.ShelflifeModule)
  },
  {
    path: 'bottlingline',
    loadChildren: () => import('./bottlingtype/bottlingtype.module').then(m => m.BottlingtypeModule)
  },
  {
    path: 'municipalarea',
    loadChildren: () => import('./municipalarea/municipalarea.module').then(m => m.MunicipalareaModule)
  },   
  {
    path: 'block',
    loadChildren: () => import('./block/block.module').then(m => m.BlockModule)
  },   
  {
    path: 'village',
    loadChildren: () => import('./village/village.module').then(m => m.VillageModule)
  },   
  {
    path: 'policestation',
    loadChildren: () => import('./policestation/policestation.module').then(m => m.PolicestationModule)
  },
  {
    path: 'stockactivity',
    loadChildren: () => import('./stockactivity/stockactivity.module').then(m => m.StockactivityModule)
  },
  {
    path: 'premisestype',
    loadChildren: () => import('./premisestype/premisestype.module').then(m => m.PremisestypeModule)
  },
  {
    path: 'renewaltimeline',
    loadChildren: () => import('./renewaltimeline/renewaltimeline.module').then(m => m.RenewaltimelineModule)
  },
  {
    path: 'routetype',
    loadChildren: () => import('./routetype/routetype.module').then(m => m.RoutetypeModule)
  },
  {               
    path: 'feepenalitysubtype',
    loadChildren: () => import('./feepenalitysubtype/feepenalitysubtype.module').then(m => m.FeepenalitysubtypeModule)
  },
  {
    path: 'testtype',
    loadChildren: () => import('./testtype/testtype.module').then(m => m.TesttypeModule)
  },
  {
    path: 'wastagetype',
    loadChildren: () => import('./wastagetype/wastagetype.module').then(m => m.WastagetypeModule)
  },
  {
    path: 'urbanrural',
    loadChildren: () => import('./urbanrural/urbanrural.module').then(m => m.UrbanruralModule)
  },
  {
    path: 'tehsil',
    loadChildren: () => import('./tehsil/tehsil.module').then(m => m.TehsilModule)
  },
  {
    path: 'municipalareacategory',
    loadChildren: () => import('./municipalareacategory/municipalareacategory.module').then(m => m.MunicipalareacategoryModule)
  },
  {
    path: 'labname',
    loadChildren: () => import('./labname/labname.module').then(m => m.LabnameModule)
  },
  {
    path: 'retailshoptype',
    loadChildren: () => import('./retailshoptype/retailshoptype.module').then(m => m.RetailshoptypeModule)
  },
  {
    path: 'testproducttype',
    loadChildren: () => import('./testproducttype/testproducttype.module').then(m => m.TestproducttypeModule)
  },
  {
    path: 'testproduct',
    loadChildren: () => import('./testproduct/testproduct.module').then(m => m.TestproductModule)
  },
  {
    path: 'usedforrawmaterial',
    loadChildren: () => import('./usedforrawmaterialtanktype/usedforrawmaterialtanktype.module').then(m => m.UsedforrawmaterialtanktypeModule)
  },
  {
    path: 'expirytype',
    loadChildren: () => import('./expirytype/expirytype.module').then(m => m.ExpirytypeModule)
  },
  {
    path: 'zone',
    loadChildren: () => import('./zone/zone.module').then(m => m.ZoneModule)
  },
  {
    path: 'workflow',
    loadChildren: () => import('./workflow/workflow.module').then(m => m.WorkflowModule)
  },
  {
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule)
  },
  {
    path: 'buttonmaster',
    loadChildren: () => import('./buttonmaster/buttonmaster.module').then(m => m.ButtonmasterModule)
  },
  {
    path: 'districtmap',
    loadChildren: () => import('./districtmap/districtmap.module').then(m => m.DistrictmapModule)
  },
  {
    path: 'routemap',
    loadChildren: () => import('./routemap/routemap.module').then(m => m.RoutemapModule)
  },
  {
    path: 'workflowconfigscm', loadChildren: () => import('./workflowconfigurationscm/workflowconfigurationscm.module').then(m => m.WorkflowconfigurationscmModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPageRoutingModule { }
