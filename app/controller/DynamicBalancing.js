Ext.define('Poise.controller.DynamicBalancing', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.grid.Grid'
    ],

    config: {

        views: [
            "DynamicView",
            "DynamicWorkstationList",
            "WSDetailsPanel",
            "OperatorsView",
            "OutputsView",
            "OptionsView"
        ],

        models: [
            "Workstation"
        ],

        stores: [
            "DynamicWorkstations"
        ],

        refs: {
            listView: 'dynamic_workstation_list',
            dynamicRefreshButton: 'dynamicview button[action=refresh-dynamic-list]',            
            dynamicBackButton: 'button#dynamicBack'
        },

        control: {
            "dynamicRefreshButton": {
                tap: 'refreshWorkstationList'
            },
            "listView": {
                itemtap: 'onItemTapAction'
            },
            "dynamicBackButton": {
                tap: 'goBackToDynamicView'
            }
        }
    },

    refreshWorkstationList: function( button, e, eOpts) {
        var dynamicWsStore = Ext.getStore('DynamicWorkstations');
        var obId = localStorage.getItem('obId');
        dynamicWsStore.load({
            params: {'operation_bulletin_id': obId}
        });
        button.up("dynamic_view").down("dynamic_workstation_list").setStore(dynamicWsStore);
    },

    onItemTapAction: function (dataview, index, target, record, e, eOpts) {
        this.showWSDetails(target, record.data);
    },

    showWSDetails: function(target, record) {
        var view = Ext.create('Poise.view.WSDetailsPanel');        
        target.up('#dynamicView').push(view);
        this.loadData(record.id, view);
    },
    
    loadData: function(ws_id, view) {
        var me = this;
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/ws_details.json?work_station_id=' + ws_id,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                console.log(data);
                me.addOperatorsToView(view, data);
                me.addOutputsToView(view, data);
                me.addOptionsToView(view, data);
            }
        });
    },

    goBackToDynamicView: function(button, e, eOpts){
        button.up("#dynamicView").pop();
    },

    addOperatorsToView: function(view, data) {
        var table = Ext.create('Poise.view.OperatorsView', {data: [{title: 'Operator(s)', operators: data.operators}]});
        view.down('#operatorsTable').add(table);
    },

    addOutputsToView: function(view, data) {
        var table = Ext.create('Poise.view.OutputsView', {data: [{title: 'Recent Outputs', outputs: data.outputs}]});
        view.down('#outputsTable').add(table);
    },

    addOptionsToView: function(view, data) {
        var table = Ext.create('Poise.view.OptionsView', {data: [{title: 'Available Options for Deviation', options: data.options}]});
        view.down('#optionsTable').add(table);
    }
});
