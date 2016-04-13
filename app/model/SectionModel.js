Ext.define('Poise.model.Section', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'line_id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'enabled', type: 'boolean' }
        ]
    }
});