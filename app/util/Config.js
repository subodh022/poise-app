Ext.define('Poise.util.Config', { 
    singleton : true,
    alias : 'widget.appConfigUtil',
    
    config : {
        apiBaseUrl: 'http://localhost:3000/'
        // apiBaseUrl: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/'
    },

    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },

    addDays: function(theDate, days) {
        return new Date(theDate.getTime() + days*24*60*60*1000);
    }
})  