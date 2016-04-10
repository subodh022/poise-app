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
                        xtype: 'titlebar',
                        docked: 'top',
                        cls: 'white_tabbar',
                        items: [
                            {
                                xtype: 'label',
                                styleHtmlContent: true,
                                align: 'right',
                                html: '<span>Entry Time : </span>'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'reportTime',
                                displayField: 'id',
                                valueField: 'id',
                                ui: 'normal',
                                align: 'right',
                                store: {
                                    type: 'reporttimedata'
                                },
                                style: {
                                    'padding-top': '0.75em'
                                }
                            },
                            {
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'label',
                                styleHtmlContent: true,
                                html: '<span>Entry Date : </span>'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'reportDate',
                                displayField: 'label',
                                valueField: 'id',
                                ui: 'normal',
                                store: {
                                    fields: ['id', 'label'],
                                    data: Poise.util.Config.lastSevenDays()
                                },
                                style: {
                                    'padding-top': '0.55em'
                                }
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