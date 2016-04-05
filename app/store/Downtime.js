Ext.define('Poise.store.Downtimes', {
    extend: 'Ext.data.Store',
    alias: 'store.downtimes',

    requires: [
        'Poise.model.Downtime',
        'Ext.data.proxy.Rest'
    ],

    config: {
        model: 'Poise.model.Downtime',
        storeId: 'Downtimes',
        proxy: {
            type: 'rest',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/machine_downtimes.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'machine_downtime'
            }
        }
    }
});
