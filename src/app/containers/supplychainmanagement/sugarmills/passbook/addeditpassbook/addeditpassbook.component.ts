import { Component, OnInit } from '@angular/core';
import { SugarmillapiService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addeditpassbook',
  templateUrl: './addeditpassbook.component.html',
  styleUrls: ['./addeditpassbook.component.scss']
})
export class AddeditpassbookComponent implements OnInit {

  passbookObj: any = {
    date: '',
    sugarmillname: '',
    mf4passnumber: '',
    mf4generatedate: '',
    liftedmolassescapacity: '',
    distelleryintakecapacity: '',
    allotedcapacity: '',
    remainingcapacityofconsumption: '',
    remarks: '',
    inspectionbysugarmillperson: '',
    designationsuarmillperson: '',
    inspectionbydistilleryperson: '',
    designationdistilleryperson: '',
    inspectiononsugarmill: '',
    inspectionondisterllery: '',
    status: false
  };
  addedit: any;
  editId: any;
  tankList = [{ id: 1, name: 'Tank1' }, { id: 2, name: 'Tank2' }];
  sugarmillnamelist = [{id: 1, name: 'Sugarmill1'}, {id: 2, name: 'Sugarmill2'}, {id: 1, name: 'Sugarmill3'}, ];

  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.passbookObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
    console.log(this.passbookObj.date);
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  caltotalmolasses() {
    this.passbookObj.total = this.passbookObj.openstockbyaccount + this.passbookObj.molassesrecivedonnewsesson;
  }

  calculatedispatchofmolasses() {

    this.passbookObj.totaldispatchofmolasses = this.passbookObj.dispatchmolassesondistellerys + this.passbookObj.dispatchmolassesonosshops +
    this.passbookObj.dispatchmolassesonindustrialunits + this.passbookObj.tradeafterrelease;

  }

  setData(id) {
    this.apiService.get('passbooklist/' + id).then(responceData => {
      console.log(responceData);
      this.passbookObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  saveData(form, status) {
    if (this.editId) {
      if (status === 1) {
        this.passbookObj[`status`] = false;
      } else {
        this.passbookObj[`status`] = true;
      }
      this.passbookObj[`inspectionbysugarmillperson`] = 'Sandeep';
      this.passbookObj[`designationsuarmillperson`] = 'D.E.O';
      this.passbookObj.inspectionbydistilleryperson = 'Dharmendra';
      this.passbookObj[`designationdistilleryperson`] = 'A.E.C';
      this.passbookObj[`inspectionondisterllery`] = new Date();
      this.passbookObj[`inspectiononsugarmill`] = new Date();
      const url = 'passbooklist/' + this.editId;
      this.apiService.patch(url, this.passbookObj).then(responceData => {
        this.router.navigate(['/supplychainmanagement/sugarmills/passbook/list']);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      if (status === 2) {
        this.passbookObj[`status`] = true;
      } else {
        this.passbookObj[`status`] = false;
      }
      this.passbookObj[`remarks`] = 'Approved';
      this.passbookObj[`inspectionbysugarmillperson`] = 'Sandeep';
      this.passbookObj[`designationsuarmillperson`] = 'D.E.O';
      this.passbookObj.inspectionbydistilleryperson = 'Dharmendra';
      this.passbookObj[`designationdistilleryperson`] = 'A.E.C';
      this.passbookObj[`inspectionondisterllery`] = new Date();
      this.passbookObj[`inspectiononsugarmill`] = new Date();
      this.apiService.post('passbooklist', this.passbookObj).then(responceData => {
        this.router.navigate(['/supplychainmanagement/sugarmills/passbook/list']);
        console.log(responceData);
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['supplychainmanagement/sugarmills/passbook/preview']);
  }

}
