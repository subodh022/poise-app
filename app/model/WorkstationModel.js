Ext.define('Poise.model.Workstation', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },            
            { name: 'ws_id', type: 'int' },
            { name: 'section_id', type: 'int' },
            { name: 'operation_bulletin_style', type: 'string' },
            { name: 'section_name', type: 'string' },
            { name: 'operation_name', type: 'string' },
            { name: 'machine_name', type: 'string' },
            { name: 'operator_name', type: 'string' },
            { name: 'attendance_today', type: 'boolean' },
            { name: 'state', type: 'string'},
            { name: 'mac_state', type: 'string'},
            { name: 'message', type: 'string' },
            { name: 'mac_message', type: 'string' },
            { name: 'operators_attendance' }
        ]
    }
});