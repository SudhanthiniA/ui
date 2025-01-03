import { Component, OnInit } from '@angular/core';
import { DistileryService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-mf6-part2',
  templateUrl: './view-mf6-part2.component.html',
  styleUrls: ['./view-mf6-part2.component.scss']
})
export class ViewMf6Part2Component implements OnInit {
  mf6: any = {
    date: ''
  };
  editId: any;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params===>>', params);

      if (params.id) {
        this.editId = params.id;
        this.getMf6ParttwoById(this.editId);
      } else {
        this.getMf6ParttwoById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getMf6ParttwoById(id?) {
    if (id) {
      this.distileryService.getMf6parttwoById(id).subscribe(responceData => {
        console.log(responceData);
        this.mf6 = responceData['data'];
      });
    } else {
      this.mf6 = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }
}
