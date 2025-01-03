import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService,WorkflowcofigService,PreviewService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predeclaration',
  templateUrl: './predeclaration.component.html',
  styleUrls: ['./predeclaration.component.scss']
})
export class PredeclarationComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: 'DRAFT',
    },
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();
  public columns = [

    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    // {
    //   name: 'inspectionDate',
    //   displayName: 'Date',                                                                                                                                                                                                    
    //   type: 'date',
    //   dateFormat: "dd/MM/yyyy"
    // },
    {
      name: 'TankName',
      displayName: 'Tank Number',
      type: 'string'
    },
    {
      name: 'inspectionDate',
      displayName: 'Date',
      type: 'string',
      // dateFormat: 'dd-MMM-yyyy',
  },
    {
      name: 'wetDip',
      displayName: 'Dip',
      type: 'string'
    },
   
    {
      name: 'temperature',
      displayName: 'Temprature',
      type: 'string'
    },
    {
      name: 'indication',
      displayName: 'Indication',
      type: 'string'
    },
 
   
    {
      name: 'closingBalanceBL',
      displayName: 'Bulk Liters',
      type: 'string',
    },
    {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUBMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'INITIATED':'badge-warning',
        'DRAFT':'badge-warning'
      },

    }


  ];

  otProdsearchForm: any;
  entity_type:any;
  workflowobj:any;

  dipbooksearchObj = {
    search: ''
  };
  constructor(
    private router: Router,
    private Service: DistileryService,
    private workflowService: WorkflowcofigService,
    private preview: PreviewService
  ) { }
  ngOnInit() {
    this.preview.setData = '';
    this.getDipbook()
    this.getworkflow()

  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_DIP_BOOK').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  getDipbook(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      orderBy: "asc",
      page: pageNo,
      pageSize: pageSize,
      searchInput: this.dipbooksearchObj.search,
      sortBy: "createdDate"
   

    }
    this.Service.searchDipbook(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.content.totalElements;
        this.dataSource.data = responceData.content.content;
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/dipbook/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/dipbook/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getDipbook(pageNo, pageSize);
  }

  searchConData() {
    this.getDipbook();
  }
  cleardata(){
    this.dipbooksearchObj = {
      search: ''

    }

    this.getDipbook();
  }


}
