import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, IssueService } from '@app/services';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  subcateg: any = [];
  formSubmitted: boolean = false;
  editId;
  createObj: any = {
    subcategory: "",
    status: "",
    issueName: "",
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Service: IssueService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getallsubcategory();
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editId = params.id;
      }
    });
  }
  setData(data) {
    this.Service.getallissuesbyid(this.editId).subscribe((responceData) => {
      this.createObj = responceData.data;
      this.createObj.status = JSON.stringify(this.createObj.active);
      const rest = this.subcateg.filter(
        (x) => x.subcategoryName == this.createObj.subCategoryName
      );
      this.createObj.subcategory = rest[0].id;
    });
  }
  getallsubcategory() {
    this.Service.getallsubcategory().subscribe((responceData) => {
      this.subcateg = responceData.data;
      if (this.editId) {
        this.setData(this.editId);
      }
    });
  }
  clearticketform() {
    this.createObj = {};
  }
  submitissues(creatfll) {
    this.formSubmitted = false;
    if (creatfll.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId == undefined) {
        const payload = {
          active: JSON.parse(this.createObj.status),
          createdBy: parseInt(localStorage.getItem("USER_ID")),
          id: this.editId == undefined ? null : parseInt(this.editId),
          issueName: this.createObj.issueName,
          modifiedBy: parseInt(localStorage.getItem("USER_ID")),
          subCategoryId: parseInt(this.createObj.subcategory),
        };

        this.Service.addissuedetails(payload).subscribe((responceData: any) => {
          if (responceData.status === "s") {
            this.alert.showSuccess(responceData.userDisplayMesg, "");
            this.createObj = {};
            this.router.navigate(["/helpdeskmaster/issuedetails/list"]);
          }
        });
      } else {
        const payload = {
          active: JSON.parse(this.createObj.status),
          id: this.editId,
          issueName: this.createObj.issueName,
          subCategoryId: parseInt(this.createObj.subcategory),
        };

        this.Service.updateissuedetails(payload).subscribe(
          (responceData: any) => {
            if (responceData.status === "s") {
              this.alert.showSuccess(responceData.userDisplayMesg, "");
              this.createObj = {};
              this.router.navigate(["/helpdeskmaster/issuedetails/list"]);
            }
          }
        );
      }
    }
  }
}
