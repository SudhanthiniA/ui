import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  MasterapiService,
  AlertService,
  DistileryService,
  SupplyTypeService,
  CommonService,
  WorkflowcofigService
} from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditindentrequest',
  templateUrl: './addeditindentrequest.component.html',
  styleUrls: ['./addeditindentrequest.component.scss']
})
export class AddeditindentrequestComponent implements OnInit {



  indentRequestObject: any = {
    seasonYear: '2020-2021',
    nameOfDistillery: '',
    indentdate: '',
    productTypeId: '',
    consumptionTypeId: '',
    stockTypeId: '',
    allotmentId: '',
    allotmentquantity: '',
    consumedquantity: '',
    availablequantity: '',
    domainId: '',
    molassestankcapacity: '',
    currentmolassestankcapacity: '',
    pendingquantityagainestpreviousrequests: '',
    remaincapacity: '',
    dailyConsumption: '',
    molassesAvailableForNoofdays: '',
    gradeId: '',
    quantity: '',
    sugarmillEntityId: '',
    status: '',
  };
  entityType: any;
  allotmetids: any;
  errordisplay = false;
  entitylist: any;
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  sugarmillNameList: any = [];
  producttypelist: any = [];
  consumptiontypelist: any = [];
  stockTypelist = [];
  // stockTypelist = [{id: 1, name: 'Reserved'}, {id: 2, name: 'Un Reserved'}];
  domainlist: any = [];
  gradelist: any[] = [];
  addedit: any;
  quantityflag = false;
  desibleflag = false;
  popupFlag: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private distileryService: DistileryService,
    private modelservice: NgbModal,
    private supplyTypeService: SupplyTypeService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.entityType = localStorage.getItem('EntityType');
    this.indentRequestObject.nameOfDistillery = localStorage.getItem('EntityType');
    this.indentRequestObject.indentdate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // this.getallotmentid();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentRequestById(params.id);
        this.indentRequestObject.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else if (this.distileryService.setPreview) {
        console.log(this.distileryService.setPreview);
        this.indentRequestObject = this.distileryService.setPreview;
        this.indentRequestObject.productType.name = this.distileryService.setPreview.productTypeId;


      }
    });
    this.getProductsType();
    this.getConsumptionType();
    this.getDomainType();
    this.getAllTankGrades();
    // this.sugarmillname();
    // this.getautopopulatedata();
    this.getallentitydata();
    // this.getallotmentid();
    this.getsupply();
    // this.getdataofreservd();
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getsupply() {
    this.supplyTypeService.getSupplyType().subscribe((responceData: any) => {
      this.stockTypelist = responceData.data;
    });
  }

  caltotal() {}

  selectedstocktype(id) {
    if (id !== '') {
      this.getallotmentid();
    } else {
      this.allotmetids = [];
      this.indentRequestObject.allotmentquantity = '';
      this.indentRequestObject.consumedquantity = '';
      this.indentRequestObject.availablequantity = '';
    }
  }

  getallentitydata() {
    this.distileryService.getentitype().subscribe(res => {
      console.log('res--->>', res);
      this.entitylist = res.data;
    });
  }

  validatequantity(quantity) {
    console.log('quntity of -->>', quantity);
    if (quantity >= this.indentRequestObject.availablequantity) {
      this.errordisplay = true;
    }
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.gradelist = responceData.data;
      }
    });
  }

  saveData(form, status) {
  
    this.formSubmitted = false;
    if (this.indentRequestObject.quantity >= this.indentRequestObject.availablequantity) {
      this.alert.showError('Quantity should be less than Available Quantity', 'error');
      return;
    }

    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modelservice.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          var indentpayload = {
            allotmentId: parseInt(this.indentRequestObject.allotmentId),
            // comments: "Test_Indent_request",
            consumptionTypeId: parseInt(this.indentRequestObject.consumptionTypeId),
            domainId: parseInt(this.indentRequestObject.domainId),
            gradeId: parseInt(this.indentRequestObject.gradeId),
            indentdate: this.indentRequestObject.indentdate,
            productTypeId: parseInt(this.indentRequestObject.productTypeId),
            quantity: this.indentRequestObject.quantity,
            seasonYear: this.indentRequestObject.seasonYear,
            stockTypeId: parseInt(this.indentRequestObject.stockTypeId),
            sugarmillEntityId: this.indentRequestObject.sugarmillEntityId,
            comments:'Requesting Molasses',
            status: status,
            }

          if (this.editId) {
            indentpayload['id'] = this.editId;       
              this.distileryService.updatereq(indentpayload).subscribe((response: any) => {
                if (response.status === 's') {
                  this.alert.showSuccess(response.userDisplayMesg, 'Success');
                  this.router.navigate(['/supplychainmanagement/distillery/indentrequest/list']);
                } else {
                  this.alert.showError(response.userDisplayMesg, 'error');
                }
              });

            } 
        else {

              this.distileryService.addindentreq(indentpayload).subscribe((response: any) => {
                if (response.status === 's') {
                  this.alert.showSuccess(response.userDisplayMesg, 'Success');
                  this.router.navigate(['/supplychainmanagement/distillery/indentrequest/list']);
                } else {
                  this.alert.showError(response.userDisplayMesg, 'error');
                }
              });

            }
          
      }}).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getquantity(data) {
    this.quantityflag = false;
    // console.log('data of quantity--->>',data.value);
    // console.log('data of availabulity quantity---->>',this.indentRequestObject['availablequantity']);
    const quantity = data.value;
    const availablequantity = this.indentRequestObject.availablequantity;
    if (quantity >= availablequantity) {
      this.quantityflag = true;
      this.alert.showError('Quantity should be less than Available Quantity', 'error');
    } else {
      this.quantityflag = false;
    }
  }

  previewcategory(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.distileryService.setPreview = this.indentRequestObject;
      this.router.navigate(['/supplychainmanagement/distillery/indentrequest/preview']);
    }
  }

  gettankcapacity() {
    const { productTypeId, gradeId } = this.indentRequestObject;
    const payload = {
      productTypeId: productTypeId ? productTypeId : '',
      gradeId: gradeId ? gradeId : ''
    };
    
    const data = 'productTypeId=' + payload.productTypeId + '&' + 'gradeId=' + payload.gradeId;
    this.distileryService.gettankexistingcapacitydata(data).subscribe((resp: any) => {
      if (resp.status === 's') {

        if (resp.data) {
          this.indentRequestObject.molassestankcapacity = resp.data.totalTankCapacity,
          this.indentRequestObject.molassesAvailableForNoofdays = resp.data.availableDays,
          this.indentRequestObject.pendingquantityagainestpreviousrequests = resp.data.pendingQuantityLifted,
          this.indentRequestObject.currentmolassestankcapacity = resp.data.currentStock,
          this.indentRequestObject.dailyConsumption = resp.data.dailyConsumption,
          this.indentRequestObject.remaincapacity = this.indentRequestObject.molassestankcapacity - 
          this.indentRequestObject.currentmolassestankcapacity;
        } else {
          this.indentRequestObject.molassestankcapacity = '',
          this.indentRequestObject.molassesAvailableForNoofdays = '',
          this.indentRequestObject.pendingquantityagainestpreviousrequests = '',
          this.indentRequestObject.currentmolassestankcapacity = '',
          this.indentRequestObject.dailyConsumption = '',
          this.indentRequestObject.remaincapacity = '';
        }
      }
    });
  }

  getIndentRequestById(id?) {
    if (id) {
      this.distileryService.getindentbyid(id).subscribe((response: any) => {
        if (response.status == 's') {
          this.indentRequestObject = response.data;
          this.indentRequestObject.indentdate = this.datePipe.transform(this.indentRequestObject.indentDate, 'yyyy-MM-dd');
          this.getautodata(this.indentRequestObject.allotmentId);
          this.selectedstocktype(this.indentRequestObject.stockTypeId);
          this.gettankcapacity();
          // this.desibleflag=true
        }
      });
    } else {
    }
  }

  getProductsType() {
    this.masterapiService.get('productType/getAllProductType').then((responceData: any) => {
      console.log(responceData);
      this.producttypelist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getConsumptionType() {
    this.masterapiService.get('consumptionType/getAllConsumptionType').then((responceData: any) => {
      console.log(responceData);
      this.consumptiontypelist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getDomainType() {
    this.masterapiService.get('domain/getAllDomain').then((responceData: any) => {
      console.log(responceData);
      this.domainlist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getdataofreservd() {
    let id;
    this.distileryService.getautoresrveddata(id).subscribe((response: any) => {
      if (response.status === 's') {
        const autopopulate = response.data;
        console.log('response data-->>', response);
        this.indentRequestObject.allotmentId = autopopulate.allotmentId,
        this.indentRequestObject.allotmentquantity = autopopulate.allotmentquantity,
        this.indentRequestObject.consumedquantity = autopopulate.consumedquantity,
        this.indentRequestObject.availablequantity = autopopulate.availablequantity;
        // this.indentRequestObject.year =autopopulate.year
      }
    });
  }

  getstock(data) {
    console.log('stockdata', data);
    const stockdata = data.value;
    if (stockdata === 1) {
      this.getdataofreservd();
    }
  }

  getallotmentid() {
    this.distileryService.getallotmentdata().subscribe((response: any) => {
      if (response.status === 's') {
        console.log('ssss-->>', response.data);
        this.allotmetids = response.data;
      }
    });
  }

  getautodata(data) {
    // console.log('get auto populate data --->>>', 
    if(data !== ''){
      const id = '?id=' + data + '&stockId=' + this.indentRequestObject.stockTypeId;
      this.distileryService.getautoresrveddata(id).subscribe((response: any) => {
        if (response.status === 's') {
          console.log('ssss-->>', response.data);
          const autopopulate = response.data;
          this.indentRequestObject.allotmentquantity = autopopulate.allotmentquantity,
            this.indentRequestObject.consumedquantity = autopopulate.consumedquantity,
            this.indentRequestObject.availablequantity = autopopulate.availablequantity;
          this.desibleflag = true;
        } else {
          this.indentRequestObject.allotmentquantity = '',
            this.indentRequestObject.consumedquantity = '',
            this.indentRequestObject.availablequantity = '';
          this.desibleflag = false;
        }
      });

    }
   
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
