import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescriptionService } from '@app/services/masters/description.service';

@Component({
  selector: 'app-viewdescription',
  templateUrl: './viewdescription.component.html',
  styleUrls: ['./viewdescription.component.scss']
})
export class ViewDescriptionComponent implements OnInit {

  descriptionList: Array<any> = [];
  descriptionObj: any = {};
  viewId: any;
  date: any;
  isModified: any;

  constructor(private route: ActivatedRoute,
    private service: DescriptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.service.getDescriptionById(id)
      .subscribe((resp: any) => {
        this.descriptionObj = resp.data;
        if (resp.data.isActive) {
          this.descriptionObj.isActive = 'Active';
        } else {
          this.descriptionObj.isActive = 'InActive';
        }
      });
  }
}