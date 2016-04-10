Ext.define('Poise.controller.WorkstationController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Poise.view.AddDowntime'
    ],

    config: {

        views: [
            "WorkstationList",
            "AttendanceList",
            "DowntimeView",
            "ReworkView",
            "OutputView",
            "AttendanceView",
            "AddDowntime",
            "AddRework",
            "AddOutput"
        ],

        models: [
            "Workstation",
            "Downtime",
            "Output",
            "Rework"
        ],

        stores: [
            "Workstations",
            "Downtimes",
            "Reworks",
            "Outputs"
        ],

        refs: {
            listView: 'workstationlist',
            downtimeAddButton: 'adddowntimeform button[action=downtime-save]',
            downtimeBackButton: 'button#downtimeBack',
            reworkAddButton: 'addreworkform button[action=rework-save]',
            reworkBackButton: 'button#reworkBack',
            outputAddButton: 'addoutputform button[action=output-save]',
            outputBackButton: 'button#outputBack',
            searchButton: 'studentlist button[action=search-workstation]'
        },

        control: {
            "downtimeAddButton": {
                tap: 'addDowntime'
            },
            "reworkAddButton": {
                tap: 'addRework'
            },
            "outputAddButton": {
                tap: 'addOutput'
            },
            "downtimeBackButton": {
                tap: 'goBackToDowntimeView'
            },
            "reworkBackButton": {
                tap: 'goBackToReworkView'
            },
            "outputBackButton": {
                tap: 'goBackToOutputView'
            },
            "listView": {
                itemtap: 'onItemTapAction'
            }
        }
    },

    addDowntime: function (button, e, eOpts) {
        var form = button.up("#addDowntimeForm");
        var values = form.getValues(),
            store = Ext.getStore('Downtimes');
        store.clearData();
        store.add(values);
        store.sync();
        form.reset();
        button.up("#downtimeView").pop();
    },

    addRework: function (button, e, eOpts) {
        var form = button.up("#addReworkForm");
        var values = form.getValues(),
            store = Ext.getStore('Reworks');
        store.clearData();
        store.add(values);
        store.sync();
        form.reset();
        button.up("#reworkView").pop();
    },

    addOutput: function (button, e, eOpts) {
        var form = button.up("#addOutputForm");
        var values = form.getValues(),
            store = Ext.getStore('Outputs');
        store.clearData();
        store.add(values);
        store.sync();
        form.reset();
        button.up("#outputView").pop();
    },

    onItemTapAction: function (dataview, index, target, record, e, eOpts) {
        if(target.up('navigationview')._itemId == "downtimeView"){
            this.showDowntimeForm(target, record.data);
        } else if(target.up('navigationview')._itemId == "reworkView"){
            this.showReworkForm(target, record.data);
        } else if(target.up('navigationview')._itemId == "outputView"){
            this.showOutputForm(target, record.data);
        }
        
        // Ext.Msg.alert('', 'The operation bulletin selected is: ' + record.get('operation_bulletin_style'));
    },

    showDowntimeForm: function (target, record) {
        var view = Ext.create('Poise.view.AddDowntime');        
        target.up('#downtimeView').push(view);
        var loggedAt = view.up("#downtimeView").down("#reportDate").getValue() + " " + view.up("#downtimeView").down("#reportTime").getValue();
        view.down("hiddenfield[name=work_station_id]").setValue(record.id);
        view.down("textfield[name=logged_at]").setValue(loggedAt);
        this.loadData("downtime", record.id, loggedAt, view);
    },

    showReworkForm: function (target, record) {
        var view = Ext.create('Poise.view.AddRework');
        target.up('#reworkView').push(view);
        var loggedAt = view.up("#reworkView").down("#reportDate").getValue() + " " + view.up("#reworkView").down("#reportTime").getValue();
        view.down("hiddenfield[name=work_station_id]").setValue(record.id);
        view.down("textfield[name=logged_at]").setValue(loggedAt);
        this.loadData("rework", record.id, loggedAt, view);
    },

    showOutputForm: function (target, record) {
        var view = Ext.create('Poise.view.AddOutput');
        target.up('#outputView').push(view);
        var loggedAt = view.up("#outputView").down("#reportDate").getValue() + " " + view.up("#outputView").down("#reportTime").getValue();
        view.down("hiddenfield[name=work_station_id]").setValue(record.id);
        view.down("textfield[name=logged_at]").setValue(loggedAt);
        this.loadData("output", record.id, loggedAt, view);
    },

    goBackToDowntimeView: function(button, e, eOpts){
        button.up("#downtimeView").pop();
    },

    goBackToReworkView: function(button, e, eOpts){
        button.up("#reworkView").pop();
    },

    goBackToOutputView: function(button, e, eOpts){
        button.up("#outputView").pop();
    },
    
    loadData: function(type, ws_id, logged_at, view) {
        Ext.Ajax.request({
            url: Poise.util.Config.getApiBaseUrl() + 'api/v1/work_stations/' + ws_id + '/' + type + '.json?logged_at=' + logged_at,
            success: function(response){
                var data = Ext.JSON.decode(response.responseText);
                if(data.length != 0) {
                    view.down("textfield[name="+type+"]").setValue(data[0][type]);
                    view.down("textareafield[name=remarks]").setValue(data[0]['remarks']);
                    view.down("button[action="+type+"-save]").setText("Update");
                }
            }
        });
    }
});
