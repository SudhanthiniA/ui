import { Component, OnInit } from '@angular/core';
import { Pd9Service, DistileryService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-viewpd9',
  templateUrl: './viewpd9.component.html',
  styleUrls: ['./viewpd9.component.scss']
})
export class Viewpd9Component implements OnInit {

  editId: any;
  pd9data: any = {};
  entityType: any;
  show = true;
  addedit: any;

  constructor(
    private pd9service: Pd9Service,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
    console.log('routing name -->>', this.addedit);

    this.entityType = localStorage.getItem('EntityType');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.pd9getbyid(this.editId);
        this.show = false;
      } else {
        this.pd9getbyid();
      }
    });
  }

  pd9getbyid(id?) {

    if (id) {
      const data = '?id=' + this.editId;
      this.pd9service.pd9gebyid(data).subscribe((responseData: any) => {
        this.pd9data = responseData['data'];
      });
    } else {
      // this.pd9data = JSON.parse(sessionStorage.getItem('pd9data'));
      this.pd9data = this.distileryService.setPreview;
      console.log('preview data ----->>>', this.pd9data);

      this.pd9data.impureSpirit = this.pd9data.alcoholiclitresofimpurespirit;
      this.pd9data.finishedSpirit = this.pd9data.Alcoholiclitresoffinishedspiritpassedintostore;
      this.pd9data.passedDate = this.pd9data.Datewhenpassed;
      this.pd9data.totalProduced = this.pd9data.Totalproducedofdistillation;
      this.pd9data.alcoholPercent = this.pd9data.Percentage_ofoutturnof_alcoholic_litres;
      this.pd9data.degreeAttenuation = this.pd9data.Degree_of_attenuation_for_each_per_litres_of_wash;
      this.pd9data.setupDate = this.pd9data.pd9date;
      this.pd9data.stillDate = this.pd9data.datewhentostill;
      this.pd9data.washBackNum = this.pd9data.washbackno;
      this.pd9data.bultlettersofwash = this.pd9data.bulklitterofwashback;
      this.pd9data.intialGravity = this.pd9data.initialgravity;
      this.pd9data.finalGravity = this.pd9data.finalgravity;
      this.pd9data.degreeofattenuation = this.pd9data.degreeofautonation;
      this.pd9data.impurespiritalcoholiclitres = this.pd9data.improvespritofalcohal;
      this.pd9data.receiverNum = this.pd9data.reciverno;
      this.pd9data.bulkLitres = this.pd9data.bulklitters;
    }

  }

  userapproval(status) {

    const data = '/' + `${this.editId}` + '/' + `${status}`
    console.log('log of approvel ==>>', data);
    console.log('id of data ===>>>', this.editId);


    this.pd9service.approved(data).subscribe((ressponseDate: any) => {
      this.handleResponse(ressponseDate);
    });

  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/pd9/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

}
