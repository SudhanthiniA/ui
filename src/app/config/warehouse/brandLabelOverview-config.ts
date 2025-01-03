export class BrandLabelOverViewConfig {

    public static titleSection = {
      list: {
        title: 'dispatch Registration',
        button: {
          text: 'Add dispatch UP WareHouse',
          url: '/supplychainmanagement/warehouse/dispatch/add'
        }
      },
      add: {
        title: 'Warehouse'
      },
      edit: {
        title: '/supplychainmanagement/warehouse/dispatch/edit'
  
      },
      view: {
        title: '/supplychainmanagement/warehouse/dispatch/view'
      }
    };
  
  
  
    public static breadcrumbs = [
      // {
      //   text: 'Warehouse',
      //   url: '/supplychainmanagement/warehouse/importpermit/list',
      //   hasHref: true
      // },
      // {
      //   text: 'Brand Registration',
      //   url: '/supplychainmanagement/warehouse/importpermit/list',
      //   hasHref: true
      // }
    ];

//   here we need to change name values. 
//   once api redy integrated those values.
    public static columns = [
       
        {
            name: "id",
            displayName: "#",
            type: "number",
        },
        {
            name: "brandValue",
            displayName: "Brand Name",
            type: "string",
        },
        {
            name: "liquorTypeValue",
            displayName: "Liquor Type",
            type: "string",
        },
        {
            name: "subLiquorTypeValue",
            displayName: "Sub Liquor Type",
            type: "string",
        },
        {
            name: "validityOfReg",
            displayName: "Validity of Registration",
            type: "string",
            // dateFormat: "dd-MMM-yyyy",
        },
        
        ];
  }