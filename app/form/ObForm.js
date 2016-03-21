Ext.define('Poise.view.ObForm', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.obform',
    xtype: 'obform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],

    config: {
        title: 'OB',
        iconCls: 'settings',
        width: '100%',
        height: '100%',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Set Line & OB'
            },
            {
                xtype: 'fieldset',
                title: 'Select',
                name: 'line',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Choose one',
                        options: [
                            {text: 'First Option',  value: 'first'},
                            {text: 'Second Option', value: 'second'},
                            {text: 'Third Option',  value: 'third'}
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Select',
                name: 'ob',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Choose one',
                        options: [
                            {text: 'First Option',  value: 'first'},
                            {text: 'Second Option', value: 'second'},
                            {text: 'Third Option',  value: 'third'}
                        ]
                    }
                ]
            }
        ]
    }
});
