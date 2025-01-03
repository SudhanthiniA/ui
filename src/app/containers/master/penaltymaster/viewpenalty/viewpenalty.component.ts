import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PenalityService } from '@app/services';

@Component({
  selector: 'app-viewpenalty',
  templateUrl: './viewpenalty.component.html',
  styleUrls: ['./viewpenalty.component.scss']
})
export class ViewpenaltyComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  penaltylist: Array<any> = [];
  duedatelist = [
    { id: 1, name: 'Up to 30 days' }, { id: 2, name: 'Up to 3 months' },
    { id: 1, name: 'Up to 6 months' }, { id: 1, name: 'Up to one year' }];
  penaltyObj: any = {
    code: '',
    name: '',
    duedatename: '',
    status: true
  };
  editId: any;
  formSubmitted = false;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private penalityService: PenalityService) { }

  ngOnInit() {
    this.penaltyObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getByid(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  getByid(id) {
    this.penalityService.getPenalityById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.penaltyObj = responceData.data;
    });
  }
}
