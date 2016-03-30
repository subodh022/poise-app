Ext.define('Poise.view.ReportEntryCard', {
    extend: 'Ext.TabPanel',
    alias: 'widget.reportentrycard',
    xtype: 'reportentrycard',
    // plugins: 'swipetabs',

    config: {
        width: '100%',
        height: '100%',
        title: 'Report Entry',
        iconCls: 'compose',
        autoDestroy: true,
        defaults: {
            styleHtmlContent: true
        },
        tabBar: {
            docked: 'top',
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
                title: 'Downtime'
            },
            {
                xtype: 'reworkview',
                title: "Rework"
            },
            {
                xtype: 'outputview',
                title: "Output"
            },
            {
                xtype: 'attendanceview',
                title: "Attendance"
            }
        ]
    }
});