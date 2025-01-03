import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

export interface RegisterObj {
  registrationtype?: string;
  applicantname?: string;
  fathersname?: string;
  dob?: string;
  email?: string;
  mobile?: string;
  pan?: string;
  aadhar?: string;
  address?: string;
  status?: string;
  created_on?: string;
  created_by?: string;
  modified_on?: string;
  modified_by?: string;
}

@Component({
  selector: 'app-viewregister',
  templateUrl: './viewregister.component.html',
  styleUrls: ['./viewregister.component.scss']
})
export class ViewregisterComponent implements OnInit {

  liquorList: Array<any> = [];
  registerObj: any;
  viewId: any;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.apiService.get('registration/' + id).then(responceData => {
      console.log(responceData);
      this.registerObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
