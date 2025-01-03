import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PreviewService } from '@appServices/preview.service';
import { Mf5Part2Service } from '@app/services';
@Component({
  selector: 'app-view-mf5part2',
  templateUrl: './view-mf5part2.component.html',
  styleUrls: ['./view-mf5part2.component.scss']
})
export class ViewMf5part2Component implements OnInit {
  mf5part2Obj: any = {
    serialNoOfTank: '',
    tankType: '',
    capacity: '',
    dimensionsPage: '',
    dimensions: '',
    reqdate: '',
    openStock: '',
    quantity: '',
    brix: '',
    totalSugar: '',
    transferfromtank: '',
    molassesTotal: '',
    nameOfDistillery: '',
    quantitySuppliedMolasses: '',
    nameOfOsShops: '',
    nameOfIndUnits: '',
    quantitySupplied: '',
    soldToTrade: '',
    quantitySuppliedTotal: '',
    closingBalance: '',
    layer: '',
    analyseBrix: '',
    percentageOfTotalSugar: '',
    remarks: '',
    status: ''
  };
  addedit: any;
  editId: any;
  constructor(private route: ActivatedRoute, private preview: PreviewService, private router: Router, private datepipe: DatePipe, private Mf5Part2Service: Mf5Part2Service
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  setData(id?) {
    if (id) {
      this.Mf5Part2Service.getMf5Part2ById(id).subscribe((responceData: any) => {
        this.mf5part2Obj = responceData.data;
        // this.mf5part2Obj.nameOfIndUnits = Number(this.mf5part2Obj.nameOfIndUnits);
        this.caltotalmolasses();
        this.calQtySupplied();
      })
    } else {
      this.mf5part2Obj = this.preview.setData;
    }

  }
  caltotalmolasses() {
    this.mf5part2Obj.molassesTotal = this.mf5part2Obj.openStock - this.mf5part2Obj.brix;
  }
  calQtySupplied() {
    this.mf5part2Obj.quantitysuppliedtotal =
      this.mf5part2Obj.nameOfIndUnits + this.mf5part2Obj.quantitySupplied + this.mf5part2Obj.soldToTrade;
    this.mf5part2Obj.closingbalance = this.mf5part2Obj.openStock - this.mf5part2Obj.quantitySupplied;
  }
  getPrint() {
    let url = `transportgeneration/generatePrintViewById?id=403&code=MF4`;
    this.Mf5Part2Service.getPrintData(url).subscribe((responceData: any) => {
      const newBlob = new Blob([responceData], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'MF5 Part2'
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
    })
  }

}
