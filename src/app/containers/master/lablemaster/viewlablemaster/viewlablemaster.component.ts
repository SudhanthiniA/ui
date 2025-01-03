import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LabelService } from '@app/services';

@Component({
  selector: 'app-viewlablemaster',
  templateUrl: './viewlablemaster.component.html',
  styleUrls: ['./viewlablemaster.component.scss']
})
export class ViewlablemasterComponent implements OnInit {

  lablelist: Array<any> = [];
  lableObj: any;
  viewId: any;
  date: any;
  constructor(private route: ActivatedRoute, private datepipe: DatePipe, private labelService: LabelService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getByid(this.viewId);
      }
    });
  }
  getByid(id) {
    this.labelService.getLabelById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.lableObj = responceData.data;
    });
  }


}
