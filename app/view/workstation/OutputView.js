Ext.define('Poise.view.OutputView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.outputview',
    xtype: 'outputview',

    config: {
        layout: 'card',
        navigationBar: false,
        itemId: 'outputView',

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