Ext.define('Poise.store.DynamicWorkstations', {
    extend: 'Ext.data.Store',
    alias: 'store.dynamic_workstations',

    requires: [
        'Poise.model.Workstation'
    ],

    config: {
        model: 'Poise.model.Workstation',
        storeId: 'DynamicWorkstations',
        remoteSort: true,
        // sorters: [
        //     {
        //         property: 'ws_id',
        //         direction: 'ASC'
        //     }
        // ],
        grouper: {
            groupFn: function(record) {
                return '<i class="fa fa-tag"></i> Section: ' + record.get('section_name');
            }
            // sortProperty: 'section_id'
        },
        proxy: {
            type: 'rest',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/ws_list.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'work_station'
            }
        }
    }
});
