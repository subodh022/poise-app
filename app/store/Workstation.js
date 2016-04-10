Ext.define('Poise.store.Workstations', {
    extend: 'Ext.data.Store',
    alias: 'store.workstations',

    requires: [
        'Poise.model.Workstation'
    ],

    config: {
        model: 'Poise.model.Workstation',
        storeId: 'Workstations',
        grouper: {
            groupFn: function(record) {
                return record.get('section_name');
            }
            // sortProperty: 'section_id, id'
        },
        proxy: {
            type: 'rest',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/work_stations.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'work_station'
            }
        }
    }
});
