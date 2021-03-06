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
        cls: 'attendance-view',

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
                                displayField: 'label',
                                valueField: 'id',
                                ui: 'normal',
                                store: {
                                    fields: ['id','label'],
                                    data: Poise.util.Config.currentDate()
                                },
                                style: {
                                    'padding-top': '0.55em'
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