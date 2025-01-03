export class orderpickconfig {


    public static pendings = [
        {
            name: 'id',
            displayName:'wholesale.orderpickupdetails.sno',
            type: 'number'
        },
        {
            name: 'indentDate',
            displayName: 'wholesale.orderpickupdetails.indentdate',
            displayFcn: (item: any) => item.indentDate,
            type: 'date'
        },
        {
            name: 'indentNo',
            displayName: 'wholesale.orderpickupdetails.indentnumber',
            displayFcn: (item: any) => item.indentNo,
            type: 'objstring'
        },

        {
            name: 'unitName',
            displayName: 'wholesale.orderpickupdetails.unitname',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'totCasesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedcases',
           displayFcn: (item: any) => item.totCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totBottlesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedbottles',
            displayFcn: (item: any) => item.totBottlesRequested,
            type: 'objstring'
        },
        {
            name: 'orderPickUpStatus',
            displayName: 'wholesale.orderpickupdetails.status',
           // displayFcn: (item: any) => item.orderPickUpStatus,
            type: 'options',
            badgeColors: {
                PENDING: 'badge-warning',
                DRAFT: 'badge-warning'
            }


        },
    ];
    public static Inprogress = [
        {
            name: 'id',
            displayName: 'wholesale.orderpickupdetails.sno',
            type: 'number'
        },
        {
            name: 'indentDate',
            displayName: 'wholesale.orderpickupdetails.indentdate',
            displayFcn: (item: any) => item.indentDate,
            type: 'date'
        },
        {
            name: 'indentNo',
            displayName: 'wholesale.orderpickupdetails.indentnumber',
            displayFcn: (item: any) => item.indentNo,
            type: 'objstring'
        },

        {
            name: 'unitName',
            displayName: 'wholesale.orderpickupdetails.unitname',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'totCasesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedcases',
           displayFcn: (item: any) => item.totCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totBottlesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedbottles',
            displayFcn: (item: any) => item.totBottlesRequested,
            type: 'objstring'
        },
        {
            name: 'orderPickUpStatus',
            displayName: 'wholesale.orderpickupdetails.status',
            // displayFcn: (item: any) => item.orderPickUpStatus,
            type: 'options',
            badgeColors: {
                INPROGRESS: 'badge-success',
                DRAFT: 'badge-warning'
            }

        },
    ];
    public static completetd = [
        {
            name: 'id',
            displayName: 'wholesale.orderpickupdetails.sno',
            type: 'number'
        },
        {
            name: 'indentDate',
            displayName: 'wholesale.orderpickupdetails.indentdate',
            displayFcn: (item: any) => item.indentDate,
            type: 'date'
        },
        {
            name: 'indentNo',
            displayName: 'wholesale.orderpickupdetails.indentnumber',
            displayFcn: (item: any) => item.indentNo,
            type: 'objstring'
        },

        {
            name: 'unitName',
            displayName: 'wholesale.orderpickupdetails.unitname',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'totCasesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedcases',
            displayFcn: (item: any) => item.totCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totBottlesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedbottles',
            displayFcn: (item: any) => item.totBottlesRequested,
            type: 'objstring'
        },
        {
            name: 'orderPickUpStatus',
            displayName: 'wholesale.orderpickupdetails.status',
//displayFcn: (item: any) => item.orderPickUpStatus,
            type: 'options',
            badgeColors: {
                COMPLETED: 'badge-success',
                DRAFT: 'badge-warning'
            }


        },
    ];
}