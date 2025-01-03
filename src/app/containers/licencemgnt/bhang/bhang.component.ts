import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhang',
  templateUrl: './bhang.component.html',
  styleUrls: ['./bhang.component.scss']
})
export class BhangComponent implements OnInit {

  bhangLicenceObjs = [
    {
      titleText: 'ID-14A',
      descText: 'License for the retail sale of Bhang in districts under the auction system',
      url: '/licencemgnt/bhang/id14a'
    },
    {
      titleText: 'ID-14B',
      descText: 'License for the retail sale of Bhang under tender cum auction system',
      url: '/licencemgnt/bhang/id14b'
    },
    {
      titleText: 'ID-15',
      descText: 'License to collect as Bhang,hemp plants growing spontaneously and removal of the same to contract warehouses or sale to other supply contractors of uttar Pradesh',
      url: '/licencemgnt/bhang/id15'
    },
    {
      titleText: 'ID-16',
      descText: 'License for the wholesale vend of Bhang granted to a supply contractor holding license in Form I.D.15 for export to other State in India',
      url: '/licencemgnt/bhang/id16'
    },
    {
      titleText: 'CL-7',
      descText: 'License for the exclusive privilege of manufacturing and of selling Tari and Sendhi by retail.',
      url: '/licencemgnt/bhang/cl7/list'
    },
    {
      titleText: 'CL-8',
      descText: 'License for the manufacture and retail vend of Tari and Sendhi under farming system.',
      url: '/licencemgnt/bhang/cl8/list'
    },
    {
      titleText: 'CL-9',
      descText: 'License for the manufacture and retail vend of Tari and Sendhi granted by the Collector under the shop- to - shop system.',
      url: '/licencemgnt/bhang/cl9/list'
    },
    {
      titleText: 'CL-10',
      descText: 'License for the manufacture and retail vend of Tari and Sendhi under the tree tax system in respect of shops settled under the surcharge system.',
      url: '/licencemgnt/bhang/cl10/list'
    },
    {
      titleText: 'CL-10A',
      descText: 'License for the manufacture and retail vend of Tari and Sendhi under the tender- cum - tree tax system / auction - cum - tree tax system.',
      url: '/licencemgnt/bhang/cl10a/list'
    },
    {
      titleText: 'CL-11',
      descText: 'Licence for the Manufacturing by tharus of rice spirit for domestic consumption only.',
      url: '/licencemgnt/bhang/cl11/list'
    },
    {
      titleText: 'CL-12',
      descText: 'Licence for the manufacturing of pachwai or rice beer or gan for domestic consupmtion only by person granted special exemptions',
      url: '/licencemgnt/bhang/cl12/list'
    },
    {
      titleText: 'ID-3',
      descText: 'License for the wholesale supply of Bhang under the contract supply system',
      url: '/licencemgnt/bhang/id3/list'
    },
    {
      titleText: 'ST-I',
      descText: 'License for the tapping of Nira producing trees and drawing Nira therefrom for the manufacture of Gur or any other similar product',
      url: '/licencemgnt/bhang/st1/list'
    },
    {
      titleText: 'ST-II',
      descText: 'License to tap and draw Nira from the Nira producing trees for the supply of Nira(1)to persons manufacturing Gur(jaggery)or any other similar product or(2)to licensed to sell Nira by retail for consumption on premises',
      url: '/licencemgnt/bhang/st2/list'
    },
    {
      titleText: 'ST-III',
      descText: 'Licensed for the retail sale of Nira for consumption on premises',
      url: '/licencemgnt/bhang/st3/list'
    },
    {
      titleText: 'ST-IV',
      descText: 'License to tap own Nira producing trees and draw Nira there from for bonafide private consumption of Nira and not for sale',
      url: '/licencemgnt/bhang/st4/list'
    }
  ];

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata')
  }

}
