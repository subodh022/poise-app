Ext.define('Poise.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    
    requires: [
        'Poise.view.LoginForm'
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
                xtype: 'loginform'
            }
        ]
    }
});
