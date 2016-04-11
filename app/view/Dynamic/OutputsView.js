Ext.define('Poise.view.OutputsView', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="table-header"><i class="fa fa-history"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th>Logged At</th>',
                        '<th>Output</th>',
                        '<th>Remarks</th>',
                    '</thead>',
                    '<tpl for="outputs">',
                        '<tr>',
                            '<td>{formatted_logged_at}</td>',
                            '<td>{output}</td>',
                            '<td>{[values.remarks == "" ? "<i>None</i>" : values.remarks]}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl if="outputs.length == 0">',
                        '<tr><td colspan="2"><i>No Outputs Found</i></td></tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});