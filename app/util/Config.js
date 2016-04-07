Ext.define('Poise.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
    
    config : {
        // apiBaseUrl: 'http://localhost:3000/'
        apiBaseUrl: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/'
    },

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },

    addDays: function(theDate, days) {
        return new Date(theDate.getTime() + days*24*60*60*1000);
    },

    lastSevenDays: function() {
        return [
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), 0), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), 0), "j M, Y"))
                    },
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -1), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -1), "j M, Y"))
                    },
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -2), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -2), "j M, Y"))
                    },
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -3), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -3), "j M, Y"))
                    },
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -4), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -4), "j M, Y"))
                    },
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -5), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -5), "j M, Y"))
                    },
                    {
                        id: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -6), "Y-m-d")),
                        label: (Ext.Date.format(Poise.util.Config.addDays(new Date(), -6), "j M, Y"))
                    }
                ];
    }
})