Ext.define('Poise.view.AddOutput', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.addoutputform',
    xtype: 'addoutputform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number'
    ],

    config: {
        itemId: 'addoutputform',
        margin: '10',
        scrollable: true,
        height: '100%',

        items: [
            {
                xtype: 'fieldset',
                title: "Add Output",
                margin: '10',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Output (Minutes)',
                        name: 'output'
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
                        action: 'output-save',
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
                        itemId: 'outputBack'
                    }
                ]
            }
        ]
    }
});
