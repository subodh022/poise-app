Ext.define('Poise.view.OutputTrendChartPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.nvd3_optrend_panel',
    
    config: {
        layout: 'fit',
        flex: 2,
        items: [{
            xtype: 'oc-barchart',
            itemId: 'opTrendChart',
            chartOptions: {
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                staggerLabels: true,
                tooltips: true,
                showValues: true,
                noData: "No Output Trend Data Found"
            }
        }]
    },

    initialize: function() {
        this.on('painted', this.refreshCharts);
    },

    refreshCharts: function() {
        for (i = 0; i < nv.graphs.length; i++) {
            if(nv.graphs[i].noData() == "No Output Trend Data Found") {
                nv.graphs[i].update();
            }
        } 
    }
});