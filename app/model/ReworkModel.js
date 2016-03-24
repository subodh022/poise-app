Ext.define('Poise.model.Rework', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'work_station_id', type: 'int' },
            { name: 'rework', type: 'int' },
            { name: 'logged_at', type: 'string' },
            { name: 'remarks', type: 'string' }
        ]
    }
});