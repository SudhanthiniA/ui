import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{IndentAcceptanceService,ApiService} from '@app/services';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { IndentAcceptance } from '@app/config/wholesale/indentacceptance.config';
import { Accepted } from '@app/models/wholesale/indentAcceptance';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-indentacceptance',
  templateUrl: './indentacceptance.component.html',
  styleUrls: ['./indentacceptance.component.scss']
})
export class IndentacceptanceComponent implements OnInit {
  indentForm:FormGroup;
  public actionBtnBasedOnCondAccepted = {
   
    view: {
      column: 'orderStatus',
      condition: 'ACCEPTED || REJECTED || PENDING',
      },
  };
  
  public actionKeysAccepted= ['view'];
 

  public pageSize = 5;
  public totalCount: number;

 
  public isSearchRes = false;

  public accepted = IndentAcceptance.Accepted;
  

  public dataSourceAccepted = new MatTableDataSource<Accepted>();
  ordstatus: any;
  indtStatuslist: any;
  public statusValue:any

  constructor(private router: Router,
    private apiservice:ApiService,
    private formbuilder: FormBuilder,
    private IndentAcceptanceService: IndentAcceptanceService,
    private datePipe: DatePipe,
    ) { }
 digitallocksList: any;
 selected: any;
 Pd18list:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 indentacceptancelist: any;
  
  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.List();
    this.indentAcceptanceStatusList()
   
    // this.IndentAcceptanceList();
  }
  buildPrescriptionFormGrp() {
    this.indentForm = this.formbuilder.group({
      indentDate: [''],
      indentNO:[''],
      // unitName:[''],
      status:['']
    })
  }
  handlePagination(event?) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    const indentStatus = this.statusValue
    if(indentStatus == "ACCEPTED"){
      this.acceptedIndent(indentStatus,pageNo,pageSize)
    }
    else if(indentStatus == "REJECTED"){
      this.rejectedIndent(indentStatus,pageNo,pageSize)
    }
    else if(indentStatus == "PENDING"){
      this.pendingIndent(indentStatus,pageNo,pageSize)
    }else{
      this.List(pageNo,pageSize)
    }
   
    // const isSearchRes = event.isSearchRes;
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

  IndentAcceptanceList() {
    this.List();
    delete this.statusValue
   
  }
  indentAcceptanceStatusList(){
   this.IndentAcceptanceService.getIndtAcceptanceStatusList().subscribe((res:any) =>{
     this.indtStatuslist = res.data;
   })
  }
  cancel(){
    this.indentForm.reset();
    this.List();
   
  }
  acceptedIndent(value,pageNo = 0,pageSize=5){
   this.statusValue = value
  const paginationSize = pageSize
  let reqStatus ={
    "filters":{
      orderStatus:"ACCEPTED"
     },
    pageNo,
    paginationSize
   }
   this.IndentAcceptanceService.getAllindent(reqStatus).subscribe((response:any)=>{
    if(response){
      this.indentacceptancelist = response.data.contents;
     console.log(this.indentacceptancelist);
     this.dataSourceAccepted.data = response.data.contents as Accepted[];;
     this.totalCount = response.data.totalElements;
   //   this.refreshTabIns();
    }
  })
  }

  pendingIndent(value,pageNo = 0,pageSize=5){
    this.statusValue = value
    const paginationSize = pageSize
    let reqStatus ={
      "filters":{
        orderStatus:"PENDING"
       },
      pageNo,
      paginationSize
     }
     this.IndentAcceptanceService.getAllindent(reqStatus).subscribe((response:any)=>{
      if(response){
        this.indentacceptancelist = response.data.contents;
       console.log(this.indentacceptancelist);
       this.dataSourceAccepted.data = response.data.contents as Accepted[];;
       this.totalCount = response.data.totalElements;
     //   this.refreshTabIns();
      }
    })
    }

    rejectedIndent(value,pageNo = 0,pageSize=5){
      this.statusValue = value
      const paginationSize = pageSize
      let reqStatus ={
        "filters":{
          orderStatus:"REJECTED"
         },
        pageNo,
        paginationSize
       }
       this.IndentAcceptanceService.getAllindent(reqStatus).subscribe((response:any)=>{
        if(response){
          this.indentacceptancelist = response.data.contents;
         console.log(this.indentacceptancelist);
         this.dataSourceAccepted.data = response.data.contents as Accepted[];;
         this.totalCount = response.data.totalElements;
       //   this.refreshTabIns();
        }
      })
      }

  List(pageNo=0,pageSize =5){
   const paginationSize = pageSize
    let params ={ 
      "filters": {
        indentDate:this.indentForm.value.indentDate ? this.indentForm.value.indentDate:'', 
        indentNo:this.indentForm.value.indentNO ? this.indentForm.value.indentNO:'',
        orderStatus:this.indentForm.value.status ? this.indentForm.value.status:'',
        unitName:this.indentForm.value.unitName ? this.indentForm.value.unitName:'',
        
      },
      // "fromDate": "",
      pageNo,
      paginationSize,
      // "search": "",
      // "sortField": "",
      // "sortOrder": "",
      // "toDate": ""
  }
    this.IndentAcceptanceService.getAllindent(params).subscribe((response:any)=>{
      if(response){
        this.indentacceptancelist = response.data.contents;
       console.log(this.indentacceptancelist);
       this.dataSourceAccepted.data = response.data.contents as Accepted[];;
       this.totalCount = response.data.totalElements;
     //   this.refreshTabIns();
      }
    })
  }
    ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  view(event){
    
     const findobj = this.indentacceptancelist.find(x => x.id == event.id)
     this.router.navigate(['/supplychainmanagement/wholesale/indentacceptance/view/'+event.id])
                     
  }
}
