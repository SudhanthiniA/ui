import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  AlertService,
  TankregistartionService,
  MasterapiService,
  PreviewService,
  CommonService,
  WorkflowcofigService,
  DistileryService,
  PatternService
} from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addedittankregistration',
  templateUrl: './addedittankregistration.component.html',
  styleUrls: ['./addedittankregistration.component.scss']
})
export class AddedittankregistrationComponent implements OnInit {
  @ViewChild('receiptModal', { static: false }) receiptModal;

  rejectConfirmation() {
    this.receiptModal.show()
  }
  tankusagelist=[];
  usagetankrawdata=[];
  getnewtankregdata=[];
  desibaleflag:boolean;
  showMore ={
    judge:'feadback'

  }
  hideflage:boolean;
  tankapplicationnumber:any;
  pdoducttypehideflag = false;
  workflowdata:any;
  tankreqObj: any = {
    newtankreg:'',
    requestDate: '',
    tankusage:'',
    rawmetiral:'',
    tankName: '',
    materialId: '',
    tankTypeId: '',
    tankCoverId: '',
    tankShapeId: '',
    height: '',
    width: '',
    innerDiameter: '',
    capacity: '',
  };
  editId: any;
  tanks: any;
  formSubmitted = false;
  tankList: any;
  tankGradeList: any;
  materialType: any;
  metrealmocdata:any;
  addedit: any;
  tankshapes: any;
  vessaltypes: any[] = [];
  tankCovererlist: any;
  tankProductypelist: any;
  tanksgrdes = false;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private router: Router,
    private datepipe: DatePipe,
    private modalService: NgbModal,
    private TankRegistrationService: TankregistartionService,
    private alert: AlertService,
    private preview: PreviewService,
    private commonService: CommonService,
    private distileryService: DistileryService,
    private workflowservice: WorkflowcofigService,
    public pattern: PatternService
  ) { }

  ngOnInit() {
    this.getworkflowdata();
    this.getapplicationnumber();
    this.gettankregdata();
    this.gettank();
    this.getAllTankGrades();
    this.getAllTankMaterial();
    // this.getvessaltype();
    this.gettankcoveredlist();
    this.getAllTankproducttypelist();
    this.getmetirealmoc();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.tankreqObj = this.preview.setData;
        if (this.preview.setData.requestDate) {
          this.tankreqObj.requestDate = this.datepipe.transform(this.preview.setData.requestDate, 'yyyy-MM-dd')
        }
      }
    });
    this.tankreqObj.requestDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd')
  }
 
  setData(id?) {
    if (id) {
      this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
        console.log('respbyid', responceData);
        if(responceData.content){
            const data = responceData.content.tankRegistrationDetails;
          
         
          this.tankreqObj.tankName = data.tankName;
          this.tankreqObj.height = data.height;
          this.tankreqObj.width = data.width;
          this.tankreqObj.innerDiameter = data.innerDiameter;
          this.tankreqObj.capacity = data.capacity;
          this.tankreqObj.tankShapeId = data.tankShapeDto?data.tankShapeDto.id:'';
          this.tankreqObj.tankTypeId = data.tankTypeDto?data.tankTypeDto.id :'';
          this.tankreqObj.tankCoverId = data.tankCoverTypeDto?data.tankCoverTypeDto.id:'';
          // this.tankreqObj.tankShapeId = data.tankCoverTypeDto?data.tankShapeDto.id:'';
          this.tankreqObj.tankusage = data.tankUsageGroupDto?data.tankUsageGroupDto.id:'';
          this.tankreqObj.rawmetiral =data.tankRawMaterialDto?data.tankRawMaterialDto.id:''
          this.tankreqObj.materialId = data.tankMaterialDto?data.tankMaterialDto.id:''
          let catagory =data.tankUsageGroupDto.tankCatagory? data.tankUsageGroupDto.tankCatagory.id : '';
          this.tankreqObj.newtankreg= catagory.toString();
          
          this.gettankusage(this.tankreqObj.newtankreg);
          this.gettankrwmetirel(this.tankreqObj.tankusage);
          this.tankreqObj.requestDate = this.datepipe.transform(data.requestDate, 'yyyy-MM-dd');

                  
        }
      });
    }
  }

  // Only AlphaNumeric with space 
  alphaNumeric(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  gettank() {
    this.masterapiService.get('tankType/getAllTankType/').then((responceData: any) => {
      console.log(responceData);
      this.tanks = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }

  producthide(id) {
    if (id === '') {
      this.pdoducttypehideflag = false;
    } else {
      this.pdoducttypehideflag = true;
    }
  }

  gettankcoveredlist() {
    this.masterapiService.get('tankCoverType/getAllTankCoverTypes').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankCovererlist = responceData.data;
      }
    })
  }

  getvessaltype() {
    this.TankRegistrationService.getvessaltypes().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.vessaltypes = responceData.data;
      }
    });
  }

  getAllTankproducttypelist() {
    this.masterapiService.get('productType/getAllProductType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankProductypelist = responceData.data;
      }
    });
  }

  getAllTankMaterial() {
  
    this.masterapiService.get(apiUrls.getAllTankShapes).then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankshapes = responceData.data;
      }
    });
  }

  getworkflowdata(){
    this.workflowservice.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_REGISTRATION').subscribe((resp: any) => {
      this.workflowdata = resp.content
      
    })
  }

  getapplicationnumber(){
 
    this.TankRegistrationService.getapplicationnumbers('PT').subscribe((res:any)=>{
      this.tankapplicationnumber = res.content;
    })
  }
  saveregistration(form, method) {

    console.log('registration paylaod ===>>',form.value);
    console.log('registration  ===>>',this.tankreqObj);

    let payload ={
        
      // "applicationNumber": this.tankapplicationnumber,
      "comments": "request",
      "event": method,
      "isDigitalSignature": this.workflowdata?this.workflowdata.isDigitalSignature:false,
      "level": this.workflowdata?this.workflowdata.level:'Level 1',
      "registrationTypeCode": "PORTABLE_TANK",
      "registrationTypeDesc": "Portable Tank Registration",
      "status": method,

      "tankRegistrationDetails":{
        "requestDate": this.tankreqObj.requestDate,
        "tankName": this.tankreqObj.tankName,
        "tankUsageGroupId": this.tankreqObj.tankusage,
        "tankRawMaterialId": this.tankreqObj.rawmetiral,       
        "materialId": this.tankreqObj.materialId,
        "tankShapeId": this.tankreqObj.tankShapeId,
        "tankTypeId": this.tankreqObj.tankTypeId,
        "tankCoverId": this.tankreqObj.tankCoverId,      
        "capacity": this.tankreqObj.capacity,
        "height": this.tankreqObj.height,
        "width": this.tankreqObj.width,
        "innerDiameter": this.tankreqObj.innerDiameter,
        "status": method
      }
      
    }

    console.log('add paylaod ==>>>',payload);

    console.log('form validation==>>',form.valid);
    console.log('formsubmited ==>>',this.formSubmitted);
    if(!form.valid){
     this.formSubmitted = true;
     console.log('formsubmited ==>>',this.formSubmitted);
    }else{
        if(this.editId){
              payload['id']=this.editId;
              this.TankRegistrationService.updateTanReg(payload).subscribe((res:any)=>{
                // alert('hi')
                this.handleResponse(res);
              })
            }else{
              payload['applicationNumber']=this.tankapplicationnumber;
              this.TankRegistrationService.addTanReg(payload).subscribe((res:any)=>{
                // alert('helloooooooooooooooo')
                this.handleResponse(res);
              })
            }
    }
    

  }

  handleResponse(responceData: any) {
    if (responceData.responseCode == '200') {
      this.alert.showSuccess(responceData.responseMessage, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
    } else {
      // alert('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
      this.alert.showError(responceData.responseMessage, 'error');
    }
  }

  previewregistration(form) {
    console.log('form data', form, this.tankreqObj)
    this.preview.setData = this.tankreqObj;
    this.router.navigate(['supplychainmanagement/distillery/tankregistration/preview']);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  getcal() {
    const { height = 0, width = 0, innerDiameter = 0, outerDiameter = 0, } = this.tankreqObj;
    this.tankreqObj.capacity = height + width + innerDiameter + outerDiameter;
  }

  tanksgrdesss(Id) {
    const getobj = this.tankProductypelist.find((x: any) => { return x.id == Id });
    if (getobj.name === 'Molasses') {
      this.tanksgrdes = true;
    } else {
      this.tanksgrdes = false;
    }
  }

  gettankusage(data){
     console.log('reg tank -->>',data);
     let id = data;
    this.distileryService.gettankusage(id).subscribe((res:any)=>{
      if(res.status =='s'){
        // this.tankreqObj.tankusage='',
        // this.tankreqObj.rawmetiral ='',
        // this.tankreqObj.materialId ='',
        // this.tankreqObj.tankTypeId='',
        // this.tankreqObj.tankCoverId ='',
        // this.tankreqObj.tankShapeId ='',

         this.materialType = res.data;
         console.log('get tankusage data ==>>',this.materialType);
         
      }
    });

    const getobj = this.getnewtankregdata.find((x: any) => { return x.id == data });
    console.log('get id of getobj ==>>',getobj);
    

  }

  gettankregdata(){
  
   this.distileryService.getnewtankreg().subscribe((res:any)=>{
     if(res.status =='s'){
        this.getnewtankregdata = res.data;
        console.log('get tankusage data ==>>',this.materialType);
        
     }
   })
 }

  gettankrwmetirel(data){
    let id = data
    console.log('tank metireal -->>',id);
    if(data ==1){
      this.hideflage = true;
      // this.tankreqObj.tankTypeId ='',
      // this.tankreqObj.tankCoverId =''
    }else{
      this.hideflage = false;
      this.tankreqObj.tankTypeId ='',
      this.tankreqObj.tankCoverId =''
    }
    this.distileryService.gettankrawmetirel(id).subscribe((res:any)=>{
      if(res.status =='s'){

         this.usagetankrawdata = res.data;
         console.log('usagetank data ==>>',this.usagetankrawdata);
         
         if(this.usagetankrawdata ==undefined){
           this.desibaleflag = true;
           this.tankreqObj.rawmetiral =''
         }else{
           this.desibaleflag = false;
         }
         
      }
    })
  }


  getmetirealmoc(){
    this.distileryService.getmetirealmoc().subscribe((res:any)=>{
      if(res.status =='s'){
        this.metrealmocdata = res.data
      }
    })
  }
  // getmetirealtype(data){
  //     console.log('data of metirealtype ===>>>',data);
  //     if(data ==1){
  //       this.hideflage = true;
  //     }else{
  //       this.hideflage = false;
  //     }
   
  // }
 }
