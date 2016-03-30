Ext.define('Poise.view.WorkstationList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.workstationlist',
    xtype: 'workstationlist',

    config: {
        store: {
            type: 'workstations'
        },
        width: '100%',
        height: '100%',
        layout: 'fit',
        flex: 1,
        title: 'Workstations',
        emptyText: "No Workstation Added for Selected Operation Bulletin",
        grouped: true,
        itemTpl: [
            '<div>Section: {section_name}</div>',
            '<div>Operation: {operation_name}</div>',
            '<div>Machine: {machine_name}</div>'
        ],

        items: [
            // {
            //     xtype: 'titlebar',
            //     docked: 'top',
            //     items: [
            //         {
            //             xtype: 'textfield',
            //             itemId: 'txtSearchText'
            //         },
            //         {
            //             xtype: 'button',
            //             action: 'search-workstation',
            //             itemId: 'btnSearch',
            //             iconCls: 'search'
            //         }
            //     ]
            // }
        ]
    }
});
