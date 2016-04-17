Ext.define('Poise.view.WorkstationView', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="table-header"><i class="fa fa-briefcase"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th>Section</th>',
                        '<th>Operation</th>',
                        '<th>Machine</th>',
                    '</thead>',
                    '<tpl for="workstation">',
                        '<tr>',
                            '<td>{section_name}</td>',
                            '<td>{operation_name}</td>',
                            '<td>{machine_name}</td>',
                        '</tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});