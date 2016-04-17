Ext.define('Poise.view.DynamicHome', {
    extend: 'Ext.TabPanel',
    alias: 'widget.dynamichome',
    xtype: 'dynamichome',

    config: {
        width: '100%',
        height: '100%',
        itemId: 'dynamicHome',
        title: 'Balance Line',
        iconCls: 'organize',
        autoDestroy: true,
        defaults: {
            styleHtmlContent: true
        },
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            cls: 'white_tabbar'
        },

        items: [
            {
                xtype: 'titlebar',
                title: 'Dynamic Line Balancing',
                docked: 'top'
            },
            {
                xtype: 'dynamicdashboard',
                title: 'Dashboard',
                tab: {
                    cls : 'no-icon'
                }
            },
            {
                xtype: 'dynamicopview',
                title: 'Operators',
                tab: {
                    cls : 'no-icon'
                }
            },            
            {
                xtype: 'dynamicmacview',
                title: 'Machines',
                tab: {
                    cls : 'no-icon'
                }
            }
        ]
    }
});