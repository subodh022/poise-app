Ext.define('Poise.store.Lines', {
    extend: 'Ext.data.Store',
    alias: 'store.lines',
 
    config: {
        autoLoad: true,
        proxy: {
            type: 'rest',
            method: 'GET',
            url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/lines.json',
            // url: 'http://localhost:3000/api/v1/lines.json',
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