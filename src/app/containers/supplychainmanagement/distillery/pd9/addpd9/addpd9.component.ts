import { Component, OnInit } from '@angular/core';
import { Pd9Service, DistileryService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-addpd9',
  templateUrl: './addpd9.component.html',
  styleUrls: ['./addpd9.component.scss']
})
export class Addpd9Component implements OnInit {

  formSubmitted = false;
  refdata: any;
  editId: any;
  desibleflag = false;

  pd9data: any = {
    referenceno: '',
    pd9date: '',
    datewhentostill: '',
    washbackno: '',
    bulklitterofwashback: '',
    initialgravity: '',
    finalgravity: '',
    degreeofautonation: '',
    improvespritofalcohal: '',
    reciverno: '',
    dip: '',
    temperature: '',
    indication: '',
    strength: '',
    bulklitters: '',
    alcoholiclitresofimpurespirit: '',
    Alcoholiclitresoffinishedspiritpassedintostore: '',
    Datewhenpassed: '',
    Totalproducedofdistillation: '',
    Percentage_ofoutturnof_alcoholic_litres: '',
    Degree_of_attenuation_for_each_per_litres_of_wash: '',
    Quantity_of_Molasses: '',
    Yield_AlQtl: ''
  };
  addedit: any;

  constructor(
    private pd9service: Pd9Service,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert: AlertService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.getreference();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.pd9getbyid(params.id);
        this.editId = params.id;
        this.desibleflag = true;
      } else {
        this.pd9getbyid();
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  pd9getbyid(id?) {
    if (id) {
      const data = '?id=' + id;
      this.pd9service.pd9gebyid(data).subscribe((responseData: any) => {
        console.log('res of data -->>', responseData.data);
        const pd9data = responseData['data'];
        this.pd9data.referenceNumber = pd9data.referenceNumber;
        this.pd9data.pd9date = this.datePipe.transform(pd9data.setupDate, 'yyyy-MM-dd');
        this.pd9data.datewhentostill = this.datePipe.transform(pd9data.stillDate, 'yyyy-MM-dd');
        this.pd9data.washbackno = pd9data.washBackNum;
        this.pd9data.initialgravity = pd9data.intialGravity;
        this.pd9data.finalgravity = pd9data.finalGravity;
        this.pd9data.reciverno = pd9data.receiverNum;
        this.pd9data.dip = pd9data.dip;
        this.pd9data.temperature = pd9data.temperature;
        this.pd9data.indication = pd9data.indication;
        this.pd9data.strength = pd9data.strength;
        this.pd9data.bulkLitres = pd9data.bulkLitres;
        this.pd9data.alcoholiclitresofimpurespirit = pd9data.alcoholPercent;
        this.pd9data.Degree_of_attenuation_for_each_per_litres_of_wash = pd9data.degreeAttenuation;
        this.pd9data.Alcoholiclitresoffinishedspiritpassedintostore = pd9data.impureSpirit;
        this.pd9data.Quantity_of_Molasses = pd9data.molassesQty,
        this.pd9data.Datewhenpassed = pd9data.passedDate;
        this.pd9data.Datewhenpassed = this.datePipe.transform(pd9data.passedDate, 'yyyy-MM-dd');
        this.pd9data.referenceno = pd9data.productionPd8Id;
        this.pd9data.Totalproducedofdistillation = pd9data.totalProduced;
        this.pd9data.Yield_AlQtl = pd9data.yield;
        this.pd9data.Percentage_ofoutturnof_alcoholic_litres = pd9data.bulkLitres;
        console.log('data of getbyid time-->>', this.pd9data.percentageofallier);
      });
    } else {
      if (this.distileryService.setPreview) {
        // let pd9data = JSON.parse(sessionStorage.getItem('pd9data'));
        const pd9data = this.distileryService.setPreview;
        console.log('preveiw data -->>', pd9data);
        this.pd9data.referenceNumber = pd9data.referenceNumber;
        this.pd9data.pd9date = this.datePipe.transform(pd9data.pd9date, 'yyyy-MM-dd');
        this.pd9data.datewhentostill = this.datePipe.transform(pd9data.datewhentostill, 'yyyy-MM-dd');
        this.pd9data.washbackno = pd9data.washbackno;
        this.pd9data.initialgravity = pd9data.initialgravity;
        this.pd9data.finalgravity = pd9data.finalgravity;
        this.pd9data.reciverno = pd9data.reciverno;
        this.pd9data.dip = pd9data.dip;
        this.pd9data.temperature = pd9data.temperature;
        this.pd9data.indication = pd9data.indication;
        this.pd9data.strength = pd9data.strength;
        this.pd9data.bulkLitres = pd9data.bulkLitres;
        this.pd9data.alcoholiclitresofimpurespirit = pd9data.alcoholiclitresofimpurespirit;
        this.pd9data.Degree_of_attenuation_for_each_per_litres_of_wash = pd9data.Degree_of_attenuation_for_each_per_litres_of_wash;
        this.pd9data.Alcoholiclitresoffinishedspiritpassedintostore = pd9data.Alcoholiclitresoffinishedspiritpassedintostore;
        this.pd9data.Quantity_of_Molasses = pd9data.Quantity_of_Molasses,
        this.pd9data.Datewhenpassed = pd9data.Datewhenpassed;
        this.pd9data.Datewhenpassed = this.datePipe.transform(pd9data.Datewhenpassed, 'yyyy-MM-dd');
        this.pd9data.referenceno = pd9data.referenceno;
        this.pd9data.Totalproducedofdistillation = pd9data.Totalproducedofdistillation;
        this.pd9data.Yield_AlQtl = pd9data.Yield_AlQtl;
        this.pd9data.Percentage_ofoutturnof_alcoholic_litres = pd9data.Percentage_ofoutturnof_alcoholic_litres;
      }
    }
  }
  getreference() {
    this.pd9service.getreferenceno().subscribe(res => {
      this.refdata = res.data;
    });
  }

  pd9save(data, method) {
    console.log('form data -->>>>', data.value);
    console.log('validation==>>', data);

    this.formSubmitted = false;
    if (data.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const postdata = {
          id: this.editId,
          alcoholPercent: data.value.Percentage_ofoutturnof_alcoholic_litres,
          degreeAttenuation: data.value.Degree_of_attenuation_for_each_per_litres_of_wash,
          finishedSpirit: data.value.Alcoholiclitresoffinishedspiritpassedintostore,
          impureSpirit: data.value.alcoholiclitresofimpurespirit,
          molassesQty: data.value.Quantity_of_Molasses,
          passedDate: data.value.Datewhenpassed,
          productionPd8Id: this.pd9data.referenceno,
          // productionPd8Id:1,
          status: method,
          totalProduced: data.value.Totalproducedofdistillation,
          yield: data.value.Yield_AlQtl
        };

        this.pd9service.updatedata(postdata).subscribe((responseData: any) => {
          this.handleResponse(responseData);
        });

      } else {
        const postdata = {
          alcoholPercent: data.value.Percentage_ofoutturnof_alcoholic_litres,
          degreeAttenuation: data.value.Degree_of_attenuation_for_each_per_litres_of_wash,
          finishedSpirit: data.value.Alcoholiclitresoffinishedspiritpassedintostore,
          impureSpirit: data.value.alcoholiclitresofimpurespirit,
          molassesQty: data.value.Quantity_of_Molasses,
          passedDate: data.value.Datewhenpassed,
          productionPd8Id: data.value.referenceno,
          status: method,
          totalProduced: data.value.Totalproducedofdistillation,
          yield: data.value.Yield_AlQtl
        }
        console.log('create data -->>', postdata);

        this.pd9service.addpd9data(postdata).subscribe((responseData: any) => {
          this.handleResponse(responseData);
        });
      }
    }
  }

  handleResponse(responceData: any) {
    if (responceData.status === 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/pd9/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  previewPd9() {
    console.log('pd9b payload ---->>', this.pd9data);
    // sessionStorage.setItem('pd9data', JSON.stringify(this.pd9data));
    this.distileryService.setPreview = this.pd9data;
    this.router.navigate(['/supplychainmanagement/distillery/pd9/preview']);
  }

  cancle() {
    this.distileryService.setPreview = '';
    this.router.navigate(['/supplychainmanagement/distillery/pd9/list'])
  }

  getautopopulate(ref) {
    console.log('reference number --->>', ref.value);
    // this.getreference();
    console.log('refdata -->>', this.refdata);

    if (ref.value !== '') {
      this.pd9data.pd9date = this.datePipe.transform(this.refdata[0].from, 'yyyy-MM-dd');
      this.pd9data.datewhentostill = this.datePipe.transform(this.refdata[0].to, 'yyyy-MM-dd');
      this.pd9data.washbackno = this.refdata[0].washNumber;
      // this.pd9data.bulklitterofwashback = this.refdata.washNumber;
      this.pd9data.initialgravity = this.refdata[0].initialSpGravity;
      this.pd9data.finalgravity = this.refdata[0].finalSpGravity;
      // this.pd9data.degreeofautonation = this.refdata.degreeofautonation;

      // this.pd9data.improvespritofalcohal = this.refdata.improvespritofalcohal;
      this.pd9data.reciverno = this.refdata[0].receiverNum;
      this.pd9data.dip = this.refdata[0].dip;
      this.pd9data.temperature = this.refdata[0].temperature;
      this.pd9data.indication = this.refdata[0].indication;
      this.pd9data.strength = this.refdata[0].strength;
    }
  }

}
