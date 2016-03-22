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
        margin: '10',
        scrollable: true,
        height: '100%',

        items: [
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
                        width: '5em',
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
                        width: '6.5em',
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
