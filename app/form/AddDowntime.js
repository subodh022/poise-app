Ext.define('Poise.view.AddDowntime', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.adddowntimeform',
    xtype: 'adddowntimeform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Hidden'
    ],

    config: {
        itemId: 'addDowntimeForm',
        margin: '10',
        scrollable: true,
        height: '100%',
        url: 'http://localhost:3000/api/v1/machine_downtimes.json',

        items: [
            {
                xtype: 'hiddenfield',
                name: 'work_station_id'
            },
            {
                xtype: 'hiddenfield',
                name: 'logged_at'
            },
            {
                xtype: 'fieldset',
                title: "Add Downtime",
                margin: '10',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Downtime (Minutes)',
                        name: 'downtime'
                    }
                ]
                
            },
            {
                xtype: 'fieldset',
                margin: '10',
                items: [
                    {
                        xtype: 'textareafield',
                        label: 'Remarks',
                        name: 'remarks'
                    }
                ]
                
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                margin: '10',
                items: [
                    {
                        xtype: 'button',
                        action: 'downtime-save',
                        ui: 'confirm',
                        iconCls: 'add',
                        text: 'Add',
                        width: 'auto',
                        align: 'left'
                    },
                    {
                        xtype: 'spacer',
                        width: '0.5em'
                    },
                    {
                        xtype: 'button',
                        action: 'back',
                        iconCls: 'delete',
                        width: 'auto',
                        ui: 'action',
                        text: 'Cancel',
                        align: 'left',
                        itemId: 'downtimeBack'
                    }
                ]
            }
        ]
    }
});
