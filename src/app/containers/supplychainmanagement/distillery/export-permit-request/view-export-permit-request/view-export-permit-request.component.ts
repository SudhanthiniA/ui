import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services'

@Component({
  selector: 'app-view-export-permit-request',
  templateUrl: './view-export-permit-request.component.html',
  styleUrls: ['./view-export-permit-request.component.scss']
})
export class ViewExportPermitRequestComponent implements OnInit {

  viewimportpermitobj: any = {
    export: '',
    purchaserStateId: '',
    purchaserNameAddress: '',
    purchaserCountryId: '',
    saleAgreementNo: '',
    requestedSpirit: '',
    spirittype: '',
    purpose: '',
    installedCapacityPortable: '',
    installedCapacityIndustrial: '',
    productionQuantityPortable: '',
    productionQuantityIndustrial: '',
    purchaseQuantityPortable: '',
    purchaseQuantityIndustrial: '',
    saleFrom: '',
    saleAgreementDate: '',
    uploadSaleAgreement: ''
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
        this.getexportpermitById(params.id);
        this.viewimportpermitobj.id = params.id;
      } else {
        this.getexportpermitById();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  getexportpermitById(id?) {
    if (id) {
      this.distileryService.getExportorderprmtbyid(id).subscribe((res: any) => {
        this.viewimportpermitobj = res['data'];
      });
    } else {
      this.viewimportpermitobj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }
}
