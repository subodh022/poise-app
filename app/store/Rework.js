Ext.define('Poise.store.Reworks', {
    extend: 'Ext.data.Store',
    alias: 'store.reworks',

    requires: [
        'Poise.model.Rework',
        'Ext.data.proxy.Rest'
    ],

    config: {
        model: 'Poise.model.Rework',
        // autoLoad: true,
        storeId: 'Reworks',
        proxy: {
            type: 'rest',
            url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/op_reworks.json',
            // url: 'http://localhost:3000/api/v1/op_reworks.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'op_rework'
            }
        }
    }
});
