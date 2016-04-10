Ext.define('Poise.view.DynamicView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.dynamicview',
    xtype: 'dynamic_view',

    requires: [
        'Ext.Label'
    ],

    config: {
        layout: 'card',
        navigationBar: false,
        itemId: 'dynamicView',
        title: 'Balance Line',
        iconCls: 'organize',
        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                xtype: 'titlebar',
                title: 'Dynamic Line Balancing',
                docked: 'top'
            },           
            {
                xtype: 'panel',
                layout: 'fit',
                width: '100%',
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
                                action: 'refresh-dynamic-list'
                            }
                        ]
                    },
                    {
                        xtype: 'dynamic_workstation_list'
                    }
                ]
            }
        ]
    }
});