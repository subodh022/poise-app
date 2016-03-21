Ext.define('Poise.view.WorkstationCard', {
    extend: 'Ext.Panel',
    alias: 'widget.workstationcard',
    xtype: 'workstationcard',

    config: {
        width: '100%',
        height: '100%',
        title: 'Workstations',
        iconCls: 'list',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Workstations'
            }
        ]
    }
});
