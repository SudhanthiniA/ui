import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  MasterapiService,
  DistileryService,
  WorkflowcofigService
} from '@app/services';

@Component({
  selector: 'app-indentrequest',
  templateUrl: './indentrequest.component.html',
  styleUrls: ['./indentrequest.component.scss'],
})
export class IndentrequestComponent implements OnInit {
  producttypelist: any[] = [];
  gradelist: any = [];
  indentrequestObj: any = {
    indentNumber:'',
    productType: '',
    gradeId: '',
  };
  entityType: any;
  pageNo = 0;
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
  productType: any;
  workflowobj: any;
  public dataSource = new MatTableDataSource();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number',
    },
    {
      name: 'indentNumber',
      displayName: 'Indent Number',
      type: 'string',
    },
    {
      name: 'allotmentNumber',
      displayName: 'Allotment Number',
      type: 'string',
    },
    {
      name: 'quantity',
      displayName: 'Requested Qauntity',
      type: 'string',
    },
    // {
    //   name: 'nameOfDistillery',
    //   displayName: 'Date',
    //   type: 'date',
    // },
    {
      name: 'productType?.name',
      displayName: 'Product Type',
      displayFcn: (item: any) => item.productType.name,
      type: 'objstring',
    },

    {
      name: 'grade',
      // displayFcn: (item: any) => item.gradeName.name,
      displayName: 'Molasses Type',
      type: 'string',
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        SUBMITTED: 'badge-success',
        APPROVED: 'badge-primary',
        REJECTED: 'badge-danger',
        DRAFT: 'badge-warning',
        SENDBACK:'badge-warning'
      },
    },
  ];

  constructor(
    private router: Router,
    private distileryService: DistileryService,
    private masterapiService: MasterapiService,
    private workconfig: WorkflowcofigService
  ) { }
  async ngOnInit() {
    const loginuser = localStorage.getItem('EntityType');
    this.entityType = loginuser;
    this.distileryService.setPreview = '';
    await this.getworkflow()
    await this.getIndentRequest();
    await this.getAllTankGrades();
    await this.getProductsType();
  }
  async getIndentRequest(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const payload = {
      filters: {
        indentNumber: this.indentrequestObj.indentNumber ? this.indentrequestObj.indentNumber : null,
        gradeId: this.indentrequestObj.gradeId
          ? this.indentrequestObj.gradeId
          : null,
        productTypeId: this.indentrequestObj.productType
          ? this.indentrequestObj.productType
          : null,
      },
      pageNo,
      paginationSize,
    };
   await this.distileryService.searchindent(payload).subscribe((responceData: any) => {
      if(responceData.errorCode == 200){
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;

      }else{   
          this.dataSource.data = []; 
          this.totalCount = 0; 
      }
    
    });
  }
getworkflow(){
  this.workconfig.getworkflowbydesignation('DISTILLERY','Indent Request').subscribe((resp: any) => {
    this.workflowobj = resp.content
    
  })


}


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([
      '/supplychainmanagement/distillery/indentrequest/edit/' + event.id,
    ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([
      '/supplychainmanagement/distillery/indentrequest/view/' + event.id,
    ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getIndentRequest(pageNo, pageSize);
  }

  searchConData() {
    this.getIndentRequest();
  }

  resetKey() {
    this.indentrequestObj = {
      productTypeId: '',
      gradeId: '',
      indentNumber: '',
    };
    this.getIndentRequest();
  }

 async getProductsType() {
   await this.masterapiService
      .get('productType/getAllProductType')
      .then((responceData: any) => {
        console.log(responceData);
        this.producttypelist = responceData.data;
      })
      .catch((err: any) => {
        console.log('\n err...', err);
      });
  }

  async getAllTankGrades() {
   await this.masterapiService
      .get('molassesType/getAllMolassesType')
      .then((responceData: any) => {
        if (responceData.status === 's') {
          this.gradelist = responceData.data;
        }
      });
  }
}
