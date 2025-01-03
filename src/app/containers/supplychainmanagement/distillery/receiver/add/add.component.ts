import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  DistileryService,
  PreviewService
} from '@app/services';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  popupFlag: boolean;
  receiverForm: FormGroup;
  tankList: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  openstock: any;
  editId: any;
  addedit: any;

  otnumber: any;
  refnumber: any;
  revtank: any;
  receivetabledata = [];
  receivebackend = [];
  vessalno: any;
  sprintdata = [];
  previewlist = []
  otGridClick: boolean = false;
  otTableRowIndex: any;

  reciverobj: any = {
    fermentationrefno: '',
    fermentationvesselno: '',
    fermentationavailquantity: '',
    fermentationofwash: '',
    otstartdateandtime: '',
    Inistialgravity: '',
    finalgravity: '',
    alcoholpercentageinwash: '',
    strength: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private alert: AlertService,
    private distileryService: DistileryService,
    private previews: PreviewService,
  ) { }

  async ngOnInit() {
    this.getsprint();
    this.getotnumber();
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getviewdata(this.editId);
      } else {
        if (this.previews.setData) {
          console.log('preview data ==>>', this.previews.setData);
          this.receivetabledata = this.previews.setData.tabledata;
          this.receivebackend = this.previews.setData.backenddata;
          this.receiverForm.patchValue({
            otnumber: this.previews.setData.otnumberid,
            otstartdate: this.previews.setData.OTstartdate,
            sprintname: this.previews.setData.spiritid,
            receivertank: this.previews.setData.reciverid
          });
          this.getrefnumber(this.previews.setData.otnumberid)
          this.getrecivertank(this.previews.setData.otnumberid);
          this.getTankDetails(this.previews.setData.reciverid);



        }
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }



  buildPrescriptionFormGrp() {
    this.receiverForm = this.formBuilder.group({
      otnumber: ['', Validators.required],
      otstartdate: [''],
      sprintname: ['', Validators.required],
      receivertank: ['', Validators.required],
      Availavlecapacity: [''],
    });
  }



  getotnumber() {
    this.distileryService.getrecerot().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.otnumber = responceData.data;
        console.log('otnuber ==>>', this.otnumber);
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  getrefnumber(id) {
    let data = '?otPlanId=' + id;
    this.distileryService.getrecvreferenceno(data).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.refnumber = responceData.data;
        console.log('otnuber ==>>', this.otnumber);
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  getrecivertank(id) {
    let data = '?otplanid=' + id;
    this.distileryService.getrecivertank(data).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.revtank = responceData.data;
        console.log('otnuber ==>>', this.otnumber);
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  getTankDetails(data) {
    const id = '?vesselid=' + data;
    this.distileryService.getvessaldata(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        console.log('data of vessal --->>', responceData);
        this.receiverForm.patchValue({
          Availavlecapacity: responceData.data.availableCapacity
        });
      }
    });
  }

  getformdata(data) {
    if (this.receivebackend.length > 0) {
      var duplictae = this.receivebackend.find(item => item.otFermentationId == data.value.fermentationrefno);
      if (duplictae != undefined) {
        data.reset();
        this.alert.showError('Already this Tank added in Reciver Inward Details', 'error');
        return;
      }

    }

    const Fermentationrefno = {
      id: data.value.fermentationrefno,
      referenceNumber: this.refnumber.find(list => list.id == data.value.fermentationrefno).referenceNumber
    };

    console.log('recivfermetalnoo-->>', Fermentationrefno);


    if (this.editId) {
      if (this.otGridClick) {
        this.previewlist.push(this.reciverobj)

        this.receivetabledata.splice(this.otTableRowIndex, 1, {
          fermentationrefno: Fermentationrefno,
          fermentationofwash: this.reciverobj.fermentationofwash,
          otstartdateandtime: this.reciverobj.otstartdateandtime,
          strength: this.reciverobj.strength
        });
        this.receivebackend.splice(this.otTableRowIndex, 1, {
          fermentationTankId: this.vessalno,
          otFermentationId: this.reciverobj.fermentationrefno,
          strengths: this.reciverobj.strength,
          washQuantity: this.reciverobj.fermentationofwash
        });
        //  this.clear(data);
      } else {
        this.previewlist.push(this.reciverobj)
        this.receivetabledata.push({
          fermentationrefno: Fermentationrefno,
          fermentationofwash: this.reciverobj.fermentationofwash,
          otstartdateandtime: this.reciverobj.otstartdateandtime,
          strength: this.reciverobj.strength
        });
        this.receivebackend.push({
          fermentationTankId: this.vessalno,
          otFermentationId: this.reciverobj.fermentationrefno,
          strengths: this.reciverobj.strength,
          washQuantity: this.reciverobj.fermentationofwash
        });
        // this.clear(data);
      }
    } else {
      if (this.otGridClick) {
        this.previewlist.push(this.reciverobj)

        this.receivetabledata.splice(this.otTableRowIndex, 1, {
          fermentationrefno: Fermentationrefno,
          fermentationofwash: this.reciverobj.fermentationofwash,
          otstartdateandtime: this.reciverobj.otstartdateandtime,
          strength: this.reciverobj.strength
        });
        this.receivebackend.splice(this.otTableRowIndex, 1, {
          fermentationTankId: this.vessalno,
          otFermentationId: this.reciverobj.fermentationrefno,
          strengths: this.reciverobj.strength,
          washQuantity: this.reciverobj.fermentationofwash
        });

        console.log('receivertabledata after edit-->>', this.receivetabledata);
        console.log('receivertabledata after edit backend-->>', this.receivebackend);
        //  this.clear(data)

      } else {
        this.previewlist.push({
          fermentationrefno: Fermentationrefno,
          fermentationofwash: this.reciverobj.fermentationofwash,
          otstartdateandtime: this.reciverobj.otstartdateandtime,
          strength: this.reciverobj.strength,
          Inistialgravity: this.reciverobj.Inistialgravity,
          finalgravity: this.reciverobj.finalgravity,
          washAlcoholPercentage: this.reciverobj.fermentationofwash,
          spiritQty: this.reciverobj.fermentationavailquantity

        })
        this.receivetabledata.push({
          fermentationrefno: Fermentationrefno,
          fermentationofwash: this.reciverobj.fermentationofwash,
          otstartdateandtime: this.reciverobj.otstartdateandtime,
          strength: this.reciverobj.strength
        });
        this.receivebackend.push({
          fermentationTankId: this.vessalno,
          otFermentationId: this.reciverobj.fermentationrefno,
          strengths: this.reciverobj.strength,
          washQuantity: this.reciverobj.fermentationofwash
        });
        // this.clear(data);
        console.log('preview list data ==>>', this.previewlist);
        console.log('table data ==>>>', this.receivetabledata);



      }

      if (this.receivebackend.length > 0) {
        var result = this.receivebackend.reduce((sum, item) => sum + parseInt(item.washQuantity), 0);
        if (result > parseInt(this.receiverForm.get('Availavlecapacity').value)) {
          this.alert.showError('Sum Of Fermentation Quantity of wash less than or equal of Reciver Tank Availble Capacity', 'error');
          this.receivebackend.splice(-1, 1);
          this.receivetabledata.splice(-1, 1);
          this.previewlist.splice(-1, 1);
          this.reciverobj.fermentationofwash = '';
          return

        }

      }


    }
    // this.clear(data);
    this.clearform();


  }


  clearform() {
    this.reciverobj.fermentationrefno = '',
      this.reciverobj.fermentationvesselno = '',
      this.reciverobj.fermentationavailquantity = '',
      this.reciverobj.fermentationofwash = '',
      this.reciverobj.otstartdateandtime = ''
    this.reciverobj.Inistialgravity = ''
    this.reciverobj.finalgravity = '',
      this.reciverobj.alcoholpercentageinwash = '',
      this.reciverobj.strength = ''
  }
  getotdata(value) {
    if (value) {
      this.reciverobj.fermentationvesselno = '',
        this.reciverobj.otstartdateandtime = '',
        this.reciverobj.Inistialgravity = '',
        this.reciverobj.finalgravity = '',
        this.reciverobj.alcoholpercentageinwash = ''
      this.reciverobj.fermentationrefno = ''
      this.receiverForm.get('otstartdate').reset(),
        this.receiverForm.get('Availavlecapacity').reset();
      this.reciverobj.fermentationavailquantity = '',
        this.reciverobj.fermentationofwash = '',
        this.revtank = [];
      this.refnumber = [];

      console.log('value of otdata ===>>', value);
      // const otobj = this.otnumber.find(item => item.id == id);
      this.getrefnumber(value);
      this.getrecivertank(value);
      let date = this.datePipe.transform(this.otnumber[0].createdDate, 'dd/MM/yyyy');
      console.log('date ==>>', date);
      this.receiverForm.patchValue({
        otstartdate: date
      })

    } else {
      this.reciverobj.fermentationvesselno = '',
        this.reciverobj.otstartdateandtime = '',
        this.reciverobj.Inistialgravity = '',
        this.reciverobj.finalgravity = '',
        this.reciverobj.alcoholpercentageinwash = ''
      this.reciverobj.fermentationrefno = ''
      this.receiverForm.get('otstartdate').reset(),
        this.receiverForm.get('Availavlecapacity').reset();
      this.reciverobj.fermentationavailquantity = '',
        this.reciverobj.fermentationofwash = '',
        this.revtank = [];
      this.refnumber = [];

    }


  }

  removeSelectedRows(i, data) {
    this.receivetabledata.splice(i, 1);
    this.receivebackend.splice(i, 1)
    console.log('after removed -->>', this.receivetabledata);
    console.log('after removed -->>', this.receivebackend);
  }
  bindelements(i, data) {
    // this.editflag = true;
    this.otGridClick = true;
    // this.otTableRowIndex = i;
    console.log('data of table -->>', data);
    this.otTableRowIndex = i
    this.reciverobj.fermentationrefno = data.fermentationrefno.id,
      this.reciverobj.fermentationvesselno = '',
      this.reciverobj.fermentationavailquantity = '',
      this.reciverobj.fermentationofwash = data.fermentationofwash,
      this.reciverobj.otstartdateandtime = data.otstartdateandtime,
      this.reciverobj.Inistialgravity = '',
      this.reciverobj.finalgravity = '',
      this.reciverobj.alcoholpercentageinwash = '',
      this.reciverobj.strength = data.strength

    this.getautofillvalues(this.reciverobj.fermentationrefno);
  }

  getautofillvalues(id) {

    if (id != '') {
      let data = '?id=' + id;
      if (data) {
        this.distileryService.getrevautopopulate(data).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            console.log('responce data -->>', responceData.data);
            this.vessalno = responceData.data.tankRegistration.id;

            this.reciverobj.fermentationvesselno = responceData.data.tankRegistration.tankName,
              this.reciverobj.otstartdateandtime = this.datePipe.transform(responceData.data.otProductionPlanEntity.planDate, 'dd/mm/yyyy, h:MM:ss'),
              this.reciverobj.Inistialgravity = responceData.data.initialGravity,
              this.reciverobj.finalgravity = responceData.data.finalGravity,
              this.reciverobj.alcoholpercentageinwash = responceData.data.washAlcoholPercentage

            this.vessalcapacity(this.vessalno)
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });

      }

    }


  }



  vessalcapacity(data) {
    const id = '?vesselid=' + data;
    this.distileryService.getvessaldata(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.reciverobj.fermentationavailquantity = responceData.data.openingBalance;
        this.reciverobj.fermentationofwash = responceData.data.openingBalance
      }
    });
  }

  getsprint() {
    this.distileryService.getsprint().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.sprintdata = responceData.data
      }
    });
  }
  getviewdata(id) {
    let editid = '?id=' + id;
    this.distileryService.getrecverviewdata(editid).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        let tabledata = responceData.data.details;
        console.log('taledata of responce -->>', tabledata);

        // const fermentationrefno ={
        //   id:2490,
        //   name:'FP0001'
        // }
        this.receivetabledata = tabledata.map((data) => {
          return {
            "strength": data.strength,
            "otstartdateandtime": this.datePipe.transform(responceData.data.otStartDate, 'dd/mm/yyyy, h:MM:ss'),
            "fermentationofwash": data.finalWashQty,
            "fermentationrefno": data.otFermentation,
            "finalGravity": data.finalGravity,
            "initialGravity": data.initialGravity,
            "fermentationTank": data.fermentationTank
          }

        });

        this.receivebackend = tabledata.map((data) => {
          return {
            "fermentationTankId": data.fermentationTank.id,
            "otFermentationId": data.otFermentation.id,
            "strengths": data.strength,
            "washQuantity": data.finalWashQty

          }
        });
        console.log('tabledata of reciver ==>>', this.receivetabledata);
        console.log('tabledata of reciver from backend-->>', this.receivebackend);

        this.getotdata(responceData.data.otProductionPlanId);
        this.receiverForm.patchValue({
          otnumber: responceData.data.otProductionPlanId,
          otstartdate: this.datePipe.transform(responceData.data.otStartDate, 'dd/mm/yyyy, h:MM:ss'),
          sprintname: responceData.data.spiritId

        })

      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }
  saveData(form, status) {
    console.log('form data ---->>', form.value);

    let sprintname = this.sprintdata.find(list => list.id == form.value.sprintname).type;
    console.log('sprint name ==>>', sprintname);

    let payload = {

      otProductionPlanId: form.value.otnumber,
      receiverTankId: form.value.receivertank,
      spiritId: form.value.sprintname,
      spiritName: sprintname,
      receiverDetails: this.receivebackend,
      status: status

    }

    console.log('payload of create -->>', payload);

    if (this.editId) {
      payload['id'] = this.editId
      this.distileryService.recvupdate(payload).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/receiver/list']);

        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    } else {
      this.distileryService.recvcreate(payload).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/receiver/list']);

        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }


  }

  clear(data) {
    this.otGridClick = false
    data.reset();
  }

  reciverpriview(formdata) {
    console.log('formdata --->>', formdata.value);
    console.log('table data -->>', this.reciverobj);
    console.log('table data ==', this.previewlist);

    const otobject = {
      id: formdata.value.otnumber,
      otNumber: this.otnumber.find(list => list.id == formdata.value.otnumber).otNumber
    };
    const reciverobj = {
      id: formdata.value.receivertank,
      tankName: this.revtank.find(list => list.id == formdata.value.receivertank).tankName
    }
    const sprintobj = {
      id: formdata.value.sprintname,
      type: this.sprintdata.find(list => list.id == formdata.value.sprintname).type
    }

    let previewdata = {
      "viewtabledata": this.previewlist,
      "Otnumber": otobject.otNumber,
      "otnumberid": formdata.value.otnumber,
      "OTstartdate": formdata.value.otstartdate,
      "recivernumber": reciverobj.tankName,
      "reciverid": formdata.value.receivertank,
      "spiritName": sprintobj.type,
      "spiritid": formdata.value.sprintname,
      "backenddata": this.receivebackend,
      "tabledata": this.receivetabledata
    }

    this.formSubmitted = false;
    if (formdata.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.previews.setData = previewdata;
      this.router.navigate(['/supplychainmanagement/distillery/receiver/preview']);
    }

  }

  cancle() {
    this.previews.setData = ''
    this.router.navigate(['/supplychainmanagement/distillery/receiver/list']);
  }
}
