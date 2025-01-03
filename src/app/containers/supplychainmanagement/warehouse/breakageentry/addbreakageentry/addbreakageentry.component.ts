import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-addbreakageentry',
  templateUrl: './addbreakageentry.component.html',
  styleUrls: ['./addbreakageentry.component.scss']
})
export class AddbreakageentryComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  @ViewChild('rejectModal', { static: false }) rejectModal;
  @ViewChild('caseDetails', { static: false }) caseDetails;
  @ViewChild('bottleDamagedQR', { static: false }) bottleDamagedQR;
  @ViewChild('bottleDamagedQRun', { static: false }) bottleDamagedQRun;
  @ViewChild('casesMissing', { static: false }) casesMissing;
  @ViewChild('casesDamagedQR', { static: false }) casesDamagedQR;
  @ViewChild('casesDamagedQRun', { static: false }) casesDamagedQRun;  
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  @ViewChild('BreakageEntryForm',{static:false}) BreakageEntryForm
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
breakageDetails() {
  this.moreBreakage.show()
}
}