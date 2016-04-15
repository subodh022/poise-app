Ext.define('Poise.store.ReportTime', {
    extend: 'Ext.data.Store',
    alias: 'store.reporttimedata',
 
    config: {
        autoLoad: true,
        storeId: 'reportTimeData',
        
        fields: ['id'],
        data: [
            { id: '09:00:00' },
            { id: '10:00:00' },
            { id: '11:00:00' },
            { id: '12:00:00' },
            { id: '13:30:00' },
            { id: '14:30:00' },
            { id: '15:30:00' },
            { id: '16:30:00' }
        ]
        // proxy: {
        //     type: 'rest',
        //     method: 'GET',
        //     url: Poise.util.Config.getApiBaseUrl() + 'api/v1/working_hours.json',
        //     reader: {
        //         type: 'json',
        //         idProperty: 'id',
        //         record: 'openstruct'
        //     }
        // }
    }
});