Ext.define('Poise.view.WSDetailsMacPanel', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.ws_details_mac_panel',
    xtype: 'ws_details_mac_panel',

    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        itemId: 'wsDetailsMacPanel',
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
                itemId: 'machinesTable'
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
                        itemId: 'dynamicMacBack'
                    }
                ]
            }
        ]
    }
});
