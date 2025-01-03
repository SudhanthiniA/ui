import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addedittransferofdistillation',
  templateUrl: './addedittransferofdistillation.component.html',
  styleUrls: ['./addedittransferofdistillation.component.scss']
})
export class AddedittransferofdistillationComponent implements OnInit {
  countryData: any;
  stateData: any;
  transferofdistillationObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.transferofdistillationObject.fromTankType = '';
    this.transferofdistillationObject.toTankType = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentRequestById(params.id);
        this.transferofdistillationObject.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addTransferofdistillationForm(indentRequestForm) {
    console.log(indentRequestForm.valid);
    this.formSubmitted = false;
    if (indentRequestForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        rawMaterialName: this.transferofdistillationObject.rawMaterialName,
        quantity: this.transferofdistillationObject.quantity,
        measurement: this.transferofdistillationObject.measurement,
        quantityWighbridge: this.transferofdistillationObject.quantityWighbridge,
        fromTankType: this.transferofdistillationObject.fromTankType,
        toTankType: this.transferofdistillationObject.toTankType
      };

      this.apiService.post('transferofdistillationlist', postParam).then(responceData => {
        this.router.navigate(['/supplychainmanagement/distillery/transferofdistillation/list']);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }
  }

  getIndentRequestById(id) {
    const url = 'transferofdistillationlist/' + id;
    this.apiService.get(url).then(responceData => {
      this.transferofdistillationObject = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
