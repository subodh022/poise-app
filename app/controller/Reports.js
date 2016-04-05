Ext.define('Poise.controller.Reports', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'Ext.Ajax'
    ],
    
    config: {
        refs: {
            cardContainer: 'reportview container[name=downtime_container]',
            downtimeChart: 'downtime_chart_panel oc-multibarchart',
            reworkChart: 'rework_chart_panel oc-multibarchart',
            outputChart: 'output_chart_panel oc-multibarchart',
            attendanceChart: 'attendance_chart_panel oc-multibarchart',
            downtimeRefresh: 'button[action=refresh-downtime-chart]',
            reworkRefresh: 'button[action=refresh-rework-chart]',
            outputRefresh: 'button[action=refresh-output-chart]'
        },
        
        control: {            
            downtimeRefresh: {
                tap: 'refreshDowntimeChart'
            },
            
            reworkRefresh: {
                tap: 'refreshReworkChart'
            },
            
            outputRefresh: {
                tap: 'refreshOutputChart'
            }
        }
    },

    refreshDowntimeChart: function() {
        var downtimeTriggerObj = { config: { xtype: 'downtime_chart_panel' } };
        this.onActiveItemChange(null, downtimeTriggerObj);
    },

    refreshReworkChart: function() {
        var reworkTriggerObj = { config: { xtype: 'rework_chart_panel' } };
        this.onActiveItemChange(null, reworkTriggerObj);
    },

    refreshOutputChart: function() {
        var outputTriggerObj = { config: { xtype: 'output_chart_panel' } };
        this.onActiveItemChange(null, outputTriggerObj);
    },
    
    onActiveItemChange: function(container, value, oldValue, eOpts) {
        var xtype = value.config.xtype,
            chart;
        var date_today = new Date().toLocaleDateString();
        var ob_id = localStorage.getItem('obId');
        
        switch(xtype) {
            case 'downtime_chart_panel':
                var chart = this.getDowntimeChart();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/downtime.json?ob_id='+ob_id+'&report_date='+date_today, chart);
                break;
            case 'rework_chart_panel':
                var chart = this.getReworkChart();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/rework.json?ob_id='+ob_id+'&report_date='+date_today, chart);
                break;
            case 'output_chart_panel':
                var chart = this.getOutputChart();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/output.json?ob_id='+ob_id+'&report_date='+date_today, chart);
                break;
            case 'attendance_chart_panel':
                var chart = this.getAttendanceChart();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/attendance.json?ob_id='+ob_id+'&report_date='+date_today, chart);
                break;
            default:
        }
    },
    
    loadChartData: function(url, chart) {
        Ext.Ajax.request({
            url: url,
            success: function(response){
                var chartData = Ext.JSON.decode(response.responseText);
                chart.renderChartData(chartData);
            }
        });
    }
});