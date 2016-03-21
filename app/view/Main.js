Ext.define('Poise.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    
    requires: [
        'Poise.view.WorkstationList',
        'Poise.view.ObForm'
    ],
    
    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        fullscreen: true,
        layout: 'fit',
        
        defaults: {
            html: 'Placeholder Text',
            styleHtmlContent: true
        },

        items: [
            {
                xtype: 'obform'
            },
            {
                xtype: 'workstationlist'
            }
        ]
    }
});
