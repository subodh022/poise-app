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
        cls: 'dynamic-list white-bg',
        itemTpl: [
            '<div class="dynamic">'+
                '<div class="log-list-element"><span class="icon-custom">x</span> {operation_name}</div>'+
                '<div class="log-list-element"><span class="icon-custom">/</span> {machine_name}</div>'+
                '<div class="log-list-element"><span class="icon-custom">U</span> {operator_name}</div>'+
             '</div>'
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
