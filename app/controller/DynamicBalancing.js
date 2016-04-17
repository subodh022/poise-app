Ext.define('Poise.controller.DynamicBalancing', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.grid.Grid'
    ],

    config: {

        views: [
            "DynamicOperatorsView",
            'DynamicMachinesView',
            "DynamicDashboard",
            "DynamicWorkstationList",
            "DynamicWorkstationMacList",
            "WSDetailsPanel",
            "WSDetailsMacPanel",
            "OperatorsView",
            "OutputsView",
            "OptionsView",
            "MachineView",
            "WorkstationView",
            "DynamicDBContent"
        ],

        models: [
            "Workstation"
        ],

        stores: [
            "DynamicWorkstations"
        ],

        refs: {
            opListView: 'dynamicopview dynamic_workstation_list',
            macListView: 'dynamicmacview dynamic_workstation_mac_list',
            dynamicOpRefreshButton: 'dynamicopview button[action=refresh-dynamic-op-list]',
            dynamicMacRefreshButton: 'dynamicmacview button[action=refresh-dynamic-mac-list]',
            dynamicDBRefreshButton: 'dynamicdashboard button[action=refresh-dynamic-dashboard]',
            dynamicBackButton: 'button#dynamicBack',            
            dynamicMacBackButton: 'button#dynamicMacBack',
            optionsTable: 'options_view'
        },

        control: {
            "dynamicOpRefreshButton": {
                tap: 'refreshOpWorkstationList'
            },
            "dynamicMacRefreshButton": {
                tap: 'refreshMacWorkstationList'
            },
            "dynamicDBRefreshButton": {
                tap: 'loadDynamicDashboard'
            },
            "opListView": {
                itemtap: 'onOpItemTapAction'
            },
            "macListView": {
                itemtap: 'onMacItemTapAction'
            },
            "dynamicBackButton": {
                tap: 'goBackToDynamicView'
            },
            "dynamicMacBackButton": {
                tap: 'goBackToDynamicMacView'
            },
            "optionsTable": {
                tap: 'handleOptionsTable'
            }
        }
    },

    createDeviation: function(panel, old_ws_id, new_ws_id, operator_id, hours) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading data...'
        });
        var me = this;
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/create_deviation.json?old_ws_id=' + old_ws_id + '&new_ws_id=' + new_ws_id + '&operator_id=' + operator_id + '&hours=' + hours,
            method: 'POST',
            success: function(response){
                Ext.Msg.alert("Deviation", "Operator Deviation created for " + hours + " hour(s)");
                var data = Ext.JSON.decode(response.responseText);
                var dynamicView = Ext.ComponentQuery.query("#dynamicOpView")[0].pop();
                var dynamicDBView = Ext.ComponentQuery.query("#dynamicDashboard")[0].pop();
                var dynamicWsStore = Ext.getStore('DynamicWorkstations');
                var obId = localStorage.getItem('obId');
                dynamicWsStore.load({
                    params: {'operation_bulletin_id': obId},
                    callback: function() {
                        me.loadDynamicDashboard();
                        Ext.Viewport.setMasked(false);
                    }
                });                
            }
        });
    },

    refreshOpWorkstationList: function( button, e, eOpts) {
        var dynamicWsStore = Ext.getStore('DynamicWorkstations');
        var obId = localStorage.getItem('obId');
        dynamicWsStore.load({
            params: {'operation_bulletin_id': obId}
        });
        button.up("dynamicopview").down("dynamic_workstation_list").setStore(dynamicWsStore);
    },

    refreshMacWorkstationList: function( button, e, eOpts) {
        var dynamicWsStore = Ext.getStore('DynamicWorkstations');
        var obId = localStorage.getItem('obId');
        dynamicWsStore.load({
            params: {'operation_bulletin_id': obId}
        });
        button.up("dynamicmacview").down("dynamic_workstation_mac_list").setStore(dynamicWsStore);
    },

    onOpItemTapAction: function (dataview, index, target, record, e, eOpts) {
        this.showWSDetails(target, record.data);
    },

    onMacItemTapAction: function (dataview, index, target, record, e, eOpts) {
        this.showWSMacDetails(target, record.data);
    },

    showWSDetails: function(target, record) {
        var view = Ext.create('Poise.view.WSDetailsPanel');        
        target.up('#dynamicOpView').push(view);
        this.addWSDetailsToView(view, [record]);
        this.loadData(record.id, view, record.state);
    },

    showWSMacDetails: function(target, record) {
        var view = Ext.create('Poise.view.WSDetailsMacPanel');        
        target.up('#dynamicMacView').push(view);
        this.addWSDetailsToView(view, [record]);
        this.loadMacData(record.id, view);
    },

    showWSDetailsForDB: function(record) {
        var view = Ext.create('Poise.view.WSDetailsPanel');        
        Ext.ComponentQuery.query("#dynamicDashboard")[0].push(view);
        this.addWSDetailsToView(view, [record]);
        this.loadData(record.id, view, record.state);
    },

    showWSMacDetailsForDB: function(record) {
        var view = Ext.create('Poise.view.WSDetailsMacPanel');
        Ext.ComponentQuery.query("#dynamicDashboard")[0].push(view);
        this.addWSDetailsToView(view, [record]);
        this.loadMacData(record.id, view);
    },
    
    loadData: function(ws_id, view, state) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading data...'
        });
        var me = this;
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/ws_details.json?work_station_id=' + ws_id,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                me.addOperatorsToView(view, data);
                me.addOutputsToView(view, data);
                me.addOptionsToView(view, data, ws_id, state);
                Ext.Viewport.setMasked(false);
            }
        });
    },

    loadMacData: function(ws_id, view) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading data...'
        });
        var me = this;
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/ws_mac_details.json?work_station_id=' + ws_id,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                var table = Ext.create('Poise.view.MachineView', {data: [{title: 'Machine Availability', machines: data.machines}]});
                view.down('#machinesTable').add(table);
                Ext.Viewport.setMasked(false);
            }
        });
    },

    goBackToDynamicView: function(button, e, eOpts){
        if(button.up("#dynamicOpView") != undefined) {
            button.up("#dynamicOpView").pop();
        } else if(button.up("#dynamicDashboard") != undefined) {
            button.up("#dynamicDashboard").pop();
        }
    },

    goBackToDynamicMacView: function(button, e, eOpts){
        if(button.up("#dynamicMacView") != undefined) {
            button.up("#dynamicMacView").pop();
        } else if(button.up("#dynamicDashboard") != undefined) {
            button.up("#dynamicDashboard").pop();
        }
    },

    addWSDetailsToView: function(view, data) {
        var table = Ext.create('Poise.view.WorkstationView', {data: [{title: 'Workstation Details', workstation: data}]});
        view.down('#wsTable').add(table);
    },

    addOperatorsToView: function(view, data) {
        var table = Ext.create('Poise.view.OperatorsView', {data: [{title: 'Operator(s)', operators: data.operators}]});
        view.down('#operatorsTable').add(table);
    },

    addOutputsToView: function(view, data) {
        var table = Ext.create('Poise.view.OutputsView', {data: [{title: 'Recent Output (Last 8 hours)', outputs: data.outputs}]});
        view.down('#outputsTable').add(table);
    },

    addOptionsToView: function(view, data, ws_id, state) {
        Ext.each(data.options, function(option){
            option['state'] = state;
            option['old_ws_id'] = ws_id;
        });

        var table = Ext.create('Poise.view.OptionsView', {data: [{old_ws_id: ws_id, state: state, title: 'Available Options for Deviation', options: data.options}]});
        view.down('#optionsTable').add(table);
    },

    loadDynamicDashboard: function(){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading data...'
        });
        var me = this;
        var obId = localStorage.getItem('obId');
        var view = Ext.ComponentQuery.query('#dbPanel')[0];
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/dynamic_balancing/ws_db_list.json?ob_id=' + obId,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                var table = Ext.create('Poise.view.DynamicDBContent', {data: data});
                view.removeAll();
                view.add(table);
                Ext.Viewport.setMasked(false);
            }
        });
    }
});
