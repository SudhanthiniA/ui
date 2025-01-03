import { Component, OnInit } from "@angular/core";
import { ApiService } from "@app/services";
import { Router } from "@angular/router";

@Component({
  selector: "app-consignmentreceipt",
  templateUrl: "./consignmentreceipt.component.html",
  styleUrls: ["./consignmentreceipt.component.scss"],
})
export class ConsignmentreceiptComponent implements OnInit {
  consignments: any;

  constructor(private apiservice: ApiService, private router: Router) {}

  ngOnInit() {
    this.getall();
  }
  getall() {
    this.apiservice.get("consignmentreciept").then((resp: any) => {
      this.consignments = resp;
    });
  }
  navigate(id) {
    this.router.navigate([
      "supplychainmanagement/bonds/consignmentreceipt/view",
      id,
    ]);
  }
}
