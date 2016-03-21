Ext.define('Poise.view.ReportView', {
    extend: 'Ext.Panel',
    alias: 'widget.reportview',
    xtype: 'reportview',

    config: {
        width: '100%',
        height: '100%',
        title: 'Report',
        iconCls: 'star',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Report'
            }
        ]
    }
});