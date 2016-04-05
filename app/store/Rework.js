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
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/op_reworks.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'op_rework'
            }
        }
    }
});
