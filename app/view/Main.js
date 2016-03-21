Ext.define('Poise.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    
    requires: [
        'Poise.view.WorkstationCard',
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
