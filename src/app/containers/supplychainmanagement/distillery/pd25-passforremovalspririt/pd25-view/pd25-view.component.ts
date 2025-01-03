import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-pd25-view',
  templateUrl: './pd25-view.component.html',
  styleUrls: ['./pd25-view.component.scss']
})
export class Pd25ViewComponent implements OnInit {
  addedit: any;
  Pd25: any = {
    date: '',
    validity1: '',
    consigneename: '',
    placename: '',
    permitno: '',
    permitdate: '',
    gatepassno: '',
    consignername: '',
    descrspirit: '',
    dutypaid: '',
    denautringpay: '',
    inbond: '',
    vehiclenum: '',
    routedetail: '',
    sno: '',
    chamberno: '',
    dip: '',
    bl: '',
    al: '',
    strength: '',
    temparature: '',
    indicator: '',
    grossweight: '',
    tareweight: '',
    netweight: '',
    bl2: '',
    al2: '',
    bl3: '',
    al3: '',
    inspname: '',
    verifyon: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd25ById(params.id);
        this.Pd25.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';

      } else {
        this.getPd25ById();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  getPd25ById(id?) {
    if (id) {
      this.distileryService.getPd25ById(id).subscribe(responceData => {
        this.Pd25 = responceData['data'];
      });
    } else {
      this.Pd25 = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }
}
