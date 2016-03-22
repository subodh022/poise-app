Ext.define('Poise.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'home',
    
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
