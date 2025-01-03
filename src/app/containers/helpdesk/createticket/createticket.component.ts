import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AlertService,
  CreateTicketService,
  GroupService,
  SubcategoryService,
  IssueService,
  KnowledgeService,
  PriorityService,
  UserManagmentService
} from '@app/services';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})
export class CreateticketComponent implements OnInit {
  public show = false;
  public buttonName: any = 'Show';
  // AddForm:FormGroup;
  // createForm: FormGroup;
  designationObj: any = {
    code: '',
    name: '',
    active: true,
    entityTypeId: '',
  };
  sub: any;
  cat: any;
  priority1: any;
  formSubmitted = false;
  calldiscondisable = false;
  editId: any;
  entityTypeData: any;
  group: any;
  knowledgelistdet: any = [];
  memberbasgroup: any;
  entity: any;
  issuedet: any;
  knowledgelist: any;
  knowledgeselected: any;
  entitynamelist: any;
  entitytypelist: any;
  issuedetsubcatbased: any;
  createObj: any = {
    categoryid: '',
    subcategoryid: '',
    entitytype: '',
     entitytyname: '',
    searchby: '',
    entityname: '',
    licenceno: '',
    inrno: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    mobileno: '',
    email: '',
    counter: '',
    callstatus: '',
    issuedetails: '',
    knowledgebase: '',
    priority: '',
    assigngroup: '',
    assignmem: '',
    SLA: '',
    desc: '',
  };
  selectedconfig: any;
  public newTitleElem: any;
  public headingTags = [{ title_size: 'h1' }];
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  entitypes: any;

  constructor(
    private userManageService: UserManagmentService,
    private alert: AlertService,
    private subcategory: SubcategoryService,
    private priority: PriorityService,
    private groupService: GroupService,
    private create: CreateTicketService,
    private issueserv: IssueService,
    private knowledgeserv: KnowledgeService
  ) { }

  ngOnInit() {
    this.getpriority();
    this.getentity();
    this.getgroup();
    this.getcat();
    this.getissuedet();
    this.getknowledgeservice();
    this.assigngroupbasmember();
  }

  // ngOnInit () { }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    this.buttonName = this.show ? 'Hide' : 'Show';
  }

  clearticketform() {
    this.calldiscondisable = false;
    this.createObj = {};
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  entitynamebasedtype() {
    this.userManageService
      .getEntitybytypeid(this.createObj.entitytype)
      .subscribe((responceData: any) => {
        console.log(responceData);
        this.entitynamelist =
          responceData.status === 's' ? responceData.data : [];
      });
  }

  searchclear() {
    this.createObj.searchby = '';
  }

  assigngroupbasmember() {
    console.log(this.createObj.assigngroup);
    this.create
      .groupidbasmember()
      .subscribe((responceData: any) => {
        console.log(responceData);
        this.memberbasgroup =
        responceData.errorCode === 200 ? responceData.data : [];
      });
  }

  callstatuschange() {
    if (this.createObj.callstatus === 'true') {
      this.calldiscondisable = true;
      // this.createObj = {
      //   categoryid: 0,
      //   subcategoryid: 0,
      //   entitytype: 0,
      //   entitytyname: 0,
      //   searchby: null,
      //   entityname: null,
      //   licenceno: null,
      //   inrno: null,
      //   addressLine1: null,
      //   addressLine2: null,
      //   state: null,
      //   mobileno: 0,
      //   email: null,
      //   issuedetails: 0,
      //   knowledgebase: 0,
      //   priority: 0,
      //   assigngroup: 0,
      //   assignmem: 0,
      //   SLA: null,
      //   callstatus: this.createObj.callstatus,
      // };
    } else {
      this.calldiscondisable = false;
    }
  }

  addticketDetails(form, status) {
    console.log(this.createObj.knowledgebase);
    console.log(form);

    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.createObj.callstatus = JSON.parse(this.createObj.callstatus);
      if (this.createObj.callstatus === false) {
        const paramdpd = {
          callerNumber: this.createObj.counter,
          categoryId: parseInt(this.createObj.categoryid),
           entityId: parseInt(this.createObj.entitytyname)? this.createObj.entitytyname :0,
          entityTypeId: parseInt(this.createObj.entitytype),
          groupId: parseInt(this.createObj.assigngroup),
          groupMemberid: parseInt(this.createObj.assignmem),
          issueId: parseInt(this.createObj.issuedetails),
          knowledgeBaseId: parseInt(this.createObj.knowledgebase),
          queryIssue: this.createObj.issuedetails,
          queryKnowledge: this.createObj.knowledgebase,
          // "priorityId": this.createObj.categoryid != '4' ? parseInt(this.createObj.priority) == 1 ? 'NA' : 
          // parseInt(this.createObj.priority) : null,
          priorityId:
            this.createObj.categoryid !== '4'
              ? '1'
              : parseInt(this.createObj.priority),
          // "slaId": this.createObj.categoryid != '4' ? 'NA' : parseInt(this.selectedconfig),
          slaId:
            this.createObj.categoryid !== '4'
              ? 5
              : parseInt(this.selectedconfig),
          subcategoryId: parseInt(this.createObj.subcategoryid),
          description: this.createObj.desc,
          ticketstatus: 1,
          licenceNumber:this.createObj.licenceno ? this.createObj.licenceno : '',
          emailId: this.createObj.email ? this.createObj.email : '',
          mobileNumber: this.createObj.mobileno ? this.createObj.mobileno : '',
          // "sla_configuration_id":1,
          active: true,
        };
        this.create.createticket(paramdpd).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            // if (responceData.userDisplayMesg == "No record Found") {
            // this.exampleModalCenter.show()

            let id = responceData.data.ticketNumber;
            // this.alert.showSuccess("Created"+" "+id+" "+"Successfully",'success')
            this.alert.showSuccess(
              'Ticket ID is:' + id,
              responceData.userDisplayMesg
            );
            // this.createObj = {};
            form.reset();
             this.calldiscondisable = false;
            sessionStorage.removeItem('formdata');
            // }else{
            // this.router.navigate(['helpdesk/ticket/viewticket']);
            // }
          }
        });
      } else {
        const inactiveparam = {
          active: true,
          callerNumber: this.createObj.counter,
          description: this.createObj.desc,
        };
        this.create
          .createCallDisconnectedTicket(inactiveparam)
          .subscribe((responceData: any) => {
            if (responceData.status === 's') {
              let id = responceData.data.ticketNumber;
              this.alert.showSuccess(
                'Ticket ID is:' + id,
                responceData.userDisplayMesg
              );
              // this.createObj = {};
              form.reset();
              this.calldiscondisable = false;
              sessionStorage.removeItem('formdata');
            }
          });
      }
    }
  }

  search(createForm, status) {

    this.create
      .ticket(this.createObj.searchby)
      .subscribe((responceData: any) => {
        if (responceData.status === 's') {
          let searchresp = responceData.data;
          this.createObj.mobileno = searchresp.mobileNumber;
          this.createObj.email = searchresp.email;
          this.createObj.entityname = searchresp.name;
          this.createObj.licenceno = searchresp.licenceNumber;
        }
      });
  }

  knowlselect(knowl) {
    console.log(knowl);
    this.knowledgeselected = knowl.id;
    this.createObj['knowledgebase'] = knowl.issueName;
  }

  getprior($event) {
    console.log($event.target.value);
    const rest = this.priority1.filter((x) => x.id == $event.target.value);
    console.log(rest);
    this.createObj['SLA'] = rest[0].slaDays;
    this.selectedconfig = rest[0].slaId;
  }

  getsub($event) {
    console.log($event.target.value);
    if ($event.target.value !== '4') {
      this.createObj.SLA = '';
    }
    if ($event.target.value === '2') {
      this.createObj.issuedetails = '';
      this.createObj.knowledgebase = '';
    }
    this.subcategory
      .getByIdcategory($event.target.value)
      .subscribe((responceData: any) => {
        this.sub = responceData.status === 's' ? responceData.data : [];
      });
  }

  getsubbasissue($event) {
    const subcatdetails = this.sub.filter((x) => x.id == $event.target.value);
    console.log(subcatdetails);
    this.knowledgelistdet = [];
    this.issuedetsubcatbased = [];
    if (subcatdetails) {
      const issuedetails = this.issuedet.filter(
        (x) => x.subCategoryName === subcatdetails[0].subcategoryName
      );
      console.log(issuedetails);
      this.issuedetsubcatbased = issuedetails;
    }
  }

  getissuebasknowledge($event) {
    const issuedetails = this.issuedet.filter(
      (x) => x.id == $event.target.value
    );
    console.log(issuedetails);
    if (issuedetails) {
      this.knowledgeserv
        .getknowledgebyId(issuedetails[0].id)
        .subscribe((resp: any) => {
          this.knowledgelistdet = resp.data;
        });

      // const knowledgedetails = this.knowledgelist.filter(x => x.issueName == issuedetails[0].issueName);
      // console.log(knowledgedetails);
      // this.knowledgelistdet = knowledgedetails;
    }
  }

  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);

      this.cat = responceData.status === 's' ? responceData.data : [];
    });
  }

  getissuedet() {
    this.issueserv.getallissues().subscribe((responceData: any) => {
      console.log(responceData);

      this.issuedet = responceData.status === 's' ? responceData.data : [];
    });
  }

  getknowledgeservice() {
    this.knowledgeserv.getallknowledge().subscribe((responceData: any) => {
      console.log(responceData);

      this.knowledgelist = responceData.status === 's' ? responceData.data : [];
    });
  }
  getpriority() {
    this.priority.getAllpriority().subscribe((responceData: any) => {
      this.priority1 = responceData.status === 's' ? responceData.data : [];
    });
  }

  getgroup() {
    this.groupService.getAllgroup().subscribe((responceData: any) => {
      this.group = responceData.status === 's' ? responceData.data : [];
    });
  }

  getentity() {
    this.userManageService
      .getActiveEntities()
      .subscribe((responceData: any) => {
        console.log(responceData);
        this.entity = responceData.content.content;

        this.entitypes = this.entity.filter((x) => x.id !==11 && x.id !==10 );
             

        // this.entitynamelist = this.entity.map(obj => {
        //   return obj.entityType;
        // });
        // console.log(this.entitynamelist);

      });



      
  }

}
