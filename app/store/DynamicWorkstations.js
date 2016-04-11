Ext.define('Poise.store.DynamicWorkstations', {
    extend: 'Ext.data.Store',
    alias: 'store.dynamic_workstations',

    requires: [
        'Poise.model.DynamicWorkstation'
    ],

    config: {
        model: 'Poise.model.DynamicWorkstation',
        storeId: 'DynamicWorkstations',
        grouper: {
            groupFn: function(record) {
                return record.get('section_name');
            },
            sortProperty: 'section_id'
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
