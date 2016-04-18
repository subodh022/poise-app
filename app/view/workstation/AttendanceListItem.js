Ext.define('Poise.view.AttendanceListItem', {
    extend: 'Ext.dataview.component.ListItem',
    requires: ['Ext.field.Toggle'],
    xtype: 'attendancelistitem',

    config: {
        padding: 5,
        layout: {
            type: 'hbox'
        },
        defaults: {
            margin: 5
        },
        cls: 'white-bg',

        items: [ 
            {
                xtype: 'component',
                flex: 1,
                html: '',
                itemId: 'operationCmp'
            }, 
            {
                xtype: 'component',
                flex: 1,
                html: '',
                itemId: 'machineCmp'
            },
            {
                xtype: 'component',
                flex: 1,
                html: '',
                itemId: 'operatorCmp'
            },
            {
                xtype: 'panel',
                layout: 'vbox',
                itemId: "togglePanel"
            },
            {
                xtype: 'hiddenfield',
                name: 'work_station_id',
                itemId: 'workStationId'
            },
            {
                xtype: 'hiddenfield',
                name: 'logged_at',
                itemId: 'loggedAt'
            }
        ]
    },

    updateRecord: function(record) {
        if(record == null || record.get('operators_attendance') === undefined) {
            return;
        }
        var me = this;
        var togglePanel = me.down('#togglePanel');
        if(togglePanel.getInnerItems().length > 0) {
            return;
        }
        var operators_names = record.get('operator_name').split(', ').map(function(op){
            return "<div style='margin: 1em 0'><span class='icon-custom'>U</span> "+op+"</div>";
        }).join('');
        me.down('#operationCmp').setHtml('<span class="icon-custom">x</span>' + record.get('operation_name'));
        me.down('#machineCmp').setHtml('<span class="icon-custom">/</span>' + record.get('machine_name'));
        me.down('#operatorCmp').setHtml(operators_names);
        me.down('#workStationId').setValue(record.get('id'));
        me.addToggleFields(record.get('operators_attendance'), record.get('attendance_today'), record.get('id'), togglePanel);
        me.callParent(arguments);
    },

    // addToggleFields: function(operators, attendance_today, togglePanel) {
    //     return;
    //     var me = this;
    //     if(operators.length > 0){
    //         Ext.each(operators, function(op){
    //             togglePanel.add({
    //                 xtype: 'togglefield',
    //                 height: '80%',
    //                 itemId: "toggleAttendance",
    //                 value: op[1],
    //                 name: op[0],
    //                 style: "background-color: inherit",
    //                 listeners: {
    //                     change: function (field, newValue, oldValue) {
    //                         if(field.up("attendancelistitem") != undefined) {
    //                             Ext.Ajax.request({
    //                                 url: Poise.util.Config.getApiBaseUrl() + 'api/v1/record_attendance',
    //                                 method: 'POST',          
    //                                 params: {
    //                                     work_station_id: field.up("attendancelistitem").down("#workStationId").getValue(),
    //                                     workstation_operator_id: field.getName(),
    //                                     logged_at: Ext.ComponentQuery.query("#attendanceView")[0].down("#reportDate").getValue(),
    //                                     present: field.getValue()
    //                                 },
    //                                 success: function(){console.log('success');},                                    
    //                                 failure: function(){console.log('failure');}
    //                             });
    //                         }
    //                     }
    //                 }
    //             });
    //         });
    //     } else {
    //         togglePanel.add({
    //             xtype: 'togglefield',
    //             height: '80%',
    //             itemId: "toggleAttendance",
    //             value: attendance_today,
    //             style: "background-color: inherit",
    //             listeners: {
    //                 change: function (field, newValue, oldValue) {
    //                     if(field.up("attendancelistitem") != undefined) {
    //                         Ext.Ajax.request({
    //                             url: Poise.util.Config.getApiBaseUrl() + 'api/v1/record_attendance',
    //                             method: 'POST',          
    //                             params: {
    //                                 work_station_id: field.up("attendancelistitem").down("#workStationId").getValue(),
    //                                 workstation_operator_id: 0,
    //                                 logged_at: Ext.ComponentQuery.query("#attendanceView")[0].down("#reportDate").getValue(),
    //                                 present: field.getValue()
    //                             },
    //                             success: function(){console.log('success');},                                    
    //                             failure: function(){console.log('failure');}
    //                         });
    //                     }
    //                 }
    //             }
    //         });
    //     }
    // },

    addToggleFields: function(operators, attendance_today, ws_id, togglePanel) {
        var me = this;
        if(operators.length > 0){
            Ext.each(operators, function(op){
                var value = (JSON.parse(op[1]) ? 1 : 0);
                var op_id = op[0];
                var toggle_class = (JSON.parse(op[1]) ? "toggle-button-selected" : "");
                var newPanel = Ext.create('Ext.Panel', {
                                html: '<div data-ws="'+ws_id+'" data-status="'+value+'" data-op="'+op_id+'" class="toggle-panel toggle-button '+toggle_class+'">'+
                                      '<button></button>'+
                                      '</div>'
                            });
                togglePanel.add(newPanel);
            });
        } else {
            var value = (attendance_today ? 1 : 0);
            var op_id = 0;
            var toggle_class = (attendance_today ? "toggle-button-selected" : "");
            var newPanel = Ext.create('Ext.Panel', {
                            html: '<div data-ws="'+ws_id+'" data-status="'+value+'" data-op="'+op_id+'" class="toggle-panel toggle-button '+toggle_class+'">'+
                                  '<button></button>'+
                                  '</div>'
                        });
            togglePanel.add(newPanel);
        }
    },

    initialize: function() {
        var me = this;
        var dyanmicController = Poise.app.getController("Poise.controller.DynamicBalancing");
        this.element.on({
            tap: function(e, node) { 
                var el = e.getTarget('div.toggle-button');
                if(el) {
                    Ext.get(el).toggleCls("toggle-button-selected");
                    var ws_id = el.getAttribute("data-ws");
                    var op_id = el.getAttribute("data-op");
                    var status = (el.getAttribute("data-status") == 0 ? 1 : 0);
                    // var present = (el.getAttribute("data-status") == 0 ? "true" : "false");
                    el.setAttribute("data-status", status);
                    Ext.Ajax.request({
                        url: Poise.util.Config.getApiBaseUrl() + 'api/v1/record_attendance',
                        method: 'POST',          
                        params: {
                            work_station_id: ws_id,
                            workstation_operator_id: op_id,
                            logged_at: Ext.ComponentQuery.query("#attendanceView")[0].down("#reportDate").getValue(),
                            present: status
                        },
                        success: function(){console.log('success');},                                    
                        failure: function(){console.log('failure');}
                    });
                }
            }
        });
    }
});