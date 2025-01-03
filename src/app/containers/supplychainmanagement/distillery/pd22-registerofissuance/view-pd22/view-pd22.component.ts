import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-view-pd22',
  templateUrl: './view-pd22.component.html',
  styleUrls: ['./view-pd22.component.scss']
})
export class ViewPd22Component implements OnInit {

  Pd22: any = {
    Date: '',
    distname: '',
    bl1: '',
    bl2: '',
    bl3: '',
    bl4: '',
    exciseduty: '',
    excisedutydeposit: '',
    remamount: '',
    remarks: ''
  };
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd22ById(params.id);
        this.Pd22.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';
      } else {
        this.getPd22ById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getPd22ById(id?) {
    if (id) {
      this.distileryService.getPd22ById(id).subscribe(responceData => {
        this.Pd22 = responceData['data'];
        console.log(this.Pd22);
      })
    } else {
      this.Pd22 = JSON.parse(sessionStorage.getItem('formdata'));

    }
  }

}
