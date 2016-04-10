Ext.define('Poise.util.TableComponent', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div>{title}</div>',
                '<table>',
                    '<tpl for="rows">',
                    '<tr>',
                        '<tpl for="columns">',
                        '<td>{html}</td>',
                        '</tpl>',
                    '</tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});