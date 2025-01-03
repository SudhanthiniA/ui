import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService,PreviewService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendtostill',
  templateUrl: './sendtostill.component.html',
  styleUrls: ['./sendtostill.component.scss']
})
export class SendtostillComponent implements OnInit {

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
    {
      name: 'otNumber',
      displayName: 'Ot Number',
      type: 'string'
    },
    {
      name: 'estimatedStartDate',
      displayName: 'OT Actual Start Date',
      type: 'date',
      dateFormat: "dd-MMM-yyyy hh:mm"
      
    },
    {
      name: 'fermentReferenceNumber',
      displayName: 'Fermentation Ref No',
      type: 'string',
      // dateFormat: "hh:mm a",
    },
   
    {
      name: 'finalWashQty',
      displayName: 'Quantity of Wash(Qtl)',
      type: 'string'
    },
    
    // {
    //   name: 'preparedBrothQty',
    //   displayName: 'Receiver No',
    //   type: 'string',
    // },
    {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUBMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'DRAFT':'badge-warning'
      },

    }


  ];


  entity_type:any;

  senttostillObj = {
    otNumber: '',
    estimatedStartDate:''

  };
  constructor(
    private router: Router,
    private preview: PreviewService,
    private distilleryservice: DistileryService
  ) { }
  ngOnInit() {
    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    this.preview.setData = '';
    this.getsenttostilllist()

  }
  getsenttostilllist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        otNumber: this.senttostillObj.otNumber ? this.senttostillObj.otNumber : null,
        estimatedStartDate: this.senttostillObj.estimatedStartDate? this.senttostillObj.estimatedStartDate:null
      },
      pageNo,
      paginationSize

    }
    this.distilleryservice.getSentToStill(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data? responceData.data.totalElements:null;
        this.dataSource.data = responceData.data?responceData.data.contents:[];
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/sendtostill/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/sendtostill/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getsenttostilllist(pageNo, pageSize);
  }

  searchConData() {
    this.getsenttostilllist();
  }
  cleardata(){
    this.senttostillObj = {
      otNumber: '',
      estimatedStartDate:''

    }

    this.getsenttostilllist();
  }


}
