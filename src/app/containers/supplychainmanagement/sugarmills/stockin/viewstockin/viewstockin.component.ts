import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { StockInService } from '@app/services';
import { FormBuilder, FormGroup } from '@angular/forms';;
@Component({
  selector: 'app-viewstockin',
  templateUrl: './viewstockin.component.html',
  styleUrls: ['./viewstockin.component.scss']
})
export class ViewstockinComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  stockFormGroup: FormGroup;
  stocinobj: any = {};
  date: any;
  editId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private StockInService: StockInService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('view') === true ? 'View' : 'Preview';
  }

  buildPrescriptionFormGrp() {
    this.stockFormGroup = this.formBuilder.group({
      year: ['2019'],
      date: this.datepipe.transform(new Date(), 'dd-MM-yyyy'),
      canecrushed: [''],
      producedmolasses: [''],
      reservedmolasses: [''],
      freeleavymolasses: [''],
      bmolasses: [''],
      cmolasses: [''],
      burntmolasses: [''],
      belowmolasses: [''],
      canesyrup: [''],
      remarks: [''],
      inspectedby: [''],
      designation: [''],
      inspectedon: ['17-Sep-2020 05:23 PM'],
      stockInDetail: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }
  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      quantity: data && data.quantity || '',
      grade: data && data.grade || '',
      tank: data && data.tank || '',
      totalcapacity: data && data.totalcapacity || '',
      availableCapacity: data && data.availableCapacity || '',
      occupiedCapacity: data && data.occupiedCapacity || ''
    });
  }
  setData(id) {
    this.StockInService.getStockInById(id).subscribe((responceData: any) => {
      this.stocinobj = responceData.data;
    })
  }

  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
  }

  edit() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/edit', this.editId]);
  }

  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.StockInService.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'StockIn'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }

  getpreviewdata() {
    const responceData: any = JSON.parse(sessionStorage.getItem('formdata'));
    this.stocinobj = responceData
  }
}
