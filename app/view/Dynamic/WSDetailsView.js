Ext.define('Poise.view.WSDetailsPanel', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.ws_details_panel',
    xtype: 'ws_details_panel',

    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        itemId: 'wsDetailsPanel',
        margin: '10',
        scrollable: true,
        height: '100%',

        items: [
            {
                xtype: 'panel',
                layout: 'fit',
                itemId: 'wsTable'
            },
            {
                xtype: 'panel',
                layout: 'fit',
                itemId: 'operatorsTable'
            },
            {
                xtype: 'panel',
                layout: 'fit',
                itemId: 'outputsTable'
            },
            {
                xtype: 'panel',
                layout: 'fit',
                itemId: 'optionsTable'
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                margin: '10',
                items: [
                    {
                        xtype: 'button',
                        action: 'back',
                        iconCls: 'arrow_left',
                        width: 'auto',
                        ui: 'action',
                        text: 'Back',
                        align: 'left',
                        itemId: 'dynamicBack'
                    }
                ]
            }
        ]
    }
});
