Ext.define('Poise.view.MachineView', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="table-header"><i class="fa fa-briefcase"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th>Mac ID</th>',
                        '<th>Name</th>',
                        '<th>Attachment</th>',
                        '<th>Availability</th>',
                    '</thead>',
                    '<tpl for="machines">',
                        '<tr>',
                            '<td>{mac_id}</td>',
                            '<td>{name}</td>',
                            '<td>{[values.attachment ? values.attachment : "<i>Not Available</i>"]}</td>',
                            '<td>{available_units}</td>',
                        '</tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});