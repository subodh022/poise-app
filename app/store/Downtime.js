Ext.define('Poise.store.Downtimes', {
    extend: 'Ext.data.Store',
    alias: 'store.downtimes',

    requires: [
        'Poise.model.Downtime',
        'Ext.data.proxy.Rest'
    ],

    config: {
        model: 'Poise.model.Downtime',
        // autoLoad: true,
        storeId: 'Downtimes',
        proxy: {
            type: 'rest',
            url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/machine_downtimes.json',
            // url: 'http://localhost:3000/api/v1/machine_downtimes.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'machine_downtime'
            }
        }
    }
});
