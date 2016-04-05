Ext.define('Poise.store.Lines', {
    extend: 'Ext.data.Store',
    alias: 'store.lines',
 
    config: {
        autoLoad: true,
        proxy: {
            type: 'rest',
            method: 'GET',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/lines.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'line'
            }
        },
        storeId: 'Lines',
        fields: [
            {
                name: 'id'
            },
            {
                name: 'title'
            }
        ]
    }
});