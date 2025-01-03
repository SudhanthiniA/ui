import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-previewmf4-recived',
  templateUrl: './previewmf4-recived.component.html',
  styleUrls: ['./previewmf4-recived.component.scss']
})
export class Previewmf4RecivedComponent implements OnInit {

  addedit: any;
  mf4filleddistillery: any = {};
  mf4recievedistillery: any = {
    mf4date: '',
    route: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getmf4ById(params.id);
        this.mf4recievedistillery.id = params.id;
      } else {
        this.getmf4ById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getmf4ById(id?) {
    if (id) {
      console.log(id);
      this.distileryService.getmf4byid(id).subscribe(responceData => {
        this.mf4recievedistillery = responceData['data'];
        console.log(this.mf4recievedistillery);
      });
    } else {
      this.mf4recievedistillery = JSON.parse(sessionStorage.getItem('mf4reciveobj'))
      this.mf4filleddistillery = JSON.parse(sessionStorage.getItem('mf4filledobj'));
    }
  }

}
