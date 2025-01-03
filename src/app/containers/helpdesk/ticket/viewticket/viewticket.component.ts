import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import {
  AlertService,
  SubcategoryService,
  PriorityService,
  UserManagmentService,
  ticketService,
  CreateTicketService,
} from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.scss']
})
export class ViewticketComponent implements OnInit {
  bankNames: any;
  datalist: any;
  ticket: any;
  autoSuggestBankList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;
  sub: any;
  cat: any;
  priority1: any;
  entity: any;
  status: any;
  id: any;
  message: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  createObj: any = {
    ticketnumber: '',
    categoryName: '', subcategoryName: '', entityTypeName: '', licenceNumber: '', priorityName: '', ticketstatusName: '',
    categfilter: '', todate: '', fromdate: ''
  };

  constructor(
    private Service: CreateTicketService,
    private router: Router,
    private subcategory: SubcategoryService,
    private priority: PriorityService,
    private userManageService: UserManagmentService,
    private Service1: ticketService,
    private alert: AlertService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {

    // this.getall();
    this.getpriority();
    this.getentity();
    this.getcat();
    this.getticketstatus();
    this.searchviewticket();
  }

  clearfilter() {
    this.createObj = {
    };
    // this.getall();
    this.searchviewticket();
  }

  // getall() {
  //   this.Service.getAllticket().subscribe((resp: any) => {
  //     this.list = resp.data;
  //     if (this.dtElement.dtInstance) {
  //       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.destroy();
  //         this.dtTrigger.next();
  //       });
  //     } else {
  //       this.dtTrigger.next();
  //     }
  //   });
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 5,
  //     searching: false,
  //     lengthMenu: [5, 10, 20, 50, 100],
  //     scrollX: true
  //   };
  // }

  navigateView(id) {
    this.router.navigate(['/helpdesk/ticket/viewticket/viewticketdetails', id]);
  }
  
  getAutoSuggestList($event) {
    const userInput = $event.target.value;
    if (userInput.length > 2) {
      if ($event.target.id) {
        this.autoSuggestBankList = this.searchFromList(this.bankNames, userInput);
      }
    }
  }

  searchviewticket() {
    const pagination = {
      filters: {
        ticketNumber: this.createObj.ticketnumber,
        categoryId: this.createObj.categoryName,
        subcategoryId: this.createObj.subcategoryName,
        entityTypeId: this.createObj.entityTypeName,
        licenceNumber: this.createObj.licenceNumber,
        priorityId: this.createObj.priorityName,
        status: this.createObj.ticketstatusName,
        // "todate": this.datepipe.transform(this.createObj.todate, 'yyyy-MM-dd') ,
        createdDate: this.datepipe.transform(this.createObj.fromdate, 'yyyy-MM-dd')
      },
      pageNo: 0,
      paginationSize: 0
    };
    this.Service.searchfilterticket(pagination).subscribe((resp: any) => {
      this.list = (resp.status === 's') ? resp.data ? resp.data.contents : [] : [];

      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      searching: false,
      lengthMenu: [10, 20, 50, 100],
      scrollX: true
    };

  }

  searchFromList(bankList, userInput) {
    const matches = [];
    bankList.map(bank => {
      const bankName = bank.bankName.toLowerCase();
      if (bankName.match(userInput.toLowerCase())) {
        matches.push(bankName);
      }
    });
    return matches;
  }

  getsub($event) {
    console.log($event.target.value);
    this.subcategory.getByIdcategory($event.target.value).subscribe((responceData: any) => {
      this.sub = (responceData.status === 's') ? responceData.data : [];
    });
    const rest = this.cat.filter(x => x.id === $event.target.value)[0];
    this.createObj.categfilter = rest.categoryName;
  }

  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }

  getpriority() {
    this.priority.getAllpriority().subscribe((responceData: any) => {
      this.priority1 = (responceData.status === 's') ? responceData.data : [];
    });
  }

  getentity() {
    this.userManageService.getActiveEntities().subscribe((responceData: any) => {
      console.log(responceData);
      this.entity = responceData.responseCode === 200 ? responceData.content.content : [];
    });
  }

  getticketstatus() {
    this.Service1.getTicketstatus().subscribe((responceData: any) => {
      console.log(responceData);
      this.status = (responceData.status === 's') ? responceData.data : [];
    });
  }

  delete(id) {
    this.id = id;
    this.exampleModalCenter.show();
  }

  saveData() {
    this.Service1.deleteTicketsbyId(this.id).subscribe((responceData: any) => {
      this.status = (responceData.status === 's') ? responceData.data : [];
      this.exampleModalCenter.hide();
      this.alert.showSuccess('Ticket Deleted Successfully', 'success');
      // this.getall();
    });
  }

}
