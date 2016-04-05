Ext.define('Poise.store.ObStore', {
    extend: 'Ext.data.Store',
    alias: 'store.obstore',
 
    config: { 
        storeId: 'Obs',
        fields: [
            {
                name: 'id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'style'
            }
        ],
        proxy: {
            type: 'rest',
            method: 'GET',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/operation_bulletins.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'operation_bulletin'
            }
        }
    }
});