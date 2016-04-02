Ext.define('Poise.view.OutputChartPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.output_chart_panel',
    
    config: {
        layout: 'fit',
        flex: 2,
        items: [{
            xtype: 'oc-barchart',
            itemId: 'opAvgChart',
            chartOptions: {
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                staggerLabels: true,
                tooltips: true,
                showValues: true,
                noData: "No Output Data Found"
            }
        }]
    },

    initialize: function() {
        this.on('painted', this.refreshCharts);
    },

    refreshCharts: function() {
        for (i = 0; i < nv.graphs.length; i++) {
            if(nv.graphs[i].noData() == "No Output Data Found") {
                nv.graphs[i].update();
            }
        } 
    }
});