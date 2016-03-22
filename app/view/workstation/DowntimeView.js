Ext.define('Poise.view.DowntimeView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.downtimeview',
    xtype: 'downtimeview',

    requires: [
        'Ext.Label'
    ],

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
                        xtype: 'titlebar',
                        docked: 'top',
                        cls: 'white_tabbar',
                        items: [
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                align: 'left',
                                items: [
                                    {
                                        xtype: 'label',
                                        styleHtmlContent: true,
                                        html: '<span>Entry Time for Report : </span>'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportTime',
                                        displayField: 'name',
                                        valueField: 'id',
                                        ui: 'normal',
                                        store: {
                                            type: 'lines'
                                        },
                                        style: {
                                            'padding-top': '0.75em'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'workstationlist'
                    }
                ]
            }
        ]
    }
});