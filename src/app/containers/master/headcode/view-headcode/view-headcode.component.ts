import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadcodeService } from '@app/services';

@Component({
  selector: 'app-view-headcode',
  templateUrl: './view-headcode.component.html',
  styleUrls: ['./view-headcode.component.scss']
})
export class ViewHeadcodeComponent implements OnInit {

  headcodeObj: any = {
    code: '',
    headcode: '',
    category: '',
    active: true
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HeadcodeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getHeadcodeById(params.id);
      }
    });
  }
  getHeadcodeById(id) {
    this.service.getHeadcodeById(id).subscribe((responceData: any) => {
      this.headcodeObj = responceData.data;
    });
  }

}
