Ext.define('Poise.store.ReportTimeData', {
    extend: 'Ext.data.Store',
    alias: 'store.reporttimedata',
 
    config: {
 
        autoLoad: true,
        storeId: 'reportTimeData',
        
        fields: ['id'],
        proxy: {
            type: 'rest',
            method: 'GET',
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/working_hours.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'openstruct'
            }
        }
    }
});