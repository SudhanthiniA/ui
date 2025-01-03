import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { YeastprocessService, PreviewService } from '@app/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-yeastprocess',
  templateUrl: './yeastprocess.component.html',
  styleUrls: ['./yeastprocess.component.scss']
})
export class YeastprocessComponent implements OnInit {

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
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
      name: 'otNUmber',
      displayName: 'OT Number',
      type: 'string',
    },

    {
      name: 'yeastSerialNo',
      displayName: 'Yeast Reference No',
      type: 'string'
    },
    {
      name: 'yeastVesselName',
      displayName: 'Yeast Vessal',
      type: 'string'
    },

    {
      name: 'molassesQuantity',
      displayName: 'Qty of Fermented Sugar',
      type: 'string',
    },
    {
      name: "status",
      displayName: "Status",
      type: 'options',
      badgeColors: {
        'SUMITTED': 'badge-success',
        'APPROVED': 'badge-primary',
        'REJECTED': 'badge-danger',
        'INITIATED': 'badge-warning'
      },

    }


  ];

  yeastprocessForm: any;
  entity_type: any;

  yeastprocessSearchObj = {
    otNUmber: '',
    yeastSerialNo: ''
  };
  constructor(
    private router: Router,
    private preview: PreviewService,
    private yeastprocess: YeastprocessService
  ) { }
  ngOnInit() {
    let loginuser = localStorage.getItem('EntityType');
    this.entity_type = loginuser;
    this.getyeastprocesslist()
    this.preview.setData = '';

  }
  getyeastprocesslist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let payload = {
      filters: {
        otNumber: this.yeastprocessSearchObj.otNUmber ? this.yeastprocessSearchObj.otNUmber : null,
        yeastSerialNo: this.yeastprocessSearchObj.yeastSerialNo ? this.yeastprocessSearchObj.yeastSerialNo : null
      },
      pageNo,
      paginationSize

    }
    this.yeastprocess.yeastprocesslist(payload).subscribe((res: any) => {
      this.totalCount = res.data.totalElements;
      this.dataSource.data = res.data.contents;
    })
  }


  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/supplychainmanagement/distillery/yeastprocess/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/supplychainmanagement/distillery/yeastprocess/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getyeastprocesslist(pageNo, pageSize);
  }

  searchConData() {
    this.getyeastprocesslist();
  }
  cleardata() {
    this.yeastprocessSearchObj.otNUmber ='';
    this.yeastprocessSearchObj.yeastSerialNo = '';

    this.getyeastprocesslist();

  }


}
