Ext.define('Poise.view.AttendanceView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.attendanceview',
    xtype: 'attendanceview',

    requires: [
        'Ext.Label'
    ],

    config: {
        layout: 'card',
        navigationBar: false,
        itemId: 'attendanceView',

        items: [            
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
                        xtype: 'attendancelist'
                    }
                ]
            }
        ]
    }
});