Ext.define('Poise.controller.Reports', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.Ajax'
    ],
    
    config: {
        refs: {
            cardContainer: 'reportview container[name=downtime_container]',
            downtimeChart: 'downtime_chart_panel oc-barchart',
            reworkChart: 'rework_chart_panel oc-barchart',
            outputChart: 'output_chart_panel oc-barchart',
            opTrendChart: 'nvd3_optrend_panel oc-barchart',
            barChart: 'reportview oc-barchart',
            lineChart: 'reportview oc-linechart',
            scatterChart: 'reportview oc-scatterchart',
            stackedAreaChart: 'reportview oc-stackedareachart',
            stackedBarChart: 'reportview oc-stackedbarchart',
            horizontalStackedBarChart: 'reportview oc-horizontalstackedbarchart',
            linePlusBarChart: 'reportview oc-lineplusbarchart',
            cumulativeLineChart: 'reportview oc-cumulativelinechart',
            lineWithFocusChart: 'reportview oc-linewithfocuschart',
            pieChart: 'reportview oc-piechart',
            bulletChart: 'reportview oc-bulletchart'
        },
        
        control: {
            "toolbar[name=view_button_toolbar] button": {
                tap: 'onNavButtonTap'
            },
            
            cardContainer: {
                activeitemchange: 'onActiveItemChange'
            }
        }
    },
    
    launch: function() {
        //trigger the onActiveItemChange initially to load the first chart's data
        var downtimeTriggerObj = { config: { xtype: 'downtime_chart_panel' } },
            me = this;
    
        //the barchart is at index 0 so when the chart is loaded we need to
        //load the data
        this.getDowntimeChart().on('chartLoaded', function(chart) {
            me.onActiveItemChange(null, downtimeTriggerObj);
        });

        //trigger the onActiveItemChange initially to load the first chart's data
        var reworkTriggerObj = { config: { xtype: 'rework_chart_panel' } },
            me = this;
    
        //the barchart is at index 0 so when the chart is loaded we need to
        //load the data
        this.getReworkChart().on('chartLoaded', function(chart) {
            me.onActiveItemChange(null, reworkTriggerObj);
        });

        //trigger the onActiveItemChange initially to load the first chart's data
        var outputTriggerObj = { config: { xtype: 'output_chart_panel' } },
            me = this;
    
        //the barchart is at index 0 so when the chart is loaded we need to
        //load the data
        this.getOutputChart().on('chartLoaded', function(chart) {
            me.onActiveItemChange(null, outputTriggerObj);
        });
    },
    
    onNavButtonTap: function(cmp, e, eOpts) {
        var cardContainer = this.getCardContainer(),
            index = cmp.viewIndex;
    
        //update the view and display the selected chart
        cardContainer.animateActiveItem(index, {type:'slide', direction:'left'});
    },
    
    onActiveItemChange: function(container, value, oldValue, eOpts) {
        var xtype = value.config.xtype,
            chart;
        var date_today = new Date().toLocaleDateString();
        
        switch(xtype) {
            case 'downtime_chart_panel':
                var chart = this.getDowntimeChart();
                this.loadChartData('http://localhost:3000/api/v1/reports/downtime.json?ob_id=4&report_date='+date_today, chart);
                break;
            case 'rework_chart_panel':
                var chart = this.getReworkChart();
                this.loadChartData('http://localhost:3000/api/v1/reports/rework.json?ob_id=4&report_date='+date_today, chart);
                break;
            case 'output_chart_panel':
                var chart = this.getOutputChart();
                this.loadChartData('http://localhost:3000/api/v1/reports/output.json?ob_id=4&report_date='+date_today, chart);
                break;
            case 'nvd3_optrend_panel':
                var chart = this.getOpTrendChart();
                var chartdata = [{"key":"Cumulative Return","values":[{"label":"A","value":-29.765957771107},{"label":"B","value":0},{"label":"C","value":32.807804682612},{"label":"D","value":196.45946739256},{"label":"E","value":0.19434030906893},{"label":"F","value":-98.079782601442},{"label":"G","value":-13.925743130903},{"label":"H","value":-5.1387322875705}]}];
                chart.renderChartData(chartdata);
                // this.loadChartData('chartdata/barchart.json', chart);
                break;
            case 'rework_linechart_panel':
                var chart = this.getLineChart();
                var chartdata = [{"values":[{"x":0,"y":0},{"x":1,"y":0.09983341664682802},{"x":2,"y":0.19866933079506113},{"x":3,"y":0.2955202066613394},{"x":4,"y":0.38941834230864997},{"x":5,"y":0.47942553860420295},{"x":6,"y":0.5646424733950346},{"x":7,"y":0.6442176872376908},{"x":8,"y":0.7173560908995221},{"x":9,"y":0.7833269096274824},{"x":10,"y":0.8414709848078964},{"x":11,"y":0.891207360061434},{"x":12,"y":0.9320390859672261},{"x":13,"y":0.9635581854171918},{"x":14,"y":0.9854497299884593},{"x":15,"y":0.9974949866040542},{"x":16,"y":0.9995736030415037},{"x":17,"y":0.9916648104524685},{"x":18,"y":0.9738476308781939},{"x":19,"y":0.9463000876874138},{"x":20,"y":0.9092974268256813},{"x":21,"y":0.8632093666488724},{"x":22,"y":0.8084964038195901},{"x":23,"y":0.7457052121767194},{"x":24,"y":0.6754631805511507},{"x":25,"y":0.5984721441039561},{"x":26,"y":0.5155013718214635},{"x":27,"y":0.4273798802338298},{"x":28,"y":0.33498815015590455},{"x":29,"y":0.23924932921398223},{"x":30,"y":0.141120008059867},{"x":31,"y":0.041580662433290325},{"x":32,"y":-0.05837414342758008},{"x":33,"y":-0.157745694143248},{"x":34,"y":-0.25554110202683117},{"x":35,"y":-0.3507832276896195},{"x":36,"y":-0.4425204432948521},{"x":37,"y":-0.5298361409084932},{"x":38,"y":-0.611857890942718},{"x":39,"y":-0.6877661591839737},{"x":40,"y":-0.7568024953079274},{"x":41,"y":-0.8182771110644096},{"x":42,"y":-0.8715757724135877},{"x":43,"y":-0.9161659367494538},{"x":44,"y":-0.9516020738895161},{"x":45,"y":-0.9775301176650958},{"x":46,"y":-0.9936910036334636},{"x":47,"y":-0.9999232575641003},{"x":48,"y":-0.9961646088358393},{"x":49,"y":-0.9824526126243325},{"x":50,"y":-0.9589242746631372},{"x":51,"y":-0.9258146823277319},{"x":52,"y":-0.8834546557201527},{"x":53,"y":-0.8322674422239003},{"x":54,"y":-0.772764487555987},{"x":55,"y":-0.7055403255703908},{"x":56,"y":-0.6312666378723214},{"x":57,"y":-0.5506855425976371},{"x":58,"y":-0.46460217941375687},{"x":59,"y":-0.373876664830236},{"x":60,"y":-0.2794154981989255},{"x":61,"y":-0.18216250427209582},{"x":62,"y":-0.08308940281749627},{"x":63,"y":0.016813900484349695},{"x":64,"y":0.11654920485049358},{"x":65,"y":0.2151199880878152},{"x":66,"y":0.31154136351337786},{"x":67,"y":0.40484992061659786},{"x":68,"y":0.4941133511386078},{"x":69,"y":0.5784397643882},{"x":70,"y":0.6569865987187882},{"x":71,"y":0.7289690401258759},{"x":72,"y":0.7936678638491521},{"x":73,"y":0.850436620628564},{"x":74,"y":0.8987080958116263},{"x":75,"y":0.9379999767747377},{"x":76,"y":0.9679196720314863},{"x":77,"y":0.9881682338769989},{"x":78,"y":0.9985433453746045},{"x":79,"y":0.9989413418397711},{"x":80,"y":0.9893582466233806},{"x":81,"y":0.9698898108450862},{"x":82,"y":0.9407305566797717},{"x":83,"y":0.9021718337562932},{"x":84,"y":0.8545989080882795},{"x":85,"y":0.7984871126234895},{"x":86,"y":0.7343970978741132},{"x":87,"y":0.6629692300821823},{"x":88,"y":0.5849171928917616},{"x":89,"y":0.501020856457884},{"x":90,"y":0.41211848524175615},{"x":91,"y":0.3190983623493518},{"x":92,"y":0.2228899141002473},{"x":93,"y":0.1244544235070616},{"x":94,"y":0.024775425453357564},{"x":95,"y":-0.07515112046180927},{"x":96,"y":-0.17432678122297954},{"x":97,"y":-0.27176062641094206},{"x":98,"y":-0.3664791292519284},{"x":99,"y":-0.45753589377532067}],"key":"Sine Wave","color":"#ff7f0e"}];
                chart.renderChartData(chartdata);
                // nv.graphs[nv.graphs.length - 1].update();
                // this.loadChartData('chartdata/linechart.json', chart);
                break;
            case 'nvd3_scatterchart_panel':
                chart = this.getScatterChart();
                this.loadChartData('chartdata/scatterchart.json', chart);
                break;
            case 'nvd3_stackedareachart_panel':
                chart = this.getStackedAreaChart();
                this.loadChartData('chartdata/stackedareachart.json', chart);
                break;
            case 'nvd3_stackedbarchart_panel':
                chart = this.getStackedBarChart();
                this.loadChartData('chartdata/stackedbarchart.json', chart);
                break;
            case 'nvd3_horizontalstackedbarchart_panel':
                chart = this.getHorizontalStackedBarChart();
                this.loadChartData('chartdata/horizontalstackedbarchart.json', chart);
                break;
            case 'nvd3_lineplusbarchart_panel':
                chart = this.getLinePlusBarChart();
                this.loadChartData('chartdata/lineplusbarchart.json', chart);
                break;
            case 'nvd3_cumulativelinechart_panel':
                chart = this.getCumulativeLineChart();
                this.loadChartData('chartdata/cumulativelinechart.json', chart);
                break;
            case 'nvd3_linewithfocuschart_panel':
                chart = this.getLineWithFocusChart();
                this.loadChartData('chartdata/linewithfocuschart.json', chart);
                break;
            case 'nvd3_piechart_panel':
                chart = this.getPieChart();
                this.loadChartData('chartdata/piechart.json', chart);
                break;
            case 'nvd3_bulletchart_panel':
                chart = this.getBulletChart();
                this.loadChartData('chartdata/bulletchart.json', chart);
                break;
            default:
        }
    },
    
    loadChartData: function(url, chart) {
        //grab the specified json file via xhr
        Ext.Ajax.request({
            url: url,
            success: function(response){
                var chartData = Ext.JSON.decode(response.responseText);
                
                //update the chart data
                chart.renderChartData(chartData);
            }
        });
    }
});