Ext.define('Poise.view.SectionOutputChartPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.section_output_chart_panel',
    
    config: {
        layout: 'fit',
        flex: 2,
        items: [{
            xtype: 'oc-multibarchart',
            itemId: 'opAvgChart',
            chartOptions: {
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                staggerLabels: true,
                tooltips: true,
                showValues: true,
                noData: "No Section Output Data Found"
            }
        }]
    },

    initialize: function() {
        this.on('painted', this.refreshCharts);
    },

    refreshCharts: function() {
        for (i = 0; i < nv.graphs.length; i++) {
            if(nv.graphs[i].noData() == "No Section Output Data Found") {
                nv.graphs[i].update();
            }
        } 
    }
});