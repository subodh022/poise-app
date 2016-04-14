Ext.define('Poise.view.OutputsView', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="table-header"><i class="fa fa-history"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th>Average</th>',
                        '<th>Max</th>',
                        '<th>Min</th>',
                    '</thead>',
                    '<tpl for="outputs">',
                        '<tr>',
                            '<td>{average}</td>',
                            '<td>{max}</td>',
                            '<td>{min}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl if="outputs.length == 0">',
                        '<tr><td colspan="3"><i>No Outputs Found</i></td></tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});