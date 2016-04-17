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
                        '<th>Attendance Today</th>',
                        '<th>Skill Level</th>',
                    '</thead>',
                    '<tpl for="operators">',
                        '<tr>',
                            '<td>{emp_id}</td>',
                            '<td><span>{name}</span></td>',
                            '<td><span class="{name_class}"><i class="fa fa-square"></i> {[values.name_class == "red-item" ? "Absent" : "Present"]}</span></td>',
                            '<td><span class="{skill_class}"><i class="fa fa-square"></i> {skill}</span></td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl if="operators.length == 0">',
                        '<tr><td colspan="4"><i>No Operators Found</i></td></tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});