Ext.create("Poise.view.LineChart", {
    extend: 'Ext.chart.Chart',
    alias: 'widget.linechart',
    xtype: 'linechart',

    config: {
        fullscreen: true,
        store: {
            fields: ['name', 'value'],
            data: [
                { name: 'Jan', value: 110},
                { name: 'Feb', value: 252},
                { name: 'Mar', value: 952},
                { name: 'Apr', value: 325},
                { name: 'May', value: 123},
                { name: 'Jun', value: 52},
                { name: 'Jul', value: 1122},
                { name: 'Aug', value: 35},
                { name: 'Sep', value: 172},
                { name: 'Oct', value: 752},
                { name: 'Nov', value: 810},
                { name: 'Dec', value: 410}
            ]
        },
        animate: false,
        interactions: ['panzoom'],
        series: [
            {
                type: 'line',
                xField: 'name',
                yField: 'value',
                style: {
                    fill: 'rgba(0,40,170,0.3)',
                    stroke: 'black'
                }
            }
        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                title: 'Number of Hits',
                minimum: 0,
                maximum: 1200,
                grid: {
                    fill: '#efefef',
                    odd: {
                        fill: '#cdcdcd'
                    },
                    even: {
                        lineWidth: 3
                    }
                }
            },
            {
                type: 'category',
                position: 'bottom',
                title: 'Month of the Year',
                grid: true,
                style: {
                    estStepSize: 1
                }
            }
        ]
    }
});