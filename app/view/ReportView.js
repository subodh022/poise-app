Ext.define('Poise.view.ReportView', {
    extend: 'Ext.TabPanel',
    alias: 'widget.reportview',
    xtype: 'reportview',

    requires: [
        'Poise.view.LineChartPanel',
        'Poise.view.BarChartPanel',
        'Poise.view.OutputAvgChartPanel',
        'Poise.view.OutputTrendChartPanel'
    ],

    config: {
        width: '100%',
        height: '100%',
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
                items: [
                    {
                        html: '<div class="chart-title">Sample Charts</div>',
                        style: 'text-align: center; margin-bottom: 1em; font-weight: bold;'
                    },
                    {
                        xtype: 'nvd3_barchart_panel'
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
                name: 'rework_container',
                layout: 'vbox',
                title: 'Rework',
                itemId: 'reworkChart',
                items: [
                    {
                        html: '<div class="chart-title">Sample Charts</div>',
                        style: 'text-align: center; margin-bottom: 1em; font-weight: bold;'
                    },
                    {
                        xtype: 'nvd3_barchart_panel'
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