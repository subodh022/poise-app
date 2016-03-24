Ext.define('Poise.store.ReportTimeData', {
    extend: 'Ext.data.Store',
    alias: 'store.reporttimedata',
 
    config: {
 
        autoLoad: true,
        storeId: 'reportTimeData',
        
        fields: ['id', 'value'],
        proxy: {
            type: 'rest',
            method: 'GET',
            // url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/lines.json',
            url: 'http://localhost:3000/api/v1/report_times.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'line'
            }
        }
    }
});