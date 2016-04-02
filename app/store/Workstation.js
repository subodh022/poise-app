Ext.define('Poise.store.Workstations', {
    extend: 'Ext.data.Store',
    alias: 'store.workstations',

    requires: [
        'Poise.model.Workstation'
    ],

    config: {
        model: 'Poise.model.Workstation',
        // autoLoad: true,
        storeId: 'Workstations',
        grouper: {
            groupFn: function(record) {
                return record.get('section_name');
            },
            sortProperty: 'section_name'
        },
        proxy: {
            type: 'rest',
            url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/work_stations.json',
            // url: 'http://localhost:3000/api/v1/work_stations.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'work_station'
            }
        }
    }
});
