import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PrefermentationService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefermentation',
  templateUrl: './prefermentation.component.html',
  styleUrls: ['./prefermentation.component.scss']
})
export class PrefermentationComponent implements OnInit {

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
      displayName: 'Ot Number',
      type: 'string'
    },
    {
      name: 'preFerRefNo',
      displayName: 'Pre-Frementer Ref Number',
      type: 'string'
    },
    {
      name: 'yeastVesselName',
      displayName: 'Yeast Vessel No',
      type: 'string'
    },
   
    {
      name: 'prefermentationTankName',
      displayName: 'Pre-Fermenter Vessel No',
      type: 'string'
    },
    // {
    //   name: 'yeastVesselsCounts',
    //   displayName: 'Molasses Tank Serial No',
    //   type: 'string'
    // },
 
   
    // {
    //   name: 'molassesQty',
    //   displayName: 'Quantity of Molasses',
    //   type: 'string',
    // },

    {
      name: 'preparedBrothQty',
      displayName: 'Quantity of Broth Prepared',
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

  prefermentsearchObj = {
    otNumber: ''
  };
  constructor(
    private router: Router,
    private prefermentationservice: PrefermentationService
  ) { }
  ngOnInit() {
    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    this.getprefermentorlist()

  }
  getprefermentorlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        otNumber: this.prefermentsearchObj.otNumber ? this.prefermentsearchObj.otNumber : null
      },
      pageNo,
      paginationSize

    }
    this.prefermentationservice.searchpreFermentationdata(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      });
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/prefermentation/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/prefermentation/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getprefermentorlist(pageNo, pageSize);
  }

  searchConData() {
    this.getprefermentorlist();
  }
  cleardata(){
    this.prefermentsearchObj = {
      otNumber: ''

    }

    this.getprefermentorlist();
  }


}
