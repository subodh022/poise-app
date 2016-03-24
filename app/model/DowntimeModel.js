Ext.define('Poise.model.Downtime', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'work_station_id', type: 'int' },
            { name: 'downtime', type: 'int' },
            { name: 'logged_at', type: 'string' },
            { name: 'remarks', type: 'string' }
        ]
    }
});