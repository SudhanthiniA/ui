import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PackageTypeService } from '@app/services';

@Component({
  selector: 'app-viewpackagetype',
  templateUrl: './viewpackagetype.component.html',
  styleUrls: ['./viewpackagetype.component.scss']
})
export class ViewpackagetypeComponent implements OnInit {

  packagetypeObject: any;
  packagetypeId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private packageService: PackageTypeService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpackagetypeById(params.id);
        this.packagetypeId = params.id;
      }
    });
  }

  getpackagetypeById(id) {
    this.packageService.getPackageById(id).subscribe((responceData: any) => {
      this.packagetypeObject = responceData.data;
      if (responceData.data.status) {
        this.packagetypeObject.status = 'Active';

      } else {
        this.packagetypeObject.status = 'InActive';

      }
    });
  }

}
