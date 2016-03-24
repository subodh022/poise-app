Ext.define('Poise.model.Output', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'work_station_id', type: 'int' },
            { name: 'output', type: 'int' },
            { name: 'logged_at', type: 'string' },
            { name: 'remarks', type: 'string' }
        ]
    }
});