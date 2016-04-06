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
        title: 'Report',
        iconCls: 'star',
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
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'center',
                                action: 'refresh-downtime-chart'
                            },
                            {
                                html: '<div class="chart-title">Date : ' + new Date().toLocaleDateString() + '</div>',
                                style: 'text-align: right; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
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
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'center',
                                action: 'refresh-rework-chart'
                            },
                            {
                                html: '<div class="chart-title">Date : ' + new Date().toLocaleDateString() + '</div>',
                                style: 'text-align: right; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
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
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'center',
                                action: 'refresh-output-chart'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'reportDate',
                                displayField: 'id',
                                valueField: 'id',
                                ui: 'normal',
                                flex: 2,
                                store: {
                                    fields: ['id'],
                                    data: [
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), 0).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -1).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -2).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -3).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -4).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -5).toLocaleDateString())
                                        }
                                    ]
                                },
                                style: {
                                    'padding-top': '0.25em'
                                }
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
                                html: '<div class="chart-title">Cumulative Output - Work Stations</div>',
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'center',
                                action: 'refresh-section-output-chart'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'reportDate',
                                displayField: 'id',
                                valueField: 'id',
                                ui: 'normal',
                                align: 'right',
                                flex: 2,
                                style: {
                                    'text-align': 'right'
                                },
                                store: {
                                    fields: ['id'],
                                    data: [
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), 0).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -1).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -2).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -3).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -4).toLocaleDateString())
                                        },
                                        {
                                            id: (Poise.util.Config.addDays(new Date(), -5).toLocaleDateString())
                                        }
                                    ]
                                },
                                style: {
                                    'padding-top': '0.25em'
                                }
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
                                html: '<div class="chart-title">Attendance Trend - Past Week</div>',
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
                            },
                            {
                                xtype: 'button',
                                text: 'Refresh Data',
                                iconCls: 'refresh',
                                ui: 'confirm',
                                width: 'auto',
                                height: '2.5em',
                                align: 'center',
                                action: 'refresh-attendance-chart'
                            },
                            {
                                html: '<div class="chart-title"></div>',
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
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