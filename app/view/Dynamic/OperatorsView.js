Ext.define('Poise.view.OperatorsView', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="table-header"><i class="fa fa-user"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th>Operator ID</th>',
                        '<th>Operator Name</th>',
                    '</thead>',
                    '<tpl for="operators">',
                        '<tr>',
                            '<td>{emp_id}</td>',
                            '<td>{emp_name}</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl if="operators.length == 0">',
                        '<tr><td colspan="2"><i>No Operators Found</i></td></tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});