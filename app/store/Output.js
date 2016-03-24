Ext.define('Poise.store.Outputs', {
    extend: 'Ext.data.Store',
    alias: 'store.outputs',

    requires: [
        'Poise.model.Output',
        'Ext.data.proxy.Rest'
    ],

    config: {
        model: 'Poise.model.Output',
        // autoLoad: true,
        storeId: 'Outputs',
        proxy: {
            type: 'rest',
            url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/hourly_outputs.json',
            // url: 'http://localhost:3000/api/v1/hourly_outputs.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'hourly_output'
            }
        }
    }
});
