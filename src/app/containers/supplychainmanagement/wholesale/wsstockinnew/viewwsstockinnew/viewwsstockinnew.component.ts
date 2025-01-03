import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WholesaleStockinService } from '@app/services';

@Component({
  selector: 'app-viewwsstockinnew',
  templateUrl: './viewwsstockinnew.component.html',
  styleUrls: ['./viewwsstockinnew.component.scss']
})
export class ViewwsstockinnewComponent implements OnInit {
  StockInObj:any
  unitList:any;
  stockInPro:any;
  indentNumber ="INR101623139536122"
  unitDetails:any;
  damage:any;
  indentdetails:any;
  currentdate = new Date();
  damage1:any;
  damagelist:any;
  @ViewChild('caseDetails', { static: false }) caseDetails;
  constructor(
    private wholesalestockinservice: WholesaleStockinService,
    private route: ActivatedRoute,
  ) { }
  DamagedMissing:any = [
    { 
    totMissedCases : 0,
    totMissedBottles : 2,
    totDamagedCases :0,
    totDamagedBottles :2,
    receivedDate:"04-05-2021",
    receivedBy:"singh",
    list:[
      {
        issueType : "Bottle Missing",
        damagedType : "",
      noOfDamagedCases :0,
        noOfMissingCases : 0,
        noOfDamagedBottles : 0,
        noOfMissingBottles : 2,
      },
      {
        issueType : "Bottles Damaged",
        damagedType : "QR Readable",
      noOfDamagedCases :0,
        noOfMissingCases : 0,
        noOfDamagedBottles : 2,
        noOfMissingBottles : 0,
      }
    ]
    }, 
]
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
       
       let id = params['id'];  
       console.log("parama id "+id)      
        this.GetIndentById(id)
        // this.show=false
      }
    });
  }
  
  caseModal() {
    this.caseDetails.show()
  }
  qrcodetailsobj: any = {
    // transportPassDetails: [
    //   {
    //     transportPassNumber: "TRA23922",
    //     issuedDate: "20-Apr-2021",
    //     numberOfIndents: "3",
    //     transportPass: "transpass.pdf",
    //   }
    // ],
    // licenseTypeDetails: [
    //   {
    //     licenseType: "FL3A",
    //     unitName: "Unit1",
    //     unitAddress: "Plot No. 12we,nb nagar, Karnataka, Bangalore, Bangalore, Shivaji nagar, Majestic, 500011",
    //   }
    // ],

    indentNumberDetails: [
      {
        indentNumber: "6234723922",
        indentDate: "20-Mar-2021",
        noofCasesRequested: "600",
        noofBottlesRequested: "6000",
        noofCasesSupplied: "200",
        totalNumberOfBottlesSupplied: "2000",
        stockindetails: [{
          brandname: 'Kingfisher',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "300",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "300"
        }, {
          brandname: 'Redwine',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "50",
          noofBottlesRequested: "500",
          noofCasesSupplied: "50",
          totalNumberOfBottlesSupplied: "500"
        }, {
          brandname: 'Bacardi',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "35",
          noofBottlesRequested: "350",
          noofCasesSupplied: "35",
          totalNumberOfBottlesSupplied: "350"
        }],
       
  


      },
     
      {
        indentNumber: "6238975655",
        indentDate: "20-apr-2021",
        noofCasesRequested: "60",
        noofBottlesRequested: "600",
        noofCasesSupplied: "60",
        totalNumberOfBottlesSupplied: "600",
       
        stockindetails: [{
          brandname: 'Greenlabel',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }, {
          brandname: 'Redwine',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }, {
          brandname: 'Bacardi',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }]


      }, {
        indentNumber: "6232229992",
        indentDate: "20-apr-2021",
        noofCasesRequested: "200",
        noofBottlesRequested: "2000",
        noofCasesSupplied: "200",
        totalNumberOfBottlesSupplied: "2000",
        stockindetails: [{
          brandname: 'Signature',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "200",
          noofBottlesRequested: "200",
          noofCasesSupplied: "10",
          totalNumberOfBottlesSupplied: "100"
        }, {
          brandname: 'IB',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "36",
          noofBottlesRequested: "360",
          noofCasesSupplied: "40",
          totalNumberOfBottlesSupplied: "400"
        }, {
          brandname: 'Bacardi',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }]


      }

    ],
    indentDetails:[
      {
      issutype:'Damaged botteles',
      damageType:'damaged',
      noOfDamagedCases:'2',
      noOfMissingCases:'3',
      noOfDamagedBotteles:'200',
      nOfMissingBotteles:'100',
    },
    {
      issutype:'Damaged cases',
      damageType:'damaged1',
      noOfDamagedCases:'3',
      noOfMissingCases:'4',
      noOfDamagedBotteles:'300',
      nOfMissingBotteles:'200',
    },
    {
      issutype:'Damaged botteles2',
      damageType:'damaged3',
      noOfDamagedCases:'1',
      noOfMissingCases:'2',
      noOfDamagedBotteles:'400',
      nOfMissingBotteles:'300',
    },
  ],
  }
    stockinobj = {
    isstype: '',
    damagetype: '',
    damagecases: '',
    missingcases: '',
    missingbottle: '',
    damagebottle: '',
    recieveddate: '',
    recievedby: ''
  }
  
  GetIndentById(id) {
    // const url = 'WholesaleStockInList'+'/'+id
    this.wholesalestockinservice.getStockbyid(id).subscribe((response:any)=>{
      this.StockInObj = response.data;
      this.indentdetails = this.StockInObj.stockInDetailsLst;
      this.stockInPro = this.StockInObj.stockInDetailsLst[0].stockInProducts;
      this.unitList = this.StockInObj.stockInDetailsLst[0].wholesaleIndentRequest;
      console.log("indentdetails:"+this.unitList)
     this.unitDetails = this.unitList.indentRequestDetails;
      // console.log(this.unitDetails);
      
      this.StockInObj.stockInDetailsLst.forEach((element: any, idx: number) => {
        this.unitList = this.StockInObj.stockInDetailsLst;
        //console.log("indentdetails:"+this.unitList)
       
      });
      if(this.StockInObj.isAnyDamages == null || this.StockInObj.isAnyDamages == false){
        this.damage = "No"
      }
      else{
        this.damage = "Yes"
      }
      this.DamagedMissing.forEach((element: any, idx: number) => {
        this.damage1 =  this.DamagedMissing[idx]
        this.damagelist = this.damage1.list
      });
      console.log(this.damage1);
      console.log(this.damagelist);
    })
  }
}
