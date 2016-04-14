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
            "OptionsView",
            "WorkstationView"
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
            dynamicBackButton: 'button#dynamicBack',
            optionsTable: 'options_view'
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
            },
            "optionsTable": {
                tap: 'handleOptionsTable'
            }
        }
    },

    createDeviation: function(panel, old_ws_id, new_ws_id, operator_id, hours) {
        var me = this;
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/create_deviation.json?old_ws_id=' + old_ws_id + '&new_ws_id=' + new_ws_id + '&operator_id=' + operator_id + '&hours=' + hours,
            method: 'POST',
            success: function(response){
                Ext.Msg.alert("Deviation", "Deviation created for " + hours + " hours.");
                var data = Ext.JSON.decode(response.responseText);
                var dynamicView = Ext.ComponentQuery.query("#dynamicView")[0].pop();
                var dynamicWsStore = Ext.getStore('DynamicWorkstations');
                var obId = localStorage.getItem('obId');
                dynamicWsStore.load({
                    params: {'operation_bulletin_id': obId},
                    callback: function() {
                        dynamicView.down("dynamic_workstation_list").setStore(dynamicWsStore);
                    }
                });                
            }
        });
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
        console.log([record]);
        this.addWSDetailsToView(view, [record]);
        this.loadData(record.id, view, record.state);
    },
    
    loadData: function(ws_id, view, state) {
        var me = this;
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/ws_details.json?work_station_id=' + ws_id,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                me.addOperatorsToView(view, data);
                me.addOutputsToView(view, data);
                me.addOptionsToView(view, data, ws_id, state);
            }
        });
    },

    goBackToDynamicView: function(button, e, eOpts){
        button.up("#dynamicView").pop();
    },

    addWSDetailsToView: function(view, data) {
        var table = Ext.create('Poise.view.WorkstationView', {data: [{title: 'Workstation Details', workstation: data}]});
        view.down('#wsTable').add(table);
    },

    addOperatorsToView: function(view, data) {
        console.log(data.operators);
        var table = Ext.create('Poise.view.OperatorsView', {data: [{title: 'Operator(s)', operators: data.operators}]});
        view.down('#operatorsTable').add(table);
    },

    addOutputsToView: function(view, data) {
        var table = Ext.create('Poise.view.OutputsView', {data: [{title: 'Recent Output (Last 8 hours)', outputs: data.outputs}]});
        view.down('#outputsTable').add(table);
    },

    addOptionsToView: function(view, data, ws_id, state) {
        var table = Ext.create('Poise.view.OptionsView', {data: [{old_ws_id: ws_id, state: state, title: 'Available Options for Deviation', options: data.options}]});
        view.down('#optionsTable').add(table);
    }
});
