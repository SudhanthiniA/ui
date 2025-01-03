import { Component, OnInit } from '@angular/core';
import {Pd8BdistilaryService} from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pd8b-distillationdetails',
  templateUrl: './pd8b-distillationdetails.component.html',
  styleUrls: ['./pd8b-distillationdetails.component.css']
})
export class Pd8bDistillationdetailsComponent implements OnInit  {

  pd8bObj:any={
    date:'',
    particular:''
  }
  entity_type:any;

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  // public actionKeys = ['edit', 'view'];
  public actionKeys;
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Location>();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'date',
      dateFormat:'dd-MMM-yyyy'
    },
    {
      name: 'alcoholQty',
      displayName: 'Alcohol Qty(Qtl)',
      type: 'string',
 
    },
    {
      name: 'finalGravity',
      displayName: 'Final gravity of fermented wash with temp correction',
      type: 'string'
    },
    {
      name: 'alcoholPercent',
      displayName: 'Alcohol % in Fermented wash',
      type: 'string'
    },
    // {
    //   name: 'washDistillery',
    //   displayName: 'Qty of Wash Distillery Ltrs',
    //   type: 'string',
    // },
    {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'INITIATED':'badge-warning'
      },

    }


  ];

 
  constructor(private router: Router,private pd8bdistlary:Pd8BdistilaryService) { }

  ngOnInit() {

    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser
    if(loginuser == 'DISTILLERY'){
      this.actionKeys =['edit','view']
    }else{
      this.actionKeys =['view']
    }
    this.getpd8blist();

  
  }
 
  getpd8blist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        date: this.pd8bObj.date ? this.pd8bObj.date : null,
        distilledWashQty: this.pd8bObj.qtyOfDistillation ? this.pd8bObj.qtyOfDistillation : null,
      },
      pageNo,
      paginationSize

    }
    this.pd8bdistlary.searchpd8data(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getpd8blist(pageNo, pageSize);
  }

  searchConData() {
    this.getpd8blist();
  }

  resetKey() {
    this.pd8bObj = {
      date: '',
      particular: '',
    };
    this.getpd8blist();

   
  }

 

}
