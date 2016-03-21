Ext.define('Poise.store.Lines', {
    extend: 'Ext.data.Store',
    alias: 'store.lines',
 
    config: {
 
        autoLoad: true,
        data: [
            {
                id: 0,
                name: 'Please Select Line'
            },
            {
                id: 1,
                name: 'India'
            },
            {
                id: 2,
                name: 'USA'
            },
            {
                id: 3,
                name: 'UK'
            }
        ],
 
        storeId: 'Lines',
 
        fields: [
           {
                name: 'id'
            },
            {
                name: 'name'
            }
        ]
    }
});