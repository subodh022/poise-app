Ext.define('Poise.view.DynamicWorkstationMacList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.dynamic_workstation_mac_list',
    xtype: 'dynamic_workstation_mac_list',

    config: {
        store: {
            type: 'dynamic_workstations'
        },
        width: '100%',
        height: '100%',
        layout: 'fit',
        flex: 1,
        cls: 'dynamic-list dynamic-mac-list',
        title: 'Workstations',
        scrollToTopOnRefresh: false,
        emptyText: "No Workstation Added for Selected Operation Bulletin",
        grouped: true,
        itemTpl: [
            '<div class="dynamic dynamic-item {mac_state}-item">'+
                '<div class="list-element"><span class="icon-custom">x</span> {operation_name}</div>'+
                '<div class="list-element"><span class="icon-custom">/</span> {machine_name}</div>'+
                '<div class="list-element list-message"><span class="icon-custom">i</span> {mac_message}</div>'+
             '</div>'
        ]
    }
});