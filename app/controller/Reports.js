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
            sectionOutputChart: 'section_output_chart_panel oc-multibarchart',
            attendanceChart: 'attendance_chart_panel oc-multibarchart',
            downtimeRefresh: 'button[action=refresh-downtime-chart]',
            reworkRefresh: 'button[action=refresh-rework-chart]',
            outputRefresh: 'button[action=refresh-output-chart]',
            downtimeSection: 'panel[name=downtime_container] #reportSection',
            reworkSection: 'panel[name=rework_container] #reportSection',
            outputSection: 'panel[name=output_container] #reportSection',
            sectionOutputRefresh: 'button[action=refresh-section-output-chart]',
            attendanceRefresh: 'button[action=refresh-attendance-chart]'
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
            }, 

            downtimeSection: {
                change: 'refreshDowntimeChart'
            },
            
            reworkSection: {
                change: 'refreshReworkChart'
            },
            
            outputSection: {
                change: 'refreshOutputChart'
            },
            
            sectionOutputRefresh: {
                tap: 'refreshSectionOutputChart'
            },

            attendanceRefresh: {
                tap: 'refreshAttendanceChart'
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

    refreshSectionOutputChart: function() {
        var sectionOutputTriggerObj = { config: { xtype: 'section_output_chart_panel' } };
        this.onActiveItemChange(null, sectionOutputTriggerObj);
    },

    refreshAttendanceChart: function() {
        var attnTriggerObj = { config: { xtype: 'attendance_chart_panel' } };
        this.onActiveItemChange(null, attnTriggerObj);
    },
    
    onActiveItemChange: function(container, value, oldValue, eOpts) {
        var xtype = value.config.xtype,
            chart;
        var date_today = new Date().toLocaleDateString();
        var ob_id = localStorage.getItem('obId');
        
        switch(xtype) {
            case 'downtime_chart_panel':
                var chart = this.getDowntimeChart();
                date_today = chart.up("#downtimeChart").down("#reportDate").getValue();
                section = chart.up("#downtimeChart").down("#reportSection").getValue();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/downtime.json?ob_id='+ob_id+'&report_date='+date_today+'&report_section='+section, chart);
                break;
            case 'rework_chart_panel':
                var chart = this.getReworkChart();
                date_today = chart.up("#reworkChart").down("#reportDate").getValue();
                section = chart.up("#reworkChart").down("#reportSection").getValue();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/rework.json?ob_id='+ob_id+'&report_date='+date_today+'&report_section='+section, chart);
                break;
            case 'output_chart_panel':
                var chart = this.getOutputChart();
                date_today = chart.up("#outputChart").down("#reportDate").getValue();
                section = chart.up("#outputChart").down("#reportSection").getValue();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/output.json?ob_id='+ob_id+'&report_date='+date_today+'&report_section='+section, chart);
                break;
            case 'section_output_chart_panel':
                var chart = this.getSectionOutputChart();
                date_today = chart.up("#sectionOutputChart").down("#reportDate").getValue();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/section_output.json?ob_id='+ob_id+'&report_date='+date_today, chart);
                break;
            case 'attendance_chart_panel':
                var chart = this.getAttendanceChart();
                this.loadChartData(Poise.util.Config.getApiBaseUrl() + 'api/v1/reports/attendance.json?ob_id='+ob_id+'&report_date='+date_today, chart);
                break;
            default:
        }
    },
    
    loadChartData: function(url, chart) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading data...'
        });
        Ext.Ajax.request({
            url: url,
            success: function(response){
                var chartData = Ext.JSON.decode(response.responseText);
                Ext.each(chartData, function(data, i){
                    if(data.values.length == 0) {
                        // chart.setHtml('<text class="nvd3 nv-noData" dy="-.7em" style="text-anchor: middle;" x="980" y="208.5">No Output Data Found</text>');
                        // return;
                    }
                });
                chart.renderChartData(chartData);
                Ext.Viewport.setMasked(false);
            }
        });
    }
});