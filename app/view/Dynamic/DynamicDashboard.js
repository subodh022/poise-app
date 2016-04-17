Ext.define('Poise.view.DynamicDashboard', {
    extend: 'Ext.navigation.View',
    alias: 'widget.dynamicdashboard',
    xtype: 'dynamicdashboard',

    requires: [
        'Ext.Label'
    ],

    config: {
        layout: 'card',
        navigationBar: false,
        scrollable: true,
        itemId: 'dynamicDashboard',
        defaults: {
            styleHtmlContent: true
        },

        items: [                       
            {
                xtype: 'panel',
                scrollable: true,
                width: '100%',
                height: '100%',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        cls: 'white_tabbar',
                        width: '100%',
                        items: [
                            {
                                xtype: 'label',
                                styleHtmlContent: true,
                                html: '<span>Date : </span>'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'reportDate',
                                displayField: 'label',
                                valueField: 'id',
                                ui: 'normal',
                                store: {
                                    fields: ['id', 'label'],
                                    data: Poise.util.Config.currentDate()
                                },
                                style: {
                                    'padding-top': '0.55em',
                                    'font-size': '0.75em'
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh List',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2em',
                                align: 'right',
                                action: 'refresh-dynamic-dashboard'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: 'fit',
                        itemId: 'dbPanel',
                        margin: 10
                    }
                ]
            }
        ]
    }
});