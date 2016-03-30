Ext.define('Poise.view.LineChartPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.nvd3_linechart_panel',
    
    config: {
        layout: 'fit',
        flex: 2,
        items: [{
            xtype: 'oc-linechart',
            chartOptions: {
                x: function(d,i) { return i; },
                showXAxis: true,
                showYAxis: true,
                transitionDuration: 250,
                noData: "No Rework Data Found"
            },
            chartFn: function(chart) {
                chart.xAxis
                    .axisLabel('Time (ms)')
                    .tickFormat(d3.format(',r'));

                chart.yAxis
                    .axisLabel('Voltage (v)')
                    .tickFormat(d3.format('.02f'));
            }
        }]
    },

    initialize: function() {
        this.on('painted', this.refreshCharts);
    },

    refreshCharts: function() {
        for (i = 0; i < nv.graphs.length; i++) {
            if(nv.graphs[i].noData() == "No Rework Data Found") {
                nv.graphs[i].update();
            }
        } 
    }
});
