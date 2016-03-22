Ext.define('Poise.view.ReworkView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.reworkview',
    xtype: 'reworkview',

    config: {
        layout: 'card',
        navigationBar: false,
        itemId: 'reworkView',

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