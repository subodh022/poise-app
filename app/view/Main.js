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
                xtype: 'obform',
                margin: '20'
            },
            {
                xtype: 'reportentrycard',
                margin: '20'
            },
            {
                xtype: 'reportview',
                margin: '20'
            }
        ]
    }
});
