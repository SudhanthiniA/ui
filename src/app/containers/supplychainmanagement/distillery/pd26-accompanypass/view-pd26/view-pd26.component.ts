import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-view-pd26',
  templateUrl: './view-pd26.component.html',
  styleUrls: ['./view-pd26.component.scss']
})
export class ViewPd26Component implements OnInit {

  addedit: any;
  Pd26: any = {
    date: '',
    validity1: '',
    temparature: '',
    indication: '',
    strength: '',
    vehiclenum: '',
    bondvalue: '',
    sno: '',
    chamberno: '',
    dip: '',
    bl: '',
    al: '',
    inspname: '',
    verifyon: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd26ById(params.id);
        this.Pd26.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';

      } else {
        this.getPd26ById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getPd26ById(id?) {
    if (id) {
      this.distileryService.getPd26ById(id).subscribe(responceData => {
        this.Pd26 = responceData['data'];
        console.log(this.Pd26);
      });
    } else {
      this.Pd26 = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }
}
