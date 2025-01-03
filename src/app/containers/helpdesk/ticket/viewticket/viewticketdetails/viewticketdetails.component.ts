import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AlertService,
  CreateTicketService,
  PriorityService,
  ticketService,
} from '@app/services';

@Component({
  selector: "app-viewticketdetails",
  templateUrl: "./viewticketdetails.component.html",
  styleUrls: ["./viewticketdetails.component.scss"],
})
export class ViewticketdetailsComponent implements OnInit {
  editId: any;
  formSubmitted = false;
  priority1: any; ticketstatusbased = false;
  show = false;
  obj: any;
  statuslist: any;
  ticketupdate: any = {
    status: "",
    priority: "",
    notes: "",
  };
  obj1: any;
  constructor(
    private priority: PriorityService,
    private route: ActivatedRoute,
    private Service: ticketService,
    private create: CreateTicketService,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getticketstatus();
    this.getpriority();
    this.route.params.subscribe((params) => {
      if (params.Id) {
        this.editId = params.Id;
        // this.setData(this.editId);
      }
    });
  }
  getpriority() {
    this.priority.getAllpriority().subscribe((responceData: any) => {
      this.priority1 = responceData.status === "s" ? responceData.data : [];
    });
  }
  updatestatus(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const knowledgedetails = this.priority1.filter(
        (x) => x.id == this.ticketupdate.priority
      );
      console.log(knowledgedetails);

      // if (this.obj.closurepriorityName) {
      const priorityname =
        knowledgedetails.length > 0 ? knowledgedetails[0].priority : [];
      if (this.obj.closurepriorityName == priorityname) {
        this.alert.showError(
          "Please choose different Closure priority or uncheck",
          ""
        );
        // this.alert.showError("Closure priority already exists", 'Please choose different Closure priority or uncheck');
      }
      // }
      else {
        const payload = {
          id: this.editId,
          ticketstatus: this.ticketupdate.status,
          notes: this.ticketupdate.notes,
          closurePriorityId: this.ticketupdate.priority ? this.ticketupdate.priority :null
        };
        this.create
          .updateticketstatus(payload)
          .subscribe((responceData: any) => {
            if (responceData.status === "s") {
              this.alert.showSuccess(responceData.userDisplayMesg, "");
              this.ticketupdate = {};
              // }else{
              this.router.navigate(["helpdesk/ticket/viewticket"]);
              // }
            }
          });
      }
    }
  }
  closurecheck() {
    this.show = !this.show;
  }
  setData(id) {
    this.Service.getTicketsbyId(id).subscribe((responceData) => {
      this.obj = responceData.data;
      this.obj1 = responceData.data.ticketHistoryResponseDto;
      this.ticketstatusbased = this.obj.ticketstatusName == 'Closed' ? true : false;
      const knowledgedetails = this.statuslist.filter(
        (x) => x.status == this.obj.ticketstatusName
      );
      console.log(knowledgedetails);
      this.ticketupdate.status = knowledgedetails[0].id;
      this.ticketupdate.notes = this.obj.notes ? this.obj.notes : "";
      const priority = this.priority1.filter(
        (x) => x.priority == this.obj.closurepriorityName
      );
      console.log(priority);
      if (priority.length > 0) {
        this.ticketupdate.priority = priority[0].id;
        this.show = this.obj.closurepriorityName ? true : false;
      }
    });
  }
  getticketstatus() {
    this.Service.getTicketstatus().subscribe((responceData: any) => {
      console.log(responceData);
      this.statuslist = responceData.status === "s" ? responceData.data : [];
      if (this.editId) {
        this.setData(this.editId);
      }
    });
  }
}
