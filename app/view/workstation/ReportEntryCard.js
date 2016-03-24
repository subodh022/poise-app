Ext.define('Poise.view.ReportEntryCard', {
    extend: 'Ext.TabPanel',
    alias: 'widget.reportentrycard',
    xtype: 'reportentrycard',

    config: {
        width: '100%',
        height: '100%',
        title: 'Report Entry',
        iconCls: 'compose',
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
                xtype: 'panel',
                title: "Attendance",
                html: "<p>Worker list comes here</p>"
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
            }
        ]
    }
});