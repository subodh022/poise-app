Ext.define('Poise.view.DynamicDBContent', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<tpl if="work_stations.length &gt; 0" >',
                    '<div class="db-table-header"><i class="fa fa-tag"></i> {section_name}</div>',
                    '<tpl for="work_stations">',
                        '<div class="ws-wrapper">',
                            '<div class="ws-header">',
                                '<span>{[xindex]}. {operation}</span>',
                            '</div>',
                            '<div class="ws-body">',
                                '<div data-ws="{ws_id}" data-sec="{section}" data-mac="{machine}" data-op="{operation}" data-state="{op_class}" class="op {op_class}"><span class="icon-custom">U</span></div>',
                                '<div data-ws="{ws_id}" data-sec="{section}" data-mac="{machine}" data-op="{operation}" data-state="{mac_class}" class="mac {mac_class}"><span class="icon-custom">/</span></div>',
                            '</div>',
                        '</div>',
                    '</tpl>',
                '</tpl>',
            '</tpl>'
        )
    },

    initialize: function(data) {
        var me = this;
        var dyanmicController = Poise.app.getController("Poise.controller.DynamicBalancing");
        this.element.on({
            tap: function(e, node) { 
                var el_op = e.getTarget('div.op');
                var el_mac = e.getTarget('div.mac');
                if (el_op) {
                    var ws_id = el_op.getAttribute('data-ws');
                    var section = el_op.getAttribute('data-sec');
                    var operation = el_op.getAttribute('data-op');
                    var machine = el_op.getAttribute('data-mac');
                    var state = el_op.getAttribute('data-state');
                    dyanmicController.showWSDetailsForDB({id: ws_id, state: state, section_name: section, operation_name: operation, machine_name: machine});
                } else if (el_mac) {
                    var ws_id = el_mac.getAttribute('data-ws');
                    var section = el_mac.getAttribute('data-sec');
                    var operation = el_mac.getAttribute('data-op');
                    var machine = el_mac.getAttribute('data-mac');
                    var state = el_mac.getAttribute('data-state');
                    dyanmicController.showWSMacDetailsForDB({id: ws_id, mac_state: state, section_name: section, operation_name: operation, machine_name: machine});
                }
            }
        });
    }
});