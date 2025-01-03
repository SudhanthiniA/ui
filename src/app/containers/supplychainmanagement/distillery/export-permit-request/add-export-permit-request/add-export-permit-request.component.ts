import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-add-export-permit-request',
  templateUrl: './add-export-permit-request.component.html',
  styleUrls: ['./add-export-permit-request.component.scss']
})
export class AddExportPermitRequestComponent implements OnInit {

  addpdobj: any;
  date: any;
  curDate = new Date();
  name: any;
  addimportForm: any;
  editId: any;
  addexportobj: any = {
    // statename: '',
    // countryname: '',
    spiritType: '',
    purchaserStateId: '',
    purchaserCountryId: ''
  };
  formSubmitted = false;
  addedit: any;
  popupFlag: boolean;
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getexportpermitRequestById(params.id);
        this.addexportobj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getexportpermitRequestById(id?) {
    if (id) {
      this.distileryService.getExportorderprmtbyid(id).subscribe((res: any) => {
        if (res.status === 's') {
          this.addexportobj = res['data'];
        }
      });
    }
  }

  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {
      this.popupFlag = true;
      const el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }

  addapi(form, status) {
    const paramdpd = {
      export: form.value.export,
      installedCapacityIndustrial: form.value.installedCapacityIndustrial,
      installedCapacityPortable: form.value.installedCapacityPortable,
      productionQuantityIndustrial: form.value.productionQuantityIndustrial,
      productionQuantityPortable: form.value.productionQuantityPortable,
      purchaseQuantityIndustrial: form.value.purchaseQuantityIndustrial,
      purchaseQuantityPortable: form.value.purchaseQuantityPortable,
      purchaserCountryId: form.value.purchaserCountryId,
      purchaserNameAddress: form.value.purchaserNameAddress,
      purchaserStateId: form.value.purchaserStateId,
      purpose: form.value.purpose,
      requestedSpirit: form.value.requestedSpirit,
      saleAgreementDate: form.value.saleAgreementDate,
      saleAgreementNo: form.value.saleAgreementNo,
      saleFrom: form.value.saleFrom,
      spiritType: form.value.spiritType,
      status,
      uploadSaleAgreement: ''
    };

    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        paramdpd['id'] = this.editId;
        this.distileryService.updateexportprmt(paramdpd).subscribe((response: any) => {
          if (response.status === 's') {
            this.router.navigate(['/supplychainmanagement/distillery/export-permit-request/list']);
          }
        });
      } else {
        this.distileryService.addexportprmt(paramdpd).subscribe((response: any) => {
          if (response.status === 's') {
            this.router.navigate(['/supplychainmanagement/distillery/export-permit-request/list']);
          } else {
            console.log('error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addexportobj));
    this.router.navigate(['/supplychainmanagement/distillery/export-permit-request/preview']);
  }

}
