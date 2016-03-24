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
            // url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/lines.json',
            url: 'http://localhost:3000/api/v1/operation_bulletins.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'operation_bulletin'
            }
        }
    }
});