Ext.define('Poise.view.LoginForm', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.loginform',
    xtype: 'loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Poise.view.Home'
    ],

    config: {
        title: 'Poise',
        width: '100%',
        height: '100%',
        itemId: 'loginForm',
        cls: 'box-form',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Poise'
            },
            {
                xtype: 'fieldset',
                name: 'username',
                title: 'Login to Poise',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        itemId: 'Username',
                        placeHolder: 'Enter Username'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                name: 'password',
                items: [
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        itemId: 'Password',
                        labelWrap: true,
                        placeHolder: 'Enter Password'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                margin: '10',
                items: [
                    {
                        xtype: 'button',
                        action: 'login',
                        ui: 'confirm',
                        iconCls: 'user',
                        text: 'Login',
                        width: 'auto',
                        itemId: 'Login'
                    }
                ]
            }
        ],
 
        listeners: [
            {
                fn: 'onLogin',
                event: 'tap',
                delegate: '#Login'
            }
        ]
    },
 
    onLogin: function(button, e, eOpts) {
        var formpanel = button.up('#loginForm');
        var username = formpanel.down('#Username').getValue();
        var password = formpanel.down('#Password').getValue();
        // Ext.Msg.alert('Login', username + ' ' + password);
        if(username == "admin" && password == "password") {
            var view = Ext.create('Poise.view.Home');
            Ext.Viewport.setActiveItem(view);
        }
    }
});
