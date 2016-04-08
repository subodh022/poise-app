Ext.define('Poise.view.ReportEntryCard', {
    extend: 'Ext.TabPanel',
    alias: 'widget.reportentrycard',
    xtype: 'reportentrycard',
    // plugins: 'swipetabs',

    config: {
        width: '100%',
        height: '100%',
        title: 'Log Data',
        iconCls: 'compose',
        autoDestroy: true,
        defaults: {
            styleHtmlContent: true
        },
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            cls: 'white_tabbar'
        },

        items: [
            {
                xtype: 'titlebar',
                title: 'Report Data Entry',
                docked: 'top'
            },
            {
                xtype: 'downtimeview',
                title: 'Downtime',
                tab: {
                    cls : 'no-icon'
                }
            },
            {
                xtype: 'reworkview',
                title: "Rework",
                tab: {
                    cls : 'no-icon'
                }
            },
            {
                xtype: 'outputview',
                title: "Output",
                tab: {
                    cls : 'no-icon'
                }
            },
            {
                xtype: 'attendanceview',
                title: "Attendance",
                tab: {
                    cls : 'no-icon'
                }
            }
        ]
    }
});