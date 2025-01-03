import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DomainService } from '@app/services';

@Component({
  selector: 'app-viewdomain',
  templateUrl: './viewdomain.component.html',
  styleUrls: ['./viewdomain.component.scss']
})
export class ViewdomainComponent implements OnInit {

  domainObject: any;
  domainId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private domainService: DomainService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getdomainById(params.id);
        this.domainId = params.id;
      }
    });
  }

  getdomainById(id) {
    this.domainService.getdomainById(id).subscribe((responceData: any) => {
      this.domainObject = responceData.data;
      if (responceData.data.status) {
        this.domainObject.status = 'Active';
      } else {
        this.domainObject.status = 'InActive';

      }
    });
  }
}
