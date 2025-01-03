export class transPortPassGenration {


    public static Inprogress = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'issueDate',
            displayName: 'wholesale.transportpassgen.issuedate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date'
        },
        
        {
            name: 'transportDate',
            displayName: 'wholesale.transportpassgen.transportdate',
            displayFcn: (item: any) => item.transportDate,
            type: 'date'
        },
        {
            name: 'transportNo',
            displayName: 'wholesale.transportpassgen.transportpassno',
             displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'unitName',
            displayName: 'wholesale.transportpassgen.unitname',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.transportpassgen.totalnoofcasesreq',
            // displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'string'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.transportpassgen.totalnofbottlesreq',
            //  displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'string'
        },
        {
            name: 'transportPassStatus',
            displayName: 'wholesale.common.status',
            // displayFcn: (item: any) => item.transportPassStatus,
            type: 'options',
            badgeColors: {
                INPROGRESS: 'badge-warning',
                DRAFT: 'badge-warning'
            }

        },
    ];
    public static Completed = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'issueDate',
            displayName: 'wholesale.transportpassgen.issuedate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date'
        },
        
        {
            name: 'transportDate',
            displayName: 'wholesale.transportpassgen.transportdate',
            displayFcn: (item: any) => item.transportDate,
            type: 'date'
        },
        {
            name: 'transportNo',
            displayName: 'wholesale.transportpassgen.transportpassno',
             displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'unitName',
            displayName: 'wholesale.transportpassgen.unitname',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.transportpassgen.totalnoofcasesreq',
            type: 'string'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.transportpassgen.totalnofbottlesreq',
            type: 'string'
        },
        {
            name: 'transportPassStatus',
            displayName: 'wholesale.common.status',
            // displayFcn: (item: any) => item.transportPassStatus,
            type: 'options',
            badgeColors: {
                COMPLETED: 'badge-success',
                DRAFT: 'badge-warning'
            }

        },
    ];
    public static Canceled = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'issueDate',
            displayName: 'wholesale.transportpassgen.issuedate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date'
        },
        
        {
            name: 'transportDate',
            displayName: 'wholesale.transportpassgen.transportdate',
            displayFcn: (item: any) => item.transportDate,
            type: 'date'
        },
        {
            name: 'transportNo',
            displayName: 'wholesale.transportpassgen.transportpassno',
             displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'unitName',
            displayName: 'wholesale.transportpassgen.unitname',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.transportpassgen.totalnoofcasesreq',
            // displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'string'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName:'wholesale.transportpassgen.totalnofbottlesreq',
            //  displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'string'
        },
        {
            name: 'transportPassStatus',
            displayName: 'wholesale.common.status',
            // displayFcn: (item: any) => item.transportPassStatus,
            type: 'options',
            badgeColors: {
                CANCELLED: 'badge-warning',
                DRAFT: 'badge-warning'
            }

        },
    ];
}
