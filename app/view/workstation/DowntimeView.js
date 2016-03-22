Ext.define('Poise.view.DowntimeView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.downtimeview',
    xtype: 'downtimeview',

    config: {
        layout: 'card',
        navigationBar: false,
        itemId: 'downtimeView',

        items: [
            {
                xtype: 'panel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'workstationlist'
                    }
                ]
            }
        ]
    }
});