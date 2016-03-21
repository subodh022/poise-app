Ext.define('Poise.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    
    requires: [
        'Poise.view.ReportEntryCard',
        'Poise.view.WorkstationList',
        'Poise.view.ObForm',
        'Poise.view.ReportView'
    ],
    
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        fullscreen: true,

        items: [
            {
                xtype: 'obform'
            },
            {
                xtype: 'reportentrycard'
            },
            {
                xtype: 'reportview'
            }
        ]
    }
});
