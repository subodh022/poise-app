Ext.define('Poise.view.DynamicWorkstationList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.dynamic_workstation_list',
    xtype: 'dynamic_workstation_list',

    config: {
        store: {
            type: 'dynamic_workstations'
        },
        width: '100%',
        height: '100%',
        layout: 'fit',
        flex: 1,
        cls: 'dynamic-list',
        title: 'Workstations',
        emptyText: "No Workstation Added for Selected Operation Bulletin",
        grouped: true,
        itemTpl: [
            '<div class="dynamic {bg_color}">'+
                '<div class="list-element"><span class="icon-custom">x</span> {operation_name}</div>'+
                '<div class="list-element"><span class="icon-custom">/</span> {machine_name}</div>'+
                '<div class="list-element"><span class="icon-custom">U</span> {operator_name}</div>'+
             '</div>'
        ]
    }
});
