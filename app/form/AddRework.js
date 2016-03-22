Ext.define('Poise.view.AddRework', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.addreworkform',
    xtype: 'addreworkform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number'
    ],

    config: {
        itemId: 'addreworkform',
        margin: '10',
        scrollable: false,
        height: '100%',

        items: [
            {
                xtype: 'fieldset',
                title: "Add Rework",
                margin: '10',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Rework (Minutes)',
                        name: 'rework'
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
                        action: 'rework-save',
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
                        itemId: 'reworkBack'
                    }
                ]
            }
        ]
    }
});
