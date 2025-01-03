import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TankregistartionService,DistileryService,WorkflowcofigService,AlertService} from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { TankregestrationConfig } from '@app/config/table-config/tankregestration-config';
import { TankMaintainancesConfig } from '@app/config/industrial-distillery/tankmaintainance-config';
import { Tankregelist } from "@app/models/distillery";
import { TankMaintainance } from '@app/models/industial-distillery';
import { TankMaintainancesService } from '@app/services/distillery/tankmaintainance.service';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';
import { TankConversionConfig } from '@app/config/industrial-distillery/tankconversion-config';



@Component({
  selector: 'app-tankoverview',
  templateUrl: './tankoverview.component.html',
  styleUrls: ['./tankoverview.component.scss']
})
export class TankoverviewComponent implements OnInit {

  @ViewChild('tabset', {static: false}) tabset;

  tankregList:any;
  navtabdata:any;
  labledata:any;
  workflowdata:any;
  loginuser:any;

  s={
    nextId:'TR'
  }



  labledatas={
    totaltanks:'',
    producationtanks:'',
    Storagetanks:'',
    molasistanks:''
  }

  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT'||'SENDBACK',
    },
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Tankregelist>();
  public dataSource2 = new MatTableDataSource();
  public dataSource3 = new MatTableDataSource<TankMaintainance>();
  public dataSource4 = new MatTableDataSource();


  public columns = TankregestrationConfig.columns;
  public columns3 = TankMaintainancesConfig.columns;
  public columns4 = TankConversionConfig.columns;




  public columns2 = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "applicationNumber",
      displayName: "Request Number",
      type: "string",
    },
    {
      name: 'requestDate',
      displayName: 'Request Date',
      displayFcn: (item: any) => item.requestDate.join('-'),
      type: 'date',
      dateFormat: "dd-MMM-yyyy",
  },
    // {
    //   name: "transOrEmpt",
    //   displayName: "Is tank empty",
    //   type: "string",
    // },
    {
      name: "fromTankName",
      displayName: "From Tank Name",
      type: "string",
    },
    {
      name: "toTankAvailableCapacity",
      displayName: "Transfer Quantity(Qtl)",
      type: "string",
    },
    {
      name: "toTankName",
      displayName: "To Tank Name",
      type: "string",
    },
    {
      name: "status",
      displayName: "Status",
      type: "options",
      badgeColors: {
        SUMITTED: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        DRAFT: "badge-warning",
      },
    },
  ];
  page: number;
  limit: any;

  constructor(
    private router: Router,
    private workflowservice: WorkflowcofigService,
    private TankRegistrationService: TankregistartionService,
    private distilleryserv : DistileryService,
    private service:TankMaintainancesService,
    private tankservice: TankConversionService, 
    private alert: AlertService


  ) { }

  ngOnInit() {
    this.s.nextId = sessionStorage.getItem('nextId');
    this.loginuser = localStorage.getItem('USER_NAME');
    console.log('loginuser==>>',this.loginuser);
    
    this.getlabledata();
    this.getalltanks();
    // this.viewToBacklist(this.s)
  }

   ngAfterViewInit() {
    this.viewToBacklist(this.s);
  }
  viewToBacklist(item){
    this.tabset.select(item.nextId);

  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getalltanks(pageNo, pageSize);
  }
  handlePagination4(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getTankConversion(pageNo, pageSize);
  }
  handlePagination2(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getlistdata(pageNo, pageSize);
  }

  handlePagination3(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getTank(pageNo, pageSize);
  }
  getalltanks(page = 0, pageSize = 5) {
    const postData={
            // orderBy: "asc",
            page,
            pageSize,
            // searchInput:this.tankreqObj.registration_id,
            // sortBy: "createdDate"
    }
    this.TankRegistrationService.searchTanReg(postData).subscribe((resp: any) => {
      if (resp.content) {
        console.log('responce data ==>>',resp.content.content);
        this.dataSource.data = resp.content.content as Tankregelist[];
        this.totalCount = resp.content.totalElements;
      }
      else{
        this.dataSource.data = []; 
        this.totalCount = 0;
      }
    });
  }

  getlistdata(page = 0, pageSize = 5){
    const payload={
      // orderBy: "asc",
      page,
      pageSize,
      // searchInput:this.tankConObj.reqDate,
      // sortBy: "createdDate"
    }
   this.distilleryserv.searchTankTransfer(payload).subscribe((res:any)=>{
     if(res.content){
      this.totalCount = res.content.totalElements;
      this.dataSource2.data = res.content.content;
     }else{
      this.dataSource2.data = []; 
      this.totalCount = 0;
     }
   })
  }



  getTank(pageNo = 0, paginationSize  = 5) {
    const searchobj = {
      // "orderBy": "asc",
      "page": pageNo,
      "pageSize": paginationSize,
      // "searchInput": this.tankConversionObj.requestId,
      // "sortBy": "createdDate"
    };
  this.service.searchTank(searchobj).subscribe((resp: any) => {
    if (resp.responseCode === 200) {
      this.totalCount = resp.content.totalElements;
      this.dataSource3.data = resp.content.content;
    }else{
      this.dataSource3.data = []; 
      this.totalCount = 0;
    }
  });
}

getTankConversion(pageNo = 0, paginationSize = 5) {
  const searchobj = {
    // "orderBy": "asc",
    "page": pageNo,
    "pageSize": paginationSize,
    // "searchInput": this.tankConversionObj.search,
    // "sortBy": "createdDate"
  };
  this.tankservice.searchTankConversion(searchobj).subscribe((resp: any) => {
    // this.tankConversionData = resp.content.content;
    if (resp.responseCode === 200) {
      this.totalCount = resp.content.totalElements;
      this.dataSource4.data = resp.content.content;
    }else{
      // this.alert.showError(resp.responseMessage,'error');
      this.dataSource4.data = []; 
      this.totalCount = 0;
    }
  });
}

  beforeChange(s){
   console.log('data ==>>',s);
   this.navtabdata = s.nextId;
   if(s.nextId =="TT"){
     this.getlistdata();
   }else if(s.nextId =="TM"){
       this.getTank();
   } else if(s.nextId =="TC"){
      this.getTankConversion();
   } else if(s.nextId =="TR"){
     this.getalltanks();
   }
  }


  getlabledata(){
    this.TankRegistrationService.getlabledata().subscribe((res:any)=>{
      this.labledata = res;
      this.labledatas.totaltanks = res.content.totalTankCount;
      this.labledatas.Storagetanks = res.content.storageTankCount;
      this.labledatas.molasistanks = res.content.molassesTankCount;
      this.labledatas.producationtanks = res.content.productionTankCount;
    });


    this.workflowservice.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_TANK_REGISTRATION').subscribe((resp: any) => {
      this.workflowdata = resp.content

    });

    // this.workflowservice.getworkflowbydesignationdistillery('DISTILLERY', 'Tank Registration').subscribe((resp: any) => {
    //   this.workflowdata = resp.content

    // })
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankregistration/edit', event.id]);
  }
  onView(event) {
    console.log('event==>.',event.id);
    this.router.navigate(['/supplychainmanagement/distillery/tankregistration/view', event.id]);
  }  

  onView2(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/view', event.id]);
  }
  onEdit2(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/edit', event.id]);
  }

  onView4(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/view/' + event.id]);
  }

  onEdit4(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/edit/' + event.id]);
  }
  onView3(event) {
    console.log('event data ==>>',event);
    
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/view/' +  event.id]);
  }
 
  onEdit3(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/edit/' +  event.id]);
  }

  tanktregistration(){
    this.router.navigate(['/supplychainmanagement/distillery/tankregistration/add']);

  }
}
