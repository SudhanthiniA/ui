import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pd10Service } from '@app/services';



@Component({
  selector: 'app-pd10form',
  templateUrl: './pd10form.component.html',
  styleUrls: ['./pd10form.component.scss']
})
export class Pd10formComponent implements OnInit {
  pd10searchObj={
    Status:'',
    gatepass:'',
    dateofuploading:''
  }
  public actionKeys = ['edit', 'view'];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
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
      name: 'unloadingDateTime',
      displayName: 'Date of Unloading Molasses',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'gatePassNumber',
      displayName: 'MF-4 Gate-Pass No',
      type: 'string',
    },
    {
      name: 'chemist',
      displayName: 'Chemist',
      type: 'string'
    },
    // {
    //   name: 'unloadingDateTime',
    //   displayName: 'Incoming Time Hrs',
    //   type: 'date',
    //   dateFormat:'hh:mm a'
    // },
  //  {
  //   name: "tankerSealed",
  //   displayName: "Status",
  //   type: 'string',
  //   // badgeColors: {
  //   //   'SUMITTED': 'badge-success',
  //   //   'APPROVED': 'badge-primary',
  //   //   'REJECTED': 'badge-danger',
  //   //   'INITIATED':'badge-warning'
  //   // }
  // }


  ];

  constructor(
    private pd10csercice:Pd10Service,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getall();
  }

 

  getall(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    let data = {
      filters: {
        gatePassNumber: this.pd10searchObj.gatepass ? this.pd10searchObj.gatepass : null,
        unloadingDateTime: this.pd10searchObj.dateofuploading ? this.pd10searchObj.dateofuploading : null,
        // status: this.pd10searchObj.Status ? this.pd10searchObj.Status :null
      },
      pageNo,
      paginationSize

    }
    this.pd10csercice.getPd10all(data).subscribe((responseData: any) => {
      this.totalCount = responseData.data.totalElements;
      this.dataSource.data = responseData.data.contents;

    });
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getall(pageNo, pageSize);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd10/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd10/view/' + event.id]);
  }
}
