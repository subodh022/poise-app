Ext.define('Poise.view.ReportView', {
    extend: 'Ext.TabPanel',
    alias: 'widget.reportview',
    xtype: 'reportview',

    requires: [
        'Poise.view.LineChartPanel',
        'Poise.view.DowntimeBarChartPanel',
        'Poise.view.OutputAvgChartPanel',
        'Poise.view.OutputTrendChartPanel'
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
            docked: 'top',
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
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                html: '<div class="chart-title">Cumulative Downtime - Work Stations</div>',
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;',
                                flex: 1
                            },
                            {
                                html: '<div class="chart-title">Date : ' + new Date().toLocaleDateString() + '</div>',
                                style: 'text-align: right; margin-bottom: 1em; font-weight: bold;',
                                flex: 2
                            }
                        ]
                    },
                    {
                        xtype: 'nvd3_downtime_barchart_panel',
                        minHeight: '30em'
                    },
                    {
                        html: '<div class="chart-title">Sample Charts</div>',
                        style: 'text-align: center; margin-bottom: 1em; font-weight: bold;'
                    },
                    {
                        xtype: 'nvd3_linechart_panel',
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
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                html: '<div class="chart-title">Sample Charts</div>',
                                style: 'text-align: left; margin-bottom: 1em; font-weight: bold;'
                            },
                            {
                                html: '<div class="chart-title">Date : </div>',
                                style: 'text-align: right; margin-bottom: 1em; font-weight: bold;'
                            }
                        ]
                    },
                    {
                        xtype: 'nvd3_downtime_barchart_panel'
                    },
                    {
                        html: '<div class="chart-title">Sample Charts</div>',
                        style: 'text-align: center; margin-bottom: 1em; font-weight: bold;'
                    },
                    {
                        xtype: 'nvd3_linechart_panel'
                    }
                ]
            },
            {
                xtype: 'panel',
                name: 'output_container',
                layout: 'vbox',
                title: 'Output',
                itemId: 'outputChart',
                items: [
                    {
                        html: '<div class="chart-title">Sample Charts</div>',
                        style: 'text-align: center; margin-bottom: 1em; font-weight: bold;'
                    },
                    {
                        xtype: 'nvd3_opavg_panel'
                    },
                    {
                        html: '<div class="chart-title">Sample Charts</div>',
                        style: 'text-align: center; margin-bottom: 1em; font-weight: bold;'
                    },
                    {
                        xtype: 'nvd3_optrend_panel'
                    }
                ]
            }
        ]
    }
});