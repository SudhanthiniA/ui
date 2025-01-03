import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RouteService } from '@app/services';

@Component({
  selector: 'app-viewroute',
  templateUrl: './viewroute.component.html',
  styleUrls: ['./viewroute.component.scss']
})
export class ViewrouteComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: any;
  subBrandObj: any = {
    routecode: '',
    routename: '',
    routeFrom: '',
    routeTo: '',
    distance: '',
    duration: '',
    wastage: '',
    status: true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  brandList: any;
  isModified: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private routeService: RouteService) {
  }

  ngOnInit() {

    this.subBrandObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }



  setData(id) {
    this.routeService.getRouteById(id).subscribe((responceData: any) => {
      this.subBrandObj = responceData.data;
      const createdDate = this.datepipe.transform(this.subBrandObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datepipe.transform(this.subBrandObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
    });
  }

  navigateliquorList() {
    this.router.navigate(['/master/routemaster/list']);
  }


}
