import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-view-pd24',
  templateUrl: './view-pd24.component.html',
  styleUrls: ['./view-pd24.component.scss']
})
export class ViewPd24Component implements OnInit {

  addedit: any;
  Pd24: any = {
    Date: '',
    quantitysanction: '',
    instdeg: '',
    rectifiedspirit: '',
    absalchol: '',
    passes: '',
    quantityinltr: '',
    passes2: '',
    validity2: '',
    quantityinltr2: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd24ById(params.id);
        this.Pd24.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';

      } else {
        this.getPd24ById();
       }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  getPd24ById(id?) {
    if (id) {
      this.distileryService.getPd24ById(id).subscribe(responceData => {
        this.Pd24 = responceData['data'];
      });
    } else {
      this.Pd24 = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }
}
