export class Indentrequestconfig {

  public static breadcrumbs = [
    {
      text: 'Wholesale',
      url: '/wholesale/indentrequestnew/list',
      hasHref: true
    },
    {
      text: 'Indent Request',
      url: '/wholesale/indentrequestnew/list',
      hasHref: true
    },
    {
      text: 'List',
      url: '/wholesale/indentrequestnew/list',
      hasHref: true
    },
    // {
    //   text: 'master.common.list',
    //   hasHref: false
    // }
  ]
  public static columns = [
    {
      name: 'id',
      displayName: 'wholesale.indentrequest.slno',
      type: 'number'
    },
    {
      name: 'indentDate',
      displayName: 'wholesale.indentrequest.indentdate',
      type: 'date'
    },
    {
      name: 'indentNo',
      displayName: 'wholesale.indentrequest.indentno',
      type: 'string'
    },
    {
      name: 'unitType',
      displayName: 'wholesale.indentrequest.unittype',
      displayFcn: (item: any) => item.unitType,
      type: 'objstring'
    },
    {
      name: 'unitName',
      displayName: 'wholesale.indentrequest.unitname',
      displayFcn: (item: any) => item.unitName,
      type: 'objstring'
    },
    {
      name: 'totNoOfCases',
      displayName: 'wholesale.indentrequest.totalcases',
      displayFcn: (item: any) => item.totNoOfCases,
      type: 'objstring'
    },
    {
      name: 'totNoOfBottles',
      displayName: 'wholesale.indentrequest.totalbottles',
      displayFcn: (item: any) => item.totNoOfBottles,
      type: 'objstring'
    },
    {
      name: 'status',
      displayName: 'wholesale.indentrequest.status',
      type: 'options',
      badgeColors: {
        SUBMITTED: 'badge-success',
        DRAFT: 'badge-warning'
      }
    },
    /*{
      name: 'indentRequestDetails?.indentRequestStatus',
      displayName: 'wholesale.indentrequest.status',
      displayFcn: (item: any) => item.indentRequestDetails.indentRequestStatus,
      type: 'objstring'
      // badgeColors: {
      //   SUBMITTED: 'badge-success',
      //   DRAFT: 'badge-warning'
      // }
    },*/
  ];
}