import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { PurchagerequestService} from '@app/services'

@Component({
  selector: 'app-purchaserequest',
  templateUrl: './purchaserequest.component.html',
  styleUrls: ['./purchaserequest.component.scss']
})
export class PurchaserequestComponent implements OnInit, OnDestroy {

  purchaserequestData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  purchasereqobj:any={
    date:'',
    permitNo:''
  }
  constructor(private apiService: ApiService,
    private purchageser:PurchagerequestService,
    private distilleryapiService: DistilleryapiService) { }

  ngOnInit() {
    this.getpurchaserequest();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  searchapi() {
    const objtest = {
      filters: {
        date: this.purchasereqobj.date ? this.purchasereqobj.date : null,
        permitNo: this.purchasereqobj.permitNo ? this.purchasereqobj.permitNo : null,
       },
      pageNo: 0,
      paginationSize: 5
    };
    this.purchageser.searchpurchage(objtest).subscribe((responceData: any) => {
      if(responceData.status =='s'){
        this.purchaserequestData = responceData.data.contents; 
        console.log(responceData.data.contents)
        this.refreshTabIns();
      }
    });
  }
  resetKey() {
    this.purchasereqobj = {
      date: '',
      purchaseFrom: '',
    };
    this.getpurchaserequest();
  }
  // getpurchaserequest() {
  //   this.distilleryapiService.get(apiUrls.purchaserequestgetAllIndent).then((responceData:any) => {
  //     // console.log(responceData);
  //     this.purchaserequestData = responceData.data;
  //     if (this.dtElement.dtInstance) {
  //       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.destroy();
  //         this.dtTrigger.next();
  //       });
  //     } else {
  //       this.dtTrigger.next();
  //     }
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }

  getpurchaserequest(){
   this.purchageser.getallpurchage().subscribe((response:any)=>{
     if(response.status =='s'){
      this.purchaserequestData = response.data;
    this.refreshTabIns();
     }
   })
  }
  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  exportFile(url, postData, downloadType, title) {
    this.purchageser.exceldownload().subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: downloadType });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = title
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;

    });
  }

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      downloadType = 'application/pdf';
      title = 'PurchaseRequest.pdf'
    }
    if (type == 'downloadExcel') {
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'PurchaseRequest.xlsx'
    }
    if (type == 'downloadCsv') {
      downloadType = 'application/csv';
      title = 'PurchaseRequest.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }

}
