import { Component, OnInit } from '@angular/core';
import { Pd9Service } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-pd9',
  templateUrl: './pd9.component.html',
  styleUrls: ['./pd9.component.scss']
})
export class Pd9Component implements OnInit {

    public actionKeys = ['edit', 'view'];

    public actionBtnBasedOnCond = {
      edit: {
        column: "status",
        condition: "INITIATED",
      },
    };
    // public actionKeys;
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
        name: 'setupDate',
        displayName: 'Date when set up',
        type: 'date',
        dateFormat:'dd-MMM-yyyy hh:mm a'
      },
      {
        name: 'stillDate',
        displayName: 'Date when to still',
        type: 'date',
        dateFormat:'dd-MMM-yyyy hh:mm a'
      },
      {
        name: 'washBackNum',
        displayName: 'Wash back no.',
        type: 'string'
      },
      {
        name: 'receiverNum',
        displayName: 'Receiver no.',
        type: 'string'
      },
      {
        name: 'dip',
        displayName: 'Dip',
        type: 'string',
      },
     {
       name:'bulkLitres',
       displayName:'Bulk litres',
       type:'string'
     },
     {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'INITIATED':'badge-warning'
      }
    }
  
  
    ];

  pd9searchObj={
     date:'',
     washBackNum:'',
     receiverNum:'',
  }
  entity_type: any;

  constructor(
    private pd9service: Pd9Service,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.entity_type = localStorage.getItem('EntityType');
    this.searchapi();
  }

  getPdfData1(data){

  }
  searchapi(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    let data = {
      filters: {
        date: this.pd9searchObj.date ? this.pd9searchObj.date : null,
        washBackNum: this.pd9searchObj.washBackNum ? this.pd9searchObj.washBackNum : null,
        receiverNum: this.pd9searchObj.receiverNum ? this.pd9searchObj.receiverNum :null
      },
      pageNo,
      paginationSize

    }
    this.pd9service.listdata(data).subscribe((responseData: any) => {
      this.totalCount = responseData.data.totalElements;
      this.dataSource.data = responseData.data.contents;

    });
  }
  resetKey(){
    
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9/view/' + event.id]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.searchapi(pageNo, pageSize);
  }


}
