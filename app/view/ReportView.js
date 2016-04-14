Ext.define('Poise.view.ReportView', {
    extend: 'Ext.TabPanel',
    alias: 'widget.reportview',
    xtype: 'reportview',

    requires: [
        'Poise.view.LineChartPanel',
        'Poise.view.DowntimeChartPanel',
        'Poise.view.OutputChartPanel',
        'Poise.view.SectionOutputChartPanel',
        'Poise.view.ReworkChartPanel',
        'Poise.view.AttendanceChartPanel'
    ],

    config: {
        width: '100%',
        height: 'auto',
        title: 'View Reports',
        iconCls: 'line-chart',
        autoDestroy: true,
        defaults: {
            styleHtmlContent: true
        },
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
            cls: 'white_tabbar'
        },
        listeners: {
            activeitemchange: function(tabPanel, newTab, oldTab, index){
                newTab.fireEvent("painted", this);
            }
        },

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Daily Report'
            },
            {
                xtype: 'panel',
                name: 'output_container',
                layout: 'vbox',
                title: 'Output',
                itemId: 'outputChart',
                height: 'auto',
                scrollable: true,
                padding: 0,
                tab: {
                    cls : 'no-icon'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'chart-header',
                        items: [
                            {
                                html: '<div class="chart-title">Cumulative Output - Work Stations</div>',
                                style: 'text-align: left; font-weight: bold; padding-top: 0.5em;',
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                flex: 2,
                                align: 'center',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportDate',
                                        label: 'Date : ',
                                        labelWidth: 'auto',
                                        displayField: 'label',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        align: 'center',
                                        store: {
                                            fields: ['id', 'label'],
                                            data: Poise.util.Config.lastSevenDays()
                                        }
                                    },
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportSection',
                                        displayField: 'name',
                                        label: 'Section : ',
                                        labelWidth: 'auto',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        align: 'center'
                                    }
                                ]                                
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'right',
                                action: 'refresh-output-chart'
                            }
                        ]
                    },
                    {
                        xtype: 'output_chart_panel',
                        minHeight: '30em'
                    }
                ]
            },
            {
                xtype: 'panel',
                name: 'section_output_container',
                layout: 'vbox',
                title: 'Section Output',
                itemId: 'sectionOutputChart',
                height: 'auto',
                scrollable: true,
                padding: 0,
                tab: {
                    cls : 'no-icon'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'chart-header',
                        items: [
                            {
                                html: '<div class="chart-title">Cumulative Output - Sections</div>',
                                style: 'text-align: left; font-weight: bold; padding-top: 0.5em;',
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                flex: 2,
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportDate',
                                        label: 'Date : ',
                                        labelWidth: 'auto',
                                        displayField: 'label',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        flex: 1,
                                        store: {
                                            fields: ['id', 'label'],
                                            data: Poise.util.Config.lastSevenDays()
                                        }
                                    }
                                ]                                
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'right',
                                action: 'refresh-section-output-chart'
                            }
                        ]
                    },
                    {
                        xtype: 'section_output_chart_panel',
                        minHeight: '30em'
                    }
                ]
            },
            {
                xtype: 'panel',
                name: 'downtime_container',
                layout: 'vbox',
                title: 'Downtime',
                itemId: 'downtimeChart',
                height: 'auto',
                scrollable: true,
                padding: 0,
                tab: {
                    cls : 'no-icon'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'chart-header',
                        items: [
                            {
                                html: '<div class="chart-title">Cumulative Downtime - Work Stations</div>',
                                style: 'text-align: left; font-weight: bold; padding-top: 0.5em;',
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                flex: 2,
                                align: 'center',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportDate',
                                        label: 'Date : ',
                                        labelWidth: 'auto',
                                        displayField: 'label',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        align: 'center',
                                        store: {
                                            fields: ['id', 'label'],
                                            data: Poise.util.Config.lastSevenDays()
                                        }
                                    },
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportSection',
                                        displayField: 'name',
                                        label: 'Section : ',
                                        labelWidth: 'auto',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        align: 'center'
                                    }
                                ]                                
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'right',
                                action: 'refresh-downtime-chart'
                            }
                        ]
                    },
                    {
                        xtype: 'downtime_chart_panel',
                        minHeight: '30em'
                    }
                ]
            },
            {
                xtype: 'panel',
                name: 'rework_container',
                layout: 'vbox',
                title: 'Rework',
                itemId: 'reworkChart',
                height: 'auto',
                scrollable: true,
                padding: 0,
                tab: {
                    cls : 'no-icon'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'chart-header',
                        items: [
                            {
                                html: '<div class="chart-title">Cumulative Reworks - Work Stations</div>',
                                style: 'text-align: left; font-weight: bold; padding-top: 0.5em;',
                                flex: 1
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                flex: 2,
                                align: 'center',
                                items: [
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportDate',
                                        label: 'Date : ',
                                        labelWidth: 'auto',
                                        displayField: 'label',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        align: 'center',
                                        store: {
                                            fields: ['id', 'label'],
                                            data: Poise.util.Config.lastSevenDays()
                                        }
                                    },
                                    {
                                        xtype: 'selectfield',
                                        itemId: 'reportSection',
                                        displayField: 'name',
                                        label: 'Section : ',
                                        labelWidth: 'auto',
                                        valueField: 'id',
                                        ui: 'normal',
                                        cls: 'filters',
                                        align: 'center'
                                    }
                                ]                                
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'right',
                                action: 'refresh-rework-chart'
                            }
                        ]
                    },
                    {
                        xtype: 'rework_chart_panel',
                        minHeight: '30em'
                    }
                ]
            },
            {
                xtype: 'panel',
                name: 'attendance_container',
                layout: 'vbox',
                title: 'Attendance',
                itemId: 'attendanceChart',
                height: 'auto',
                scrollable: true,
                padding: 0,
                tab: {
                    cls : 'no-icon'
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        cls: 'chart-header',
                        items: [
                            {
                                html: '<div class="chart-title">Attendance Trend - Past Month</div>',
                                style: 'text-align: left; font-weight: bold; padding-top: 0.5em;',
                                flex: 2
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'right',
                                action: 'refresh-attendance-chart'
                            }
                        ]
                    },
                    {
                        xtype: 'attendance_chart_panel',
                        minHeight: '30em'
                    }
                ]
            }
        ]
    }
});