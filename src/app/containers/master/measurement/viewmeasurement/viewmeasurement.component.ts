import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MeasurementService } from '@app/services';

@Component({
  selector: 'app-viewmeasurement',
  templateUrl: './viewmeasurement.component.html',
  styleUrls: ['./viewmeasurement.component.scss']
})
export class ViewmeasurementComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  measurementObj: any = {
    code: '',
    desc: '',
    status: true
  };
  date: any;

  editId: any;
  formSubmitted = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private measurementService: MeasurementService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.measurementObj.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.measurementService.getMeasurementById(id).subscribe((responceData: any) => {
      this.measurementObj = responceData.data;
      if (responceData.status) {
        this.measurementObj.status = 'Active';

      } else {
        this.measurementObj.status = 'InActive';

      }
    });
  }


}
