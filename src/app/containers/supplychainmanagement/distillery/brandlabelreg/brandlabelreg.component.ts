import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { BrandlabelregService, WorkflowcofigService } from '@app/services';
import { DatePipe } from '@angular/common';
import { DropdownConfigService } from '@app/services';

@Component({
  selector: 'app-brandlabelreg',
  templateUrl: './brandlabelreg.component.html',
  styleUrls: ['./brandlabelreg.component.scss']
})
export class BrandlabelregComponent implements OnInit {


  public actionBtnBasedOnCond = {
    // edit: {
    //   column: "status",
    //   condition: 'DRAFT',
    // },
    edit: {
      column: 'status',
      conditionIn: ['DRAFT', 'SENDBACK'],
    },
  };
  public pageSize = 0;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];

  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();
  public columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "createdDate",
      displayName: "Date",
      type: "date",
      dateFormat: "dd-MMM-yyyy",
    },
    {
      name: "applicationNumber",
      displayName: "Application No",
      type: "string",
    },
    {
      name: "brandCode",
      displayName: "Brand Name",
      type: 'string'
    },
    // {
    //   name: "licenseDetailsResponse?.licenseCategoryDesc",
    //   displayName: "Name of the Brand Registratnt",
    //   displayFcn: (item: any) => item.licenseDetailsResponse.licenseCategoryDesc,
    //   type: 'objstring'
    // },
    // {
    //   name: "licenseDetailsResponse?.licenseSubCategory",
    //   displayName: "License Type",
    //   displayFcn: (item: any) => item.licenseDetailsResponse.licenseSubCategory,
    //   type: 'objstring'
    // },
    // {
    //   name: "licenseType",
    //   displayName: "License Type",
    //   type: "string",
    // },

    {
      name: "liquorTypeValue",
      displayName: "Liquor Type",
      type: "string",
    },
    {
      name: "validityOfReg",
      displayName: "Validity of Registration	",
      type: "string",
    },
    {
      name: "status",
      displayName: "Status",
      type: "options",
      badgeColors: {
        IN_PROGRESS: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        DRAFT: "badge-warning",
      },
    },
  ]
  public columns1 = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "createdDate",
      displayName: "Date",
      type: "date",
      dateFormat: "dd-MMM-yyyy",
    },
    {
      name: "applicationNumber",
      displayName: "Application No",
      type: "string",
    },
    {
      name: "brandCode",
      displayName: "Brand Name",
      type: 'string'
    },
    // {
    //   name: "licenseDetailsResponse?.licenseCategoryDesc",
    //   displayName: "Name of the Brand Registratnt",
    //   displayFcn: (item: any) => item.licenseDetailsResponse.licenseCategoryDesc,
    //   type: 'objstring'
    // },
    // {
    //   name: "licenseDetailsResponse?.licenseSubCategory",
    //   displayName: "License Type",
    //   displayFcn: (item: any) => item.licenseDetailsResponse.licenseSubCategory,
    //   type: 'objstring'
    // },
    // {
    //   name: "licenseType",
    //   displayName: "License Type",
    //   type: "string",
    // },

    {
      name: "liquorTypeValue",
      displayName: "Liquor Type",
      type: "string",
    },
    {
      name: "validityOfReg",
      displayName: "Validity of Registration	",
      type: "string",
    },
    {
      name: "status",
      displayName: "Status",
      type: "options",
      badgeColors: {
        IN_PROGRESS: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        DRAFT: "badge-warning",
      },
    },
  ];
  public columns2 = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "createdDate",
      displayName: "Date",
      type: "date",
      dateFormat: "dd-MMM-yyyy",
    },
    {
      name: "applicationNumber",
      displayName: "Application No",
      type: "string",
    },
    {
      name: "licenseDetailsResponse?.licenseCategoryDesc",
      displayName: "Name of the Brand Registratnt",
      displayFcn: (item: any) => item.licenseDetailsResponse.licenseCategoryDesc,
      type: 'objstring'
    },
    {
      name: "licenseDetailsResponse?.licenseSubCategory",
      displayName: "License Type",
      displayFcn: (item: any) => item.licenseDetailsResponse.licenseSubCategory,
      type: 'objstring'
    },
    // {
    //   name: "licenseType",
    //   displayName: "License Type",
    //   type: "string",
    // },

    {
      name: "validityOfReg",
      displayName: "Validity of Registration	",
      type: "string",
    },
    {
      name: "status",
      displayName: "Status",
      type: "options",
      badgeColors: {
        IN_PROGRESS: "badge-success",
        APPROVED: "badge-primary",
        REJECTED: "badge-danger",
        DRAFT: "badge-warning",
      },
    },
  ];
  applicationno: any;
  data: any;
  dataCount: any;
  years: any;
  listofBrand: any;
  workflowobj: any;
  brandNames: any;
  constructor(private router: Router, private brandlabelregService: BrandlabelregService, private datepipe: DatePipe,
    private dropDownService: DropdownConfigService, private workflowService: WorkflowcofigService) { }

  ngOnInit() {
    this.getUser()
    this.getworkflow();
    // this.getapplicationnumber();
    this.getList();
    this.getAllYear();
    this.getbrandlabelcount();
    this.getBrandNames()
  }
  // async getapplicationnumber() {
  //   this.brandlabelregService.getapplicationnumbers('BR_').subscribe((res: any) => {
  //     this.applicationno = res.content;
  //   })
  //   return this.applicationno
  // }

  getUser() {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    if (iscustomer == 'true') {
      this.columns = this.columns1
    } else {
      this.columns = this.columns2
    }
  }

  Obj: any = {
    application: '',
    date: '',
    year: '',
    branName: '',
    status: ''

  };

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getList(pageNo, pageSize);
  }

  getbrandlabelcount() {
    this.brandlabelregService.getbrandlabelcount()
      .subscribe((res: any) => {
        this.dataCount = res.data;
      });
  }
  getBrandNames() {
    this.brandlabelregService.getBrands().subscribe((res: any) => {
      this.brandNames = res.data
    })
  }
  getList(pageNo = 0, pageSize = 5) {
    let payload = {
      "filters": {
        "createdDate": this.datepipe.transform(this.Obj.date, 'dd-MM-yyyy'),
        "applicationNumber": this.Obj.application,
        "brandCode": this.Obj.branName,
        "regYear": this.Obj.year
      },
      "pageNo": pageNo,
      "paginationSize": pageSize
    }

    this.brandlabelregService.search(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
        this.data = responceData.data.contents;
      });

  }

  getAcceptedList(pageNo = 0, pageSize = 5) {
    let payload = {
      "filters": {
        "createdDate": this.datepipe.transform(this.Obj.date, 'dd-MM-yyyy'),
        "applicationNumber": this.Obj.application, "brandCode": this.Obj.branName, "regYear": this.Obj.year,
        "status": "APPROVED"
      },
      "pageNo": pageNo,
      "paginationSize": pageSize
    }

    this.brandlabelregService.search(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
        this.data = responceData.data.contents;
      });
  }
  getPendingList(pageNo = 0, pageSize = 5) {
    let payload = {
      "filters": {
        "createdDate": this.datepipe.transform(this.Obj.date, 'dd-MM-yyyy'),
        "applicationNumber": this.Obj.application, "brandCode": this.Obj.branName, "regYear": this.Obj.year,
        "status": "IN_PROGRESS"

      },
      "pageNo": pageNo,
      "paginationSize": pageSize
    }

    this.brandlabelregService.search(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
        this.data = responceData.data.contents;
      });
  }

  getRejectedList(pageNo = 0, pageSize = 5) {
    let payload = {
      "filters": {
        "createdDate": this.datepipe.transform(this.Obj.date, 'dd-MM-yyyy'),
        "applicationNumber": this.Obj.application, "brandCode": this.Obj.branName, "regYear": this.Obj.year,
        "status": "REJECTED"

      },
      "pageNo": pageNo,
      "paginationSize": pageSize
    }

    this.brandlabelregService.search(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
        this.data = responceData.data.contents;
      });
  }

  getInactiveList(pageNo = 0, pageSize = 5) {
    let payload = {
      "filters": {
        "createdDate": this.datepipe.transform(this.Obj.date, 'dd-MM-yyyy'),
        "applicationNumber": this.Obj.application, "brandCode": this.Obj.branName, "regYear": this.Obj.year,
        "status": "INACTIVE"

      },
      "pageNo": pageNo,
      "paginationSize": pageSize
    }

    this.brandlabelregService.search(payload)
      .subscribe((responceData: any) => {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
        this.data = responceData.data.contents;
      });
  }

  getworkflow() {
    this.workflowService.getworkflowbydesignation('PARENT_UNIT', 'PARENT_UNIT_BRAND_REGISTRATION').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  onView(event) {
    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer)
    const findobj = this.data.find(x => x.id == event.id)
    if (iscustomer == 'true') {
      // if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
      //   this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/edit/' + event.id]);
      // } else {
      //   this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/view/' + event.id]);
      // }
      this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/view/' + event.id]);
    } else {
      this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/view/' + event.id]);
    }
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/edit/', event.id]);
  }

  searchTank() {
    this.getList();
  }
  clearData() {
    this.Obj.year = '',
      this.Obj.date = '',
      this.Obj.branName = '',
      this.Obj.application = '',
      this.getList();
    this.getPendingList();
    this.getAcceptedList();
    this.getRejectedList();
    this.getInactiveList();
  }

  getAllYear() {
    this.dropDownService.getDropdownByKey('YEAR_OF_REGISTRATION')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.years = resp.data.downDropDownMasterValueList;
        }
      });
  }


}



