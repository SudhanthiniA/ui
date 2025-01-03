export class StockInHand {


    public static Completed = [
        {
            name: 'id',
            displayName: 'sugarmill.inspectionreport.sno',
            type: 'number'
        },
        
        {
            name: 'productLibrary?.brandNameValue',
            displayName: 'master.brand.brandname',
            displayFcn: (item: any) => item.productLibrary.brandNameValue,
            type: 'objstring'
        },
        {
            name: 'productLibrary?.liquorTypeValue',
            displayName: 'master.liquortype.liquortype',
             displayFcn: (item: any) => item.productLibrary.liquorTypeValue,
            type: 'objstring'
        },
        {
            name: 'productLibrary?.liquorSubTypeValue',
            displayName: 'master.subLiquorType.subliquortype',
            displayFcn: (item: any) => item.productLibrary.liquorSubTypeValue,
            type: 'objstring'
        },
        {
            name: 'productLibrary?.packageSizeValue',
            displayName: 'wholesale.stockinhand.packagesize',
            displayFcn: (item: any) => item.productLibrary.packageSizeValue,
            type: 'objstring'
        },
        {
            name: 'availableCases',
            displayName: 'retail.common.availablecases',
            displayFcn: (item: any) => item.availableCases,
            type: 'objstring'
        },
        {
            name: 'availableBottles',
            displayName: 'retail.stockavailability.availablebottles',
            displayFcn: (item: any) => item.availableBottles,
            type: 'objstring'
        },
       
        
    ];
}