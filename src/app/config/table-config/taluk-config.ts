export class TalukConfig {

    public static titleSection = {
      list: {
          title: 'master.taluk.list',
          button: {
              text: 'master.taluk.add',
              url: '/location/taluk/add'
          }
      },
      add: {
          title: 'master.taluk.list'
      },
      edit: {
          title: 'master.taluk.list'
      },
      view: {
          title: 'master.taluk.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/taluk/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/taluk/list',
        hasHref: true
      },
      {
          text: 'master.common.taulk',
          url: '/location/taluk/list',
          hasHref: true
        },
      // {
      //   text: 'master.common.list',
      //   hasHref: false
      // }
    ];

    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'talukName',
        displayName: 'master.common.taulk',
        type: 'string'
      },
      {
        name: 'stateName',
        displayName: 'master.common.state',
        type: 'string'
      },
      {
        name: 'districtName',
        displayName: 'master.district.district',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }