import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DistileryService } from '@app/services';
import { Router } from '@angular/router';
import { dateFormat } from 'highcharts';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

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
      displayName: 'OT Number',
      type: 'string'
    },
    {
      name: 'planDate',
      displayName: 'OT Start Date and Time',
      type: 'date',
      dateFormat:'dd-MMM-yyyy HH:mm a'
    },
    {
      name: 'referenceNumber',
      displayName: 'Receiver Ref No',
      type: 'string'
    },
    // {
    //   name: 'yeastVesselsCountsss',
    //   displayName: 'Quantity of Wash',
    //   type: 'string'
    // },
   
    {
      name: 'receiverTankName',
      displayName: 'Receiver Vessel',
      type: 'string',
    },

    {
      name: 'spiritName',
      displayName: 'Spirit Name',
      type: 'string',
    },
    {
      name: 'totalReceivedSpirit',
      displayName: 'Quantity of Wash',
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

  otProdsearchForm: any;
  entity_type:any;

  reciverobj = {
    status: '',
    // otNumber: ''
  };
  constructor(
    private router: Router,
    private distileryService: DistileryService,
  ) { }
  ngOnInit() {
    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    this.getreciverlist()

  }
  getreciverlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        status: this.reciverobj.status ? this.reciverobj.status : null,
      },
      pageNo,
      paginationSize

    }
    this.distileryService.searchrecver(payload)
      .subscribe((responceData: any) => {
        if(responceData.errorCode == 200){
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents;
        }else{
          this.totalCount = 0;
          this.dataSource.data = [];

        }
       
      });
  }


  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/receiver/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/receiver/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getreciverlist(pageNo, pageSize);
  }

  searchConData() {
    this.getreciverlist();
  }
  cleardata(){
    this.reciverobj = {
      status: '',
    }

    this.getreciverlist();
  }


}
