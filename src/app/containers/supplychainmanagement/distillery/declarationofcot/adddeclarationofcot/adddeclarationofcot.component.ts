import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddeclarationofcot',
  templateUrl: './adddeclarationofcot.component.html',
  styleUrls: ['./adddeclarationofcot.component.scss']
})
export class AdddeclarationofcotComponent implements OnInit {

  declarationofcot={
    otproductionplanid:'',
    otnumber1:'',
    quantityofwashdistilleddate:'',
    finalgravityoffermentedwash:'',
    alcoholpercentageinfermentedwash:'',
    receiverno1:'',
    quantityofalcohol:'',
    tempratureofalcohol:'',
    indicationofalcohol:'',
    strength:'',
    alcoholproductioninbl:'',
    otnumber2:'',
    quantityofwashdistilledtilldate2:'',
    finalgravityoffermentedwash2:'',
    alcoholpercentageinfermentedwash2:'',
    reciverno2:'',
    quantityofalcohol2:'',
    tempratureofalcohol2:'',
    indicationofalcohol2:'',
    strength2:'',
    alcoholproductioninbl2:'',
    otnumber3:"",
    quantityofwashdistilleddate3:'',
    finalgravityofgermentedwash3:'',
    alcoholpercentageinfermentedwash3:'',
    receiverno3:'',
    quantityofalcohol3:'',
    tempratureofalcohol3:'',
    indicationofalcohol3:'',
    strength3:'',
    alcoholproductioninbl3:''

  }

  constructor() { }

  ngOnInit() {
  }


  submitedata(declaretion){
    console.log('declaration data -->>',declaretion.value);
    
  }
}
