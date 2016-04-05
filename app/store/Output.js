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
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/hourly_outputs.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'hourly_output'
            }
        }
    }
});
