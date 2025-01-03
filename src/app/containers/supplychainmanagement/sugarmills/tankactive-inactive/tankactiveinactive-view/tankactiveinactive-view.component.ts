import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tankactiveinactive-view',
  templateUrl: './tankactiveinactive-view.component.html',
  styleUrls: ['./tankactiveinactive-view.component.scss']
})
export class TankactiveinactiveViewComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  tankconverstionList: Array<any> = [];
  tankconverstionObj: any = {
    id: '',
    tankName: '',
    tankId: '',
    capacity: '',
    balance: '',
    fromGrade: '',
    toGrade: '',
    reasonForConvestion: '',
    status: '',
    remarks: '',
    feedback: '',
    modifiedOn: '',
    createdOn: '',
    createdBy: '',
    modifiedBy: ''
  };
  editId: any;
  formSubmitted = false;
  gradeList: any;
  tankList: any;

  constructor() { }

  ngOnInit() {
  }

}
