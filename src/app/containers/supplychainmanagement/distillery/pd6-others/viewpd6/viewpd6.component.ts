import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-viewpd6',
  templateUrl: './viewpd6.component.html',
  styleUrls: ['./viewpd6.component.scss']
})
export class Viewpd6Component implements OnInit {

  addedit: any;
  Pd6Obj: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd6ById(params.id);
        this.Pd6Obj.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';
      };
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getPd6ById(id) {
    const url = 'Pd6list' + '/' + id;
    this.apiservice.get(url).then((responceData: any) => {
      this.Pd6Obj = responceData;
      console.log(this.Pd6Obj);
    });
  }

}
