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
            margin: 5
        },
        cls: 'white-bg',

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
                height: '80%',
                itemId: "toggleAttendance",
                style: "background-color: inherit"
            },
            {
                xtype: 'hiddenfield',
                name: 'work_station_id',
                itemId: 'workStationId'
            },
            {
                xtype: 'hiddenfield',
                name: 'logged_at',
                itemId: 'loggedAt'
            }
        ],
 
        listeners: [
            {
                fn: 'onToggleChange',
                event: 'change',
                delegate: '#toggleAttendance'
            }
        ]
    },

    updateRecord: function(record) {
        var me = this;

        me.down('#operationCmp').setHtml('<span class="icon-custom">x</span>' + record.get('operation_name'));
        me.down('#machineCmp').setHtml('<span class="icon-custom">/</span>' + record.get('machine_name'));
        me.down('#operatorCmp').setHtml('<span class="icon-custom">U</span>' + record.get('operator_name'));
        me.down('#workStationId').setValue(record.get('id'));
        me.down('#loggedAt').setValue(new Date().toLocaleDateString());
        var togglefield = me.down('#toggleAttendance');
        togglefield.suspendEvents();
        togglefield.setValue(record.get('attendance_today') ? 1 : 0);
        togglefield.resumeEvents(true);
        me.callParent(arguments);
    }, 

    onToggleChange: function (field, newValue, oldValue, eOpts) {
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/record_attendance',
            method: 'POST',          
            params: {
                work_station_id: field.up("attendancelistitem").down("#workStationId").getValue(),
                logged_at: field.up("attendancelistitem").down("#loggedAt").getValue(),
                present: field.getValue()
            },
            success: function(){console.log('success');},                                    
            failure: function(){console.log('failure');}
        });
    }
});