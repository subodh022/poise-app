Ext.define('Poise.view.ObForm', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.obform',
    xtype: 'obform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Poise.store.Lines',
        'Poise.store.ObStore'
    ],

    config: {
        title: 'Line & OB',
        iconCls: 'settings',
        width: '100%',
        height: '100%',
        itemId: 'obform',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Line and OB'
            },
            {
                xtype: 'fieldset',
                name: 'line',
                title: 'Set Default Line and OB',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Choose Line',
                        itemId: 'Line',
                        labelWrap: true,
                        displayField: 'name',
                        store: {
                            type: 'lines'
                        },
                        valueField: 'id'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                name: 'ob',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Choose OB',
                        itemId: 'Ob',
                        labelWrap: true,
                        placeHolder: 'Select Line First',
                        displayField: 'name',
                        valueField: 'id'
                    }
                ]
            }
        ],
 
        listeners: [
            {
                fn: 'onLineChange',
                event: 'change',
                delegate: '#Line'
            },
            {
                fn: 'setOperationBulletin',
                event: 'change',
                delegate: '#Ob'
            }
        ]
    },
 
    onLineChange: function(selectfield, newValue, oldValue, options) {
        localStorage.setItem('lineId', newValue);
        var formpanel = selectfield.up('#obform');
        var obField = formpanel.down('#Ob');
        var obStore = Ext.getStore('Obs');
        obStore.filter('line_id',newValue);
        obStore.load();
        obField.setStore(obStore);
    },

    setOperationBulletin: function(selectfield, newValue, oldValue, options) {
        localStorage.setItem('obId', newValue);
        // Ext.Msg.alert(localStorage.getItem('lineId') + ' ' + localStorage.getItem('obId'));
    }
});
