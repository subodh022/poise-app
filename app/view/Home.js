Ext.define('Poise.view.Home', {
    extend: 'Ext.TabPanel',
    xtype: 'home',
    
    requires: [
        'Poise.view.ReportEntryCard',
        'Poise.view.ObForm',
        'Poise.view.ReportView',
        'Poise.view.DynamicView',
        'Poise.view.WorkstationList',
        'Poise.view.DynamicWorkstationList'
    ],
    
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        fullscreen: true,
        cls: 'main-tabs',

        items: [
            {
                xtype: 'obform'
            },
            {
                xtype: 'reportentrycard'
            },
            {
                xtype: 'reportview'
            },
            {
                xtype: 'dynamic_view'
            }
        ]
    }
});
