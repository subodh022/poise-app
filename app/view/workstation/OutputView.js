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
                                displayField: 'id',
                                valueField: 'id',
                                ui: 'normal',
                                store: {
                                    fields: ['id'],
                                    data: [
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), 0).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -1).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -2).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -3).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -4).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -5).toLocaleDateString())
                                        }
                                    ]
                                },
                                style: {
                                    'padding-top': '0.75em'
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