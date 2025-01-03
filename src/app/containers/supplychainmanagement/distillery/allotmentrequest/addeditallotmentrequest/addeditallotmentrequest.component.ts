import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  AlertService,
  DistileryService,
  TransportGenService,
  PreviewService,
  CommonService
} from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditallotmentrequest',
  templateUrl: './addeditallotmentrequest.component.html',
  styleUrls: ['./addeditallotmentrequest.component.scss']
})

export class AddeditallotmentrequestComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  consuptiontype=[];
  dropdownSettings = {};
  popupFlag: boolean;
  addedit: any;
  curDate = new Date();
  name: any;
  allotmentrequestobj: any = {
    seasonYear: '2020-2021',
    requestedDate: '',
    requestedReservedMolasses: '',
    consumptiontype:'',
    reserved: '',
    unreserved: '',
    total: '',
    requesterName: '',
    group:'Function Not Available Now',
    openbalanceofpremolasesreserved:'500',
    openbalanceofpremolasesunreserved:'500'
  };
  userId: any;
  date: any;
  quantityunreservedflag = false;
  quantityreservedflag = false;

  editId: any;
  entitylist: any;
  formSubmitted = false;
  sugarmillNameList: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe,
    private alert: AlertService,
    private distileryService: DistileryService,
    private transportGenService: TransportGenService,
    private previews: PreviewService,
    private modalService: NgbModal,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('USER_ID');
    this.allotmentrequestobj.requesterName = localStorage.getItem('EntityType');
    this.allotmentrequestobj.requestedDate = this.datepipe.transform(new Date(), 'yyyy-MM-ddThh:mm');
    this.getconsumptiontype();
    this.getallentitydata();
    this.allotmentrequestobj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getAllotmentByid(this.editId);
      } else if (this.previews.setData) {
        this.allotmentrequestobj = this.previews.setData;
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getallentitydata() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.distileryService.getentitype().subscribe(res => {
      console.log('res--->>', res);
      this.entitylist = res.data
    });
  }

  getAllotmentByid(id) {
 
    this.distileryService.getAllotmentById(id).subscribe(responceData => {
      console.log(responceData);
      this.allotmentrequestobj.requestedDate = this.datepipe.transform(responceData.data.requestedDate, 'yyyy-MM-ddThh:mm');
      this.allotmentrequestobj.seasonYear = this.allotmentrequestobj.seasonYear;
      this.allotmentrequestobj.reserved = responceData.data.reserved;
      this.allotmentrequestobj.unreserved = responceData.data.unreserved;
      this.allotmentrequestobj.consumptiontype = responceData.data.consumptionType;
      this.allotmentrequestobj.total = responceData.data.totalQuantity;
    });
  }

  addallotmentrequest(stockForm, method) {
    this.formSubmitted = false;
    const seletedids = [];
    console.log('selected items===>>', this.selectedItems);
    this.selectedItems.forEach((data) => {
      seletedids.push(data.id);
    });
    if (stockForm.valid === false && method === 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const postData = {

          id: parseInt(this.editId),
          seasonYear: this.allotmentrequestobj.seasonYear,
          requestedDate: this.allotmentrequestobj.requestedDate,
          consumptionType:this.allotmentrequestobj.consumptiontype,
          reserved: this.allotmentrequestobj.reserved,
          unreserved: this.allotmentrequestobj.unreserved,
          status: method,
          comments:''
        };
        console.log(postData, 'ghhggh');

        const modalRef = this.modalService.open(CommonPopupComponent);
        modalRef.result.then(respData => {
          if (respData) {
            this.distileryService.updateAllotment(postData).subscribe(responceData => {
              if (responceData.status == 's') {
                this.alert.showSuccess('Updated Record Successfully', 'Success');
                sessionStorage.removeItem('formdata');
                this.router.navigate(['/supplychainmanagement/distillery/allotmentrequest/list']);
                console.log(responceData);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
          }

        }).catch(err => {
          console.log('\n err...', err);
        });

      } else {
        const postdata = {
          seasonYear: this.allotmentrequestobj.seasonYear,
          requestedDate: this.allotmentrequestobj.requestedDate,
          consumptionType:this.allotmentrequestobj.consumptiontype,
          reserved: this.allotmentrequestobj.reserved,
          unreserved: this.allotmentrequestobj.unreserved,
          status: method,
          comments:''

        };
        const modalRef = this.modalService.open(CommonPopupComponent);

        modalRef.result.then(respData => {
          if (respData) {
            this.distileryService.addAllotment(postdata).subscribe(responceData => {
              if (responceData.status == 's') {
                this.alert.showSuccess('Added Record Successfully', 'Success');
                sessionStorage.removeItem('formdata');
                this.router.navigate(['/supplychainmanagement/distillery/allotmentrequest/list']);
                console.log(responceData);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
          }
        }).catch(err => {
          console.log('\n err...', err);
        });

      }
    }
  }

  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/distillery/allotmentrequest/list']);
  }

  gettotal(obj) {
    console.log('total of reserved ===>>', obj);
    const reserved = this.allotmentrequestobj.reserved;
    const unreserved = obj.value;
    const total = reserved + unreserved;
    // this.allotmentrequestobj.total = total;
  }

 

  totalqtl(){
        const totalqtl = this.allotmentrequestobj.reserved + this.allotmentrequestobj.unreserved;
        if(totalqtl !=''){
                this.allotmentrequestobj.total = totalqtl;

        }

  }

  preview(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.previews.setData = form;
      this.router.navigate(['/supplychainmanagement/sugarmills/mf9/preview']);
    }
  }

  previewcategory(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.previews.setData = this.allotmentrequestobj;
      this.router.navigate(['/supplychainmanagement/distillery/allotmentrequest/preview']);
    }
  }


  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  getconsumptiontype(){
    this.distileryService.getconsumptiontype().subscribe((responceData:any) =>{
         if(responceData.status){
          this.consuptiontype = responceData.data
         }
    })
  }
}
