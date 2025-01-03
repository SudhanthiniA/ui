import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-viewpreviewmf6part1',
  templateUrl: './viewpreviewmf6part1.component.html',
  styleUrls: ['./viewpreviewmf6part1.component.scss']
})
export class Viewpreviewmf6part1Component implements OnInit {

  mf6partrequestObject: any = {};
  formSubmitted = false;
  stockindetails: any[] = [];
  addedit: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMf6PartoneById(params.id);
        this.mf6partrequestObject.id = params.id;
      } else {
        this.getMf6PartoneById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getMf6PartoneById(id?) {
    if (id) {
      this.distileryService.getMF6PartoneById(id).subscribe(responceData => {
        this.mf6partrequestObject = responceData['data'];
        this.stockindetails = responceData.data.stockInDetailList;
      });
    } else {
      this.mf6partrequestObject = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }
}
