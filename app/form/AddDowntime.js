Ext.define('Poise.view.AddDowntime', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.adddowntimeform',
    xtype: 'adddowntimeform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number'
    ],

    config: {
        itemId: 'adddowntimeform',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Add Downtime',
                items: [
                    {
                        xtype: 'button',
                        action: 'back',
                        ui: 'back',
                        text: 'back'
                    }
                ]
            },
            {
                xtype: 'textfield',
                label: 'Downtime (Minutes)',
                name: 'downtime'
            },
            {
                xtype: 'textareafield',
                label: 'Remarks',
                name: 'remarks'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        action: 'student-save',
                        ui: 'confirm',
                        iconAlign: 'left',
                        iconCls: 'add',
                        text: 'Add'
                    }
                ]
            }
        ]
    }
});
