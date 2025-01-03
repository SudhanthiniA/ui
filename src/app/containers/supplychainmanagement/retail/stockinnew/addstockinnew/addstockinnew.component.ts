import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addstockinnew',
  templateUrl: './addstockinnew.component.html',
  styleUrls: ['./addstockinnew.component.scss']
})
export class AddstockinnewComponent implements OnInit {
  
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  @ViewChild('rejectModal', { static: false }) rejectModal;
  @ViewChild('caseDetails', { static: false }) caseDetails;
  @ViewChild('bottleDamagedQR', { static: false }) bottleDamagedQR;
  @ViewChild('bottleDamagedQRun', { static: false }) bottleDamagedQRun;
  @ViewChild('casesMissing', { static: false }) casesMissing;
  @ViewChild('casesDamagedQR', { static: false }) casesDamagedQR;
  @ViewChild('casesDamagedQRun', { static: false }) casesDamagedQRun;
  @ViewChild('bottleMissingandDamaged', { static: false }) bottleMissingandDamaged;
  @ViewChild('casesMissingandDamaged', { static: false }) casesMissingandDamaged;
  
  constructor() { }

  ngOnInit() {
  }
  addConfirmation() {
    this.exampleModalCenter.show()
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
  caseModal() {
    this.caseDetails.show()
  }
  bottleDamQR() {
    this.bottleDamagedQR.show()
  }
  bottleDamQRun() {
    this.bottleDamagedQRun.show()
  }
  casesMiss() {
    this.casesMissing.show()
  }
  casesDamQR() {
    this.casesDamagedQR.show()
  }
  casesDamQRun() {
    this.casesDamagedQRun.show()
  }
  bottleMissandDam() {
    this.bottleMissingandDamaged.show()
  }
  casesMissandDam() {
    this.casesMissingandDamaged.show()
  }
}
