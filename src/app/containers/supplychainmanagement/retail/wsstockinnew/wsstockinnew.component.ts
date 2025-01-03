import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WholesaleStockinService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Inprogress } from '@app/models/wholesale/stockIn';
import { StockIn } from '@app/config/wholesale/stockIn.config';

@Component({
  selector: 'app-wsstockinnew',
  templateUrl: './wsstockinnew.component.html',
  styleUrls: ['./wsstockinnew.component.scss']
})
export class WsstockinnewComponent implements OnInit {

  // public actionBtnBasedOnCondInprogress = {
  //   edit: {
  //     column: 'transportPassStatus',
  //     condition: 'INPROGRESS',
  //   },
  //   view: {
  //     column: 'transportPassStatus',
  //     condition: 'INPROGRESS',
  //   },
  // };
  public actionKeysInprogrss = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public dataSourceInprogress = new MatTableDataSource<Inprogress>();
  public inprogress = StockIn.Completed;

  formSubmitted = false;
  // stockForm: FormGroup;
  stockinlist:any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  stockInObj = {
    transportNo:'',
    stockInDate:''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private formbuilder: FormBuilder,
    private wholesalestockinservice: WholesaleStockinService
  ) { }

  ngOnInit() {
    // this.buildPrescriptionFormGrp();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.list()
  }
  stockIn:any[] = [
    {
      id:11,
      Ondate:"27/05/2021",
      tarnsPortPassNo:"123456",
      totalNoOfIndent:"1",
      totalNoOfCasesRec:"10",
      totalNoOfBottelesRec:"100"
    },
    {
      id:2,
      Ondate:"26/05/2021",
      tarnsPortPassNo:"23456",
      totalNoOfIndent:"2",
      totalNoOfCasesRec:"5",
      totalNoOfBottelesRec:"50"
    }
  ];
  // buildPrescriptionFormGrp() {
  //   this.stockForm = this.formbuilder.group({
  //     transportationPassNo: [''],
  //     stockInDate:['']
  //   })
  // }
  handlePagination1(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
     this.list(pageNo, pageSize);
  }
  searchStockIn(){
    this.list()
  }
  cancel(){
    this.stockInObj = {
      transportNo:'',
      stockInDate:''
    }
    this.list()
  }
  list(pageNo = 0,pageSize = 5){
    const paginationSize = pageSize
    let params ={
      "filters": {
        transportationPassNo :this.stockInObj.transportNo ? this.stockInObj.transportNo:'',
        stockInDate :this.stockInObj.stockInDate ? this.stockInObj.stockInDate:''
      },
      "fromDate": "",
      pageNo,
      paginationSize,
      "search": "",
      "sortField": "",
      "sortOrder": "",
      "toDate": ""
  }
    this.wholesalestockinservice.getAllstcokin(params).subscribe((response:any)=>{
    if(response){
      this.stockinlist = response.data.contents;
      this.dataSourceInprogress.data = response.data.contents as Inprogress[]
      this.totalCount = response.data.totalElements;
      // this.stockinlist.reverse();
      // console.log(this.stockinlist);
      
      // this.refreshTabIns();
    }
  })
  }
//   add(stockForm){
//     let params ={
//         "filters": {
//           transportationPassNo : stockForm.value.transportationPassNo,
//           stockInDate : stockForm.value.stockInDate
//         },
//         "fromDate": "",
//         "pageNo": 0,
//         "paginationSize": 10,
//         "search": "",
//         "sortField": "",
//         "sortOrder": "",
//         "toDate": ""
//     }
//     if (stockForm.valid === false) {
//       this.formSubmitted = true;
//     } 
//     else {
//         this.wholesalestockinservice.getAllstcokin(params).subscribe((response:any)=>{
//           if(response){
//             this.stockinlist = response.data.contents;
//             this.stockinlist.reverse();
//             console.log(this.stockinlist);
            
//             this.refreshTabIns();
//           }
//         })
//   }
// }
view(event){
  //console.log(i);
  
  this.router.navigate(['/supplychainmanagement/wholesale/wsstockinnew/view/'+event.id])
}

// refreshTabIns() {
//   if (this.dtElement.dtInstance) {
//     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       dtInstance.destroy();
//       this.dtTrigger.next();
//     });
//   } else {
//     this.dtTrigger.next();
//   }
//   return true;
// }
ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}
}
