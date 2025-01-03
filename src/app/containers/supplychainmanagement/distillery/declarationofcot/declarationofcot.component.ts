import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-declarationofcot',
  templateUrl: './declarationofcot.component.html',
  styleUrls: ['./declarationofcot.component.scss']
})
export class DeclarationofcotComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: 'INITIATED',
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
      displayName: 'COT Number',
      type: 'string'
    },
    {
      name: 'preFerRefNo',
      displayName: 'COT Completion Date',
      type: 'string'
    },
    {
      name: 'yeastVesselName',
      displayName: 'OT Number 1',
      type: 'string'
    },
   
    {
      name: 'prefermentationTankName',
      displayName: 'OT Number 2',
      type: 'string'
    },
    
    {
      name: 'preparedBrothQty',
      displayName: 'OT Number 3',
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
        'INITIATED':'badge-warning'
      },

    }

  ];


  entity_type:any;

  senttostillObj = {
    otNumber: ''
  };
  constructor(
    private router: Router,
    private distilleryservice: DistileryService
  ) { }
  ngOnInit() {
    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    this.getsenttostilllist()

  }
  getsenttostilllist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        otNumber: this.senttostillObj.otNumber ? this.senttostillObj.otNumber : null
      },
      pageNo,
      paginationSize

    }
    this.distilleryservice.getSentToStill(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
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
      otNumber: ''

    }

    this.getsenttostilllist();
  }



}
