Ext.define('Poise.store.Sections', {
    extend: 'Ext.data.Store',
    alias: 'store.sections',

    requires: [
        'Poise.model.Section',
        'Ext.data.proxy.Rest'
    ],

    config: {
        model: 'Poise.model.Section',
        storeId: 'Sections',
        proxy: {
            type: 'rest',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/sections.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'section'
            }
        }
    }
});
