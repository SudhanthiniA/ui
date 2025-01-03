import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, MasterapiService, Pd9arawmetirialService,TankTypeService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-addedit-pd9a',
  templateUrl: './addedit-pd9a.component.html',
  styleUrls: ['./addedit-pd9a.component.scss']
})
export class AddeditPd9aComponent implements OnInit {
  @ViewChild('tabset', { static: true }) tabset: any;
  popupFlag: boolean;
  pd9arawmaterialObj: any = {};
  pd9asectionII:any={};
  pd9asectionIII:any={};
  pd9asectionIV:any={};
  pd9asectionV:any={};
  receiverno: any;
  addedit: any;
  tanktypeListData:any;
  refno:any;
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  productionPd9Id:any;
  sectionname:any;
  sectionI:boolean=false;
  sectionIid:any;
  savesectionidII:any;
  savesctionidIII:any;
  savesectionidIV:any
  flag:boolean = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private pd9arwserv: Pd9arawmetirialService,
    private tanktypesrv:TankTypeService
  ) { 
    
  }

  ngOnInit() {
    this.getreferenceNo();
    this.gettanks();
    this.route.params.subscribe(params => {
      if (params.id) {
        // this.getRwamaterial(params.id);
        this.pd9arawmaterialObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      } else {
        // this.getRwamaterial();
      }
    });
    this.geReceiverNo();
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;
  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false&& status === 2) {
      this.formSubmitted = true;
    } else {
      console.log("test test")
      this.popupFlag = true;
      let el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }
  // saveData(status) {
  //   this.formSubmitted = false;
  //   if (status === 2) {
  //     this.formSubmitted = true;
  //   } else {

  //     if (this.editId) {
  //       let payload ={
  //         id:this.editId,
  //         alcoholWashPercent: this.pd9arawmaterialObj.alcoholPercentage,
  //         alcoholicLtrs: this.pd9arawmaterialObj.alcoholicLtrs,
  //         bulkLtrs: this.pd9arawmaterialObj.bulkLtrs,
  //         dip: this.pd9arawmaterialObj.dip,
  //         finalGravity: this.pd9arawmaterialObj.finalGravity,
  //         fromDate: this.pd9arawmaterialObj.fromDate,
  //         gravityI: this.pd9arawmaterialObj.gravityOne,
  //         gravityII: this.pd9arawmaterialObj.gravityTwo,
  //         gravityIII: this.pd9arawmaterialObj.gravityThree,
  //         gravityIV: this.pd9arawmaterialObj.gravityFour,
  //         gravityV: this.pd9arawmaterialObj.gravityFive,
  //         gravityVI: this.pd9arawmaterialObj.gravitySix,
  //         impureSpirit: this.pd9arawmaterialObj.impureSpirit,
  //         indication: this.pd9arawmaterialObj.indication,
  //         molassesUsed: this.pd9arawmaterialObj.molassesUsed,
  //         passedDate: this.pd9arawmaterialObj.dateOfPassed,
  //         productionPd9Id:this.productionPd9Id,
  //         qtlsMolasses:this.pd9arawmaterialObj.almolasses,
  //         receiverNum: this.pd9arawmaterialObj.receiverNo,
  //         rectifiedSpirit: this.pd9arawmaterialObj.rectifiedSpirit,
  //         status: status,
  //         strength:this.pd9arawmaterialObj.strength,
  //         temperature: this.pd9arawmaterialObj.tempratureC,
  //         toDate: this.pd9arawmaterialObj.toDate,
  //         totalWashDistilled: this.pd9arawmaterialObj.totalWashDistilled,
  //         usedFsPercent: this.pd9arawmaterialObj.fsMolasses,
  //         usedTrsPercent: this.pd9arawmaterialObj.molassesUsed,
  //       }
  //       this.pd9arwserv.updatepd9adata(payload).subscribe(responceData => {
  //         if (responceData['status'] == 's') {
  //           this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
  //           sessionStorage.removeItem('pd9arawmaterial');
  //           this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
  //             } else {
  //           this.alert.showError(responceData['userDisplayMesg'], 'error')
  //         }
  //       });
  //     } else {

  //       console.log('pd9a data -->>',this.pd9arawmaterialObj);

  //       let payload ={
  //         alcoholWashPercent: this.pd9arawmaterialObj.alcoholPercentage,
  //         alcoholicLtrs: this.pd9arawmaterialObj.alcoholicLtrs,
  //         bulkLtrs: this.pd9arawmaterialObj.bulkLtrs,
  //         dip: this.pd9arawmaterialObj.dip,
  //         finalGravity: this.pd9arawmaterialObj.finalGravity,
  //         fromDate: this.pd9arawmaterialObj.fromDate,
  //         gravityI: this.pd9arawmaterialObj.gravityOne,
  //         gravityII: this.pd9arawmaterialObj.gravityTwo,
  //         gravityIII: this.pd9arawmaterialObj.gravityThree,
  //         gravityIV: this.pd9arawmaterialObj.gravityFour,
  //         gravityV: this.pd9arawmaterialObj.gravityFive,
  //         gravityVI: this.pd9arawmaterialObj.gravitySix,
  //         impureSpirit: this.pd9arawmaterialObj.impureSpirit,
  //         indication: this.pd9arawmaterialObj.indication,
  //         molassesUsed: this.pd9arawmaterialObj.molassesUsed,
  //         passedDate: this.pd9arawmaterialObj.dateOfPassed,
  //         productionPd9Id:this.pd9arawmaterialObj.referenceno,
  //         qtlsMolasses:this.pd9arawmaterialObj.almolasses,
  //         receiverNum: this.pd9arawmaterialObj.receiverNo,
  //         rectifiedSpirit: this.pd9arawmaterialObj.rectifiedSpirit,
  //         status: status,
  //         strength:this.pd9arawmaterialObj.strength,
  //         temperature: this.pd9arawmaterialObj.tempratureC,
  //         toDate: this.pd9arawmaterialObj.toDate,
  //         totalWashDistilled: this.pd9arawmaterialObj.totalWashDistilled,
  //         usedFsPercent: this.pd9arawmaterialObj.fsMolasses,
  //         usedTrsPercent: this.pd9arawmaterialObj.molassesUsed,
  //       }
      
  //       this.pd9arwserv.addpd9adata(payload).subscribe(responceData => {
  //         if (responceData['status'] == 's') {
  //           this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
  //           sessionStorage.removeItem('pd9arawmaterial');
  //           this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
  //             } else {
  //           this.alert.showError(responceData['userDisplayMesg'], 'error')
  //         }
        
  //       });
  //     }
  //   }
  // }

  // getRwamaterial(id?) {
  //   if (id) {
  //     this.pd9arwserv.getpd9abyid(id).subscribe(responceData => {
  //       this.pd9arawmaterialObj = responceData['data'];
  //       this.pd9arawmaterialObj.fromDate = this.datePipe.transform(responceData['data'].fromDate, 'yyyy-MM-ddThh:mm');
  //       this.pd9arawmaterialObj.toDate =this.datePipe.transform( responceData['data'].toDate, 'yyyy-MM-ddThh:mm');
  //       this.pd9arawmaterialObj.trsMolasses = responceData['data'].usedTrsPercent;
  //       this.pd9arawmaterialObj.fsMolasses = responceData['data'].usedFsPercent;
  //       this.pd9arawmaterialObj.gravityOne = responceData['data'].gravityI;
  //       this.pd9arawmaterialObj.gravityTwo = responceData['data'].gravityII;
  //       this.pd9arawmaterialObj.gravityThree = responceData['data'].gravityIII;
  //       this.pd9arawmaterialObj.gravityFour = responceData['data'].gravityIV;
  //       this.pd9arawmaterialObj.gravityFive = responceData['data'].gravityV;
  //       this.pd9arawmaterialObj.gravitySix = responceData['data'].gravityVI;
  //       this.pd9arawmaterialObj.dateOfPassed = this.datePipe.transform(responceData['data'].passedDate, 'yyyy-MM-dd');
  //       this.pd9arawmaterialObj.almolasses = responceData['data'].qtlsMolasses;
  //       this.pd9arawmaterialObj.receiverNo = responceData['data'].receiverNum;
  //       this.pd9arawmaterialObj.tempratureC = responceData['data'].temperature;
  //       this.pd9arawmaterialObj.alcoholPercentage = responceData['data'].alcoholWashPercent;
  //       this.productionPd9Id = responceData['data'].productionPd9Id;
  //     });
  //   } else {
  //     this.pd9arawmaterialObj = JSON.parse(sessionStorage.getItem('pd9arawmaterial'));
  //     if (this.pd9arawmaterialObj) {
  //       this.pd9arawmaterialObj = this.pd9arawmaterialObj;
  //     } else {
  //       this.pd9arawmaterialObj = {};
  //     }
  //   }
  // }

  // selectionofsectionI(){
  //  console.log('selection',);
  //  this.sectionI = true;
   
  // }
  saveData1(status,tab){
    this.tabset.select(tab);
    this.flag = false;
  }
  saveData(status,tab){

    console.log('section I data---->>>',this.pd9arawmaterialObj);
    console.log('satus-->>',status);
    let sectionI ={
      // id:this.sectionIid,
      batchNo: this.pd9arawmaterialObj.batchno,
      brixPercent: this.pd9arawmaterialObj.brixpercent,
      date: this.pd9arawmaterialObj.pd9adate,
      fermentableSugar: this.pd9arawmaterialObj.percentfermentable,
      fermentersTankNo: this.pd9arawmaterialObj.fermenterstankno,
      ph: this.pd9arawmaterialObj.ph,
      prefermentersQuantityOfFermentableSugar:this.pd9arawmaterialObj.performerquantityoffermentablesugar,
      prefermentersQuantityOfMolassesBaseUsed: this.pd9arawmaterialObj.performerquantityofmolasesbasedused,
      quantityOfFermentable: this.pd9arawmaterialObj.quantityoffermentable,
      quantityOfFermentableSugar: this.pd9arawmaterialObj.quantityoffermentablesugarinquintal,
      quantityOfFermentableSugarFermenters: this.pd9arawmaterialObj.quantityoffermentablesugarinqutl,
      quantityOfMolassesBaseUsed: this.pd9arawmaterialObj.quantityofmolasesbaseused,
      quantityOfMolassesBaseUsedInFermenters: this.pd9arawmaterialObj.quantityoffermentable,
      reducingSugar: this.pd9arawmaterialObj.totalpercentinversugar,
      tankNo: this.pd9arawmaterialObj.tankno,
      totalQuantityOfMolassesBaseUsed: this.pd9arawmaterialObj.totalquantitymolasesbasedused,
      totalQuantityofMolassesBaseUsedInQuintals: this.pd9arawmaterialObj.totalqunatityofmolasesbaseused,
      unFermentableSugar: this.pd9arawmaterialObj.percentunfermentable,
      vesselNo: this.pd9arawmaterialObj.vesselno,  
      pd9Id:this.pd9arawmaterialObj.referenceno
      }
      this.tabset.select(tab);
      this.flag = false;
      console.log('section1 payload-->>',sectionI);
      if(this.editId){
        sectionI['id']= this.editId;
        this.pd9arwserv.updatesectionI(sectionI).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.tabset.select(tab);
            this.flag = false;
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem('pd9arawmaterial');
            // this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });

      }else{
        this.pd9arwserv.createsectionI(sectionI).subscribe(responceData => {
          this.sectionIid=responceData['data'].id;
          if (responceData['status'] == 's') {
            this.tabset.select(tab);
            this.flag = false;
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }    
  }
  savesectionII(status,tab){

    console.log('sectionII payload-->>',this.pd9asectionII);
    
     let sectionII ={
        id:this.sectionIid,
        alcoholLosswithSludge : this.pd9asectionII.alcohollosswithsludge,
        alcoholPresentInWash: this.pd9asectionII.alcoholpresentinwash,
        alcoholcontent: this.pd9asectionII.alcoholcontentltr,
        alcoholpercentintheWashBy: this.pd9asectionII.alcoholpercentinwashbydistillation,
        attenuationFigures: this.pd9asectionII.attenuationfigure,
        batchNo1: this.pd9asectionII.batchno,
        date0: this.pd9asectionII.dateofpd9a,
        date1: this.pd9asectionII.pd9atime,
        date2: this.pd9asectionII.pd9date,
        dip:this.pd9asectionII.dip,
        dueToUnFermentableFermentableSugarintheWash:this.pd9asectionII.duetounfermentablefermentablesugarinwash,
        durationOfFermentation:this.pd9asectionII.durationoffermentation,
        fermatationLoss: this.pd9asectionII.fermatationloss,
        fermentabeinvetSugar: this.pd9asectionII.theoreticalfermentationyield,
        fermentableSugar: this.pd9asectionII.fermentablesugar,
        fermentableSugar1: this.pd9asectionII.quantityinquintalsoffermentablesugar,   /// need clearity ****
        finalGravity: this.pd9asectionII.finalgravity,
        foreachtankseparately: this.pd9asectionII.foreachtankseparately,
        initialGravity: this.pd9asectionII.initialgravity,
        phofWash: this.pd9asectionII.phofwash,
        phofWort: this.pd9asectionII.phofwort,
        quantityInBLOfWash: this.pd9asectionII.quantityinblofwash,
        quantityInBLWortToken: this.pd9asectionII.quantityinblworttoken,
        qunatityInQuintalsofMolassesBaseUsed: this.pd9asectionII.quantityinquintalsofmolasis,
        sludgeDiscarded: this.pd9asectionII.sludgediscarded,
        time: this.pd9asectionII.pd9time,
        totalFermentationEffiencyPercentCo: this.pd9asectionII.fermentationeffiencypercentcol,
        totalLosses: this.pd9asectionII.totallosses,
        totalofalltanksinthebatch: this.pd9asectionII.totalofalltanksinthebatch,
        unFermentableSugar: this.pd9asectionII.unfermentablesugar,
        unknownLosses: this.pd9asectionII.unknowlosses,
        washBackNo: this.pd9asectionII.watchbackno,
        washSenttoStills: this.pd9asectionII.washsenttostills,
        whenReady: this.pd9asectionII.whenready,
        productionStatus:status
      }
           
    if(this.editId){
      sectionII['id']= this.editId;
      this.pd9arwserv.updatesectionI(sectionII).subscribe(responceData => {
        if (responceData['status'] == 's') {
          this.tabset.select(tab);
          this.flag = false;
          this.savesectionidII = responceData['data'].id
          this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
          sessionStorage.removeItem('pd9arawmaterial');
            } else {
          this.alert.showError(responceData['userDisplayMesg'], 'error')
        }
      });

    }else{
      this.pd9arwserv.createsectionII(sectionII).subscribe(responceData => {
        if (responceData['status'] == 's') {
          this.savesectionidII = responceData['data'].id
          this.tabset.select(tab);
          this.flag = false;
          this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
          sessionStorage.removeItem('pd9arawmaterial');
          // this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
            } else {
          this.alert.showError(responceData['userDisplayMesg'], 'error')
        }
      });
    }
  }
  savesectionIII(status,tab){
    console.log('section III --->>',this.pd9asectionIII);
    let sectionIII={
          alcoholPercent: this.pd9asectionIII.overallallcoholpercent,
          col21ofSectionII: this.pd9asectionIII.colofsectionthreecol,
          dehydratedalcohol: this.pd9asectionIII.equivalentdeydratedalcohol,
          detailsBatchNo: this.pd9asectionIII.sectionthreebatchno,
          detailsWashbackNo: this.pd9asectionIII.sectionthreewashbackno,
          detailsofWashTaken: this.pd9asectionIII.detailsofwashtaken,
          distillationEfficiency: this.pd9asectionIII.distillationefficiencypercentcol,
          distillationLoss: this.pd9asectionIII.distillationlossminuscol,
          distillationTime: this.pd9asectionIII.distillationtime,
          equivalentDehydratedalcohol: this.pd9asectionIII.equivalentdeydratedalcohol,
          equivalentOtherspirit: this.pd9asectionIII.equalentotherspirit,
          equivalentPotablespirit: this.pd9asectionIII.equalentpotablesprit,
          equivalentRectifiedspirit: this.pd9asectionIII.equvalentrectifiedalocalsectionthree,
          equivalentTotal: this.pd9asectionIII.equvalenttotal,
          equivalentvolumeOtherspirit: this.pd9asectionIII.equvalentvolumeotherspirit,
          from: this.pd9asectionIII.sectionfrom,
          fuelOil: this.pd9asectionIII.fueloilin,
          fuelOilPercent: this.pd9asectionIII.fueloilpercent,
          fuelPercent: this.pd9asectionIII.overallallfuelpercen,
          id: this.savesectionidII,   /// need to get form section II
          otherSpiritQuantityInBL: this.pd9asectionIII.otherspiritquantitybl,
          otherSpiritStrength: this.pd9asectionIII.otherstrength,
          overallAlcoholPercent: this.pd9asectionIII.alcoholpercentinsectionthree,
          periodhours: this.pd9asectionIII.periodhoursmts,         /// need clearity ***********
          potableleSpirt: this.pd9asectionIII.equvalentprotablespirtit,   // need clearity ***
          potablespiritStrength: this.pd9asectionIII.potablestrength,
          potablespiritbelow50OP: this.pd9asectionIII.potablequantityinbl,
          productionQuantityInBL: this.pd9asectionIII.quantityinbl,
          productionRectifiedQuantityInBL: this.pd9asectionIII.rectifiedabovequantityinbl,
          productionRectifiedStrength: this.pd9asectionIII.rectifiedspritstrength,
          productionStatusS4: status,
          productionStrength: this.pd9asectionIII.productionstrength,
          rateOfProductionAlcophol100Percent: this.pd9asectionIII.rateofproducationalcopholpercent,
          recoveryOfAlcohol100PercentPerQuintalsOfFermentableSugar: this.pd9asectionIII.recoveryofalcoholpercentperquintals,
          recoveryOfAlcohole100PercentPerQuintalsbase: this.pd9asectionIII.recoveryofalcoholpercentperquintalsbase,
          rectifiedAlcohol: this.pd9asectionIII.equvalentrectifiedalocalsectionthree,
          spentLessPercent: this.pd9asectionIII.spentlesspercent,
          spentwashAnalysis: this.pd9asectionIII.spenctwashanalysis,
          to: this.pd9asectionIII.sectionto,
          total: this.pd9asectionIII.productionequalenttotal,
          totalLossFermentationLossPlusDistillationLoss: this.pd9asectionIII.totallossfermentationlossplus,
          totaleFermentationYield: this.pd9asectionIII.sectiontherretotalefermentationyields
        
    }
    if(this.editId){
      sectionIII['id']= this.editId;
      this.pd9arwserv.updatesectionI(sectionIII).subscribe(responceData => {
        if (responceData['status'] == 's') {
          this.savesctionidIII = responceData['data'].id
          this.tabset.select(tab);
          this.flag = false;
          this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
          sessionStorage.removeItem('pd9arawmaterial');
            } else {
          this.alert.showError(responceData['userDisplayMesg'], 'error')
        }
      });

    }else{
      this.pd9arwserv.createsectionIII(sectionIII).subscribe(responceData => {
        if (responceData['status'] == 's') {
          this.savesctionidIII = responceData['data'].id
          this.tabset.select(tab);
          this.flag = false;
          this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
          sessionStorage.removeItem('pd9arawmaterial');
          // this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
            } else {
          this.alert.showError(responceData['userDisplayMesg'], 'error')
        }
      });
    }
    }
   savesectionIV(status,tab){
     console.log('sectionIV ---->>>>',this.pd9asectionIV);
     let sectionIV={
      
      acidDehydratedAlcohol: this.pd9asectionIV.aciddehyratedalochol,
      acidPotableSpirit: this.pd9asectionIV.acidpotablespirit,
      acidRectifiedSpirit: this.pd9asectionIV.acidrectifiedspirit,
      alcoholDehydratedAlcohol: this.pd9asectionIV.alcoholdeyratedalochol,
      alcoholPotableSpirit: this.pd9asectionIV.alcoholpotablesprit,
      alcoholRectifiedSpirit: this.pd9asectionIV.rectifiedsprit,   // need clearity ***
      esthersDehydratedAlcohol: this.pd9asectionIV.esthersdehyratedalcohol, 
      esthersPotableSpirit: this.pd9asectionIV.estierpotablespirit,
      esthersRectifiedSpirit: this.pd9asectionIV.esthersrectifiedspirit,
      finalBatchNo: this.pd9asectionIV.batchnosectionfour,
      finalDate: this.pd9asectionIV.permagnatdatesectionfour,
      furturalDehydratedAlcohol: this.pd9asectionIV.furturaldehydratedalcohol,    
      furturalPotableSpirit: this.pd9asectionIV.futuralpotablespirit,
      furturalRectifiedSpirit: this.pd9asectionIV.furturalrectifiedspirit,
      higherAlcoholDehydratedAlcohol: this.pd9asectionIV.higheralcoholdehydratedalcohol,
      higherAlcoholPotableSpirit: this.pd9asectionIV.higherpotablespirit,
      higherAlcoholRectifiedSpirit: this.pd9asectionIV.higherrectifiedspirit,
      id: this.savesctionidIII,    // need cleaity
      // id:this.savesectionidII, // need to remove ****
      minutesDehydratedAlcohol:this.pd9asectionIV.permagnatedehydratedalcohol,
      minutesPotableSpirit: this.pd9asectionIV.permagnatepotablesporit,
      minutesRectifiedSpirit: this.pd9asectionIV.permagnaterectifiedspirit,
      productionStatusS3: status,  // need to change in backend
      qualityofalcoholProduced: this.pd9asectionIV.permagnatetesttimequalityofalochol, /// need clearity **
      strengthOfAlcoholDehydrated: this.pd9asectionIV.strengthofdehydratedalcohol,
      strengthOfAlcoholPotableSpirit: this.pd9asectionIV.strengthofpotablespirit,
      strengthOfAlcoholRectifiedSpirit: this.pd9asectionIV.stringthofrectifiedsprit
      
      }

      if(this.editId){
        sectionIV['id']= this.editId;
        this.pd9arwserv.updatesectionI(sectionIV).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.savesectionidIV = responceData['data'].id
            this.tabset.select(tab);
            this.flag = false;
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem('pd9arawmaterial');
            // this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
  
      }else{
        this.pd9arwserv.createsectionIV(sectionIV).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.savesectionidIV = responceData['data'].id
            this.tabset.select(tab);
            this.flag = false;
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem('pd9arawmaterial');
            // this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
   }
   savesectionV(status,section){
     let sectionV={
      alcoholLossWithSludge: this.pd9asectionV.alcoholLossWithSludge,
      fermentationLoss: this.pd9asectionV.fermentationLoss,
      id: this.savesectionidIV,
      lossAccountBatchNo: this.pd9asectionV.lossAccountBatchNo,
      lossAccountDate: this.pd9asectionV.lossAccountDate,
      lossAccountDistillationLoss: this.pd9asectionV.lossAccountDistillationLoss,
      totalEfficiency: this.pd9asectionV.totalEfficiency,
      totalLoss: this.pd9asectionV.totalLoss
     }

     if(this.editId){
      sectionV['id']= this.editId;
      this.pd9arwserv.updatesectionI(sectionV).subscribe(responceData => {
        if (responceData['status'] == 's') {
          this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
          sessionStorage.removeItem('pd9arawmaterial');
            } else {
          this.alert.showError(responceData['userDisplayMesg'], 'error')
        }
      });

    }else{
      this.pd9arwserv.createsectionV(sectionV).subscribe(responceData => {
        if (responceData['status'] == 's') {
          this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
          sessionStorage.removeItem('pd9arawmaterial');
          this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);

            } else {
          this.alert.showError(responceData['userDisplayMesg'], 'error')
        }
      });
    }
   }
  previewPd9a() {
    sessionStorage.setItem('pd9arawmaterial', JSON.stringify(this.pd9arawmaterialObj));
    this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/preview']);

  }
  backtoHome() {
    sessionStorage.removeItem('pd9arawmaterial');
    this.router.navigate(['/supplychainmanagement/distillery/pd9a-rawmaterial/list']);
  }

  geReceiverNo() {
    this.masterapiService.get(apiUrls.tanktype).then(responceData => {
      console.log(responceData);
      this.receiverno = responceData['data'];
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  gettanks(){
    const searchobj = {
      filters: {
        code:  null,
        name: null,
        material: null,
        isActive: null,
      },
      pageNo:1,
      paginationSize:5
    };
     this.tanktypesrv.searchTankType(searchobj).subscribe((responceData: any) => {
      this.tanktypeListData = responceData.data.contents;
      console.log('get all tanks --->>',this.tanktypeListData);
    });
  }

  // {
  //   "alcoholLossWithSludge": 0,
  //   "fermentationLoss": 0,
  //   "lossAccountBatchNo": 0,
  //   "lossAccountDate": "2021-03-01T09:56:41.722Z",
  //   "lossAccountDistillationLoss": 0,
  //   "totalEfficiency": 0,
  //   "totalLoss": 0
  // }

  getreferenceNo(){
    this.pd9arwserv.getreferenceno().subscribe((response:any)=>{
      this.refno = response['data']
    })

  }
}
