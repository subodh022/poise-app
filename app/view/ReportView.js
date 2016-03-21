Ext.define('Poise.view.ReportView', {
    extend: 'Ext.Panel',
    alias: 'widget.reportview',
    xtype: 'reportview',

    requires: [
        'Poise.store.ChartData'
    ],

    config: {
        width: '100%',
        height: '100%',
        layout: 'fit',
        style: 'background: white',
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