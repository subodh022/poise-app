Ext.define('Poise.view.ObForm', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.obform',
    xtype: 'obform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Poise.store.Lines',
        'Poise.store.ObStore',
        'Poise.store.Workstations'
    ],

    config: {
        title: 'Line & OB',
        iconCls: 'settings',
        width: '100%',
        height: '100%',
        itemId: 'obform',
        cls: 'box-form',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Line and OB'
            },
            {
                xtype: 'fieldset',
                name: 'line',
                title: 'Set Default Line and Operation Bulletin',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Choose Line',
                        itemId: 'Line',
                        labelWrap: true,
                        displayField: 'title',
                        store: {
                            type: 'lines'
                        },
                        valueField: 'id'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                name: 'ob',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Choose Operation Bulletin',
                        itemId: 'Ob',
                        labelWrap: true,
                        placeHolder: 'No OB Found',
                        displayField: 'style',
                        valueField: 'id'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                margin: '10',
                items: [
                    {
                        xtype: 'button',
                        action: 'setob',
                        ui: 'confirm',
                        iconCls: 'settings',
                        text: 'Set Line & OB',
                        width: 'auto',
                        itemId: 'setOb',
                        hidden: true
                    }
                ]
            }
        ],
 
        listeners: [
            {
                fn: 'onLineChange',
                event: 'change',
                delegate: '#Line'
            },
            {
                fn: 'setOperationBulletin',
                event: 'change',
                delegate: '#Ob'
            },
            {
                fn: 'setLineAndOb',
                event: 'tap',
                delegate: '#setOb'
            }
        ]
    },
 
    onLineChange: function(selectfield, newValue, oldValue, options) {
        localStorage.setItem('lineId', newValue);
        localStorage.setItem('obId', '');
        var formpanel = selectfield.up('#obform');
        var obField = formpanel.down('#Ob');
        var obStore = Ext.getStore('Obs');
        obStore.filter('line_id',newValue);
        obStore.load({
            params: {'line_id': newValue}
        });
        obField.setStore(obStore);
    },

    setOperationBulletin: function(selectfield, newValue, oldValue, options) {
        localStorage.setItem('obId', newValue);
        this.setLineAndOb(selectfield);
    },

    setLineAndOb: function(formCmp, e, eOpts) {
        var wsStore = Ext.getStore('Workstations');
        var obId = localStorage.getItem('obId');
        wsStore.load({
            params: {'operation_bulletin_id': obId}
        });
        formCmp.up("home").down("downtimeview").down("workstationlist").setStore(wsStore);
        formCmp.up("home").down("reworkview").down("workstationlist").setStore(wsStore);
        formCmp.up("home").down("outputview").down("workstationlist").setStore(wsStore);

        this.loadReports();
    },

    loadReports: function() {
        var reportsController = Poise.app.getController("Poise.controller.Reports");

        var downtimeTriggerObj = { config: { xtype: 'downtime_chart_panel' } };
        reportsController.onActiveItemChange(null, downtimeTriggerObj);

        var reworkTriggerObj = { config: { xtype: 'rework_chart_panel' } };
        reportsController.onActiveItemChange(null, reworkTriggerObj);

        var outputTriggerObj = { config: { xtype: 'output_chart_panel' } };
        reportsController.onActiveItemChange(null, outputTriggerObj);

        var sectionOutputTriggerObj = { config: { xtype: 'section_output_chart_panel' } };
        reportsController.onActiveItemChange(null, sectionOutputTriggerObj);

        var attendanceTriggerObj = { config: { xtype: 'attendance_chart_panel' } };
        reportsController.onActiveItemChange(null, attendanceTriggerObj);
    }
});
