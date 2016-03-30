Ext.define('Poise.view.AttendanceListItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.field.Toggle'],
    xtype: 'attendancelistitem',

    config: {
        padding: 5,
        layout: {
            type: 'hbox'
        },
        defaults: {
            margin: 5,
            backgroundColor: "red"
        },
        items: [ 
            {
                xtype: 'component',
                flex: 1,
                html: '',
                itemId: 'operationCmp'
            }, 
            {
                xtype: 'component',
                flex: 1,
                html: '',
                itemId: 'machineCmp'
            },
            {
                xtype: 'component',
                flex: 1,
                html: '',
                itemId: 'operatorCmp'
            },
            {
                xtype: 'togglefield',
                name: 'attendance',
                labelWidth: '40%'
            }
        ]
    },
    updateRecord: function(record) {
        // Provide an implementation to update this container's child items
        var me = this;

        me.down('#operationCmp').setHtml(record.get('operation_name'));
        me.down('#machineCmp').setHtml(record.get('machine_name'));
        me.down('#operatorCmp').setHtml(record.get('operator_name'));
        me.callParent(arguments);
    }
});