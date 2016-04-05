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
    }
})  