Ext.define('Poise.store.ObStore', {
    extend: 'Ext.data.Store',
    alias: 'store.obstore',
 
    config: {
 
        data: [
            {
                id: 1,
                line_id: 1,
                name: 'Tamil Nadu'
            },
            {
                id: 2,
                line_id: 1,
                name: 'Bihar'
            },
            {
                id: 3,
                line_id: 1,
                name: 'Delhi'
            },
            {
                id: 4,
                line_id: 2,
                name: 'Los Angles'
            },
            {
                id: 5,
                line_id: 2,
                name: 'San francisco'
            },
            {
                id: 6,
                line_id: 2,
                name: 'California'
            },
            {
                id: 7,
                line_id: 3,
                name: 'London'
            },
            {
                id: 8,
                line_id: 3,
                name: 'New York'
            }
        ],
 
        storeId: 'Obs',
 
        fields: [
            {
                name: 'id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'name'
            }
        ]
    }
});