Ext.define('Poise.view.OptionsView', {
    extend: 'Ext.Container',
    alias: 'widget.options_view',
    xtype: 'options_view',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div data-old-ws="{old_ws_id}" class="table-header"><i class="fa fa-life-ring"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th style="width: 10%"><i class="fa fa-sort"></i> Workstation</th>',
                        '<th>Operation</th>',
                        '<th>Operator(s)</th>',
                        '<th>Recent Outputs</th>',
                        '<th style="width: 10%">Action</th>',                        
                    '</thead>',
                    '<tpl for="options">',
                        '<tr class="x-option-item dynamic-options">',
                            '<td><i class="fa fa-chevron-{[values.direction.toLowerCase()]}"></i>{direction}</td>',
                            '<td>{operation}</td>',
                            '<td class="no-padding">',
                                '<tpl for="operator">',
                                    '<div>',
                                        '<span class="op-boxed {name_class}">{[values.name ? values.name : "--"]}</span>',
                                        '<span class="op-boxed {skill_class}">{[values.skill ? "Skill - " + values.skill : "--"]}</span>',
                                    '</div>',
                                '</tpl>',
                            '</td>',
                            '<td class="no-padding">',
                                '<tpl for="output">',
                                    '<tpl if="value &gt; 60 || value == 60">',
                                            '<span class="boxed green-item">{value}</span>',
                                    '</tpl>',
                                    '<tpl if="value &lt; 60">',
                                            '<span class="boxed red-item">{value}</span>',
                                    '</tpl>',
                                '</tpl>',
                            '</td>',
                            '<td>',
                                '<div data-state="{[parent[0].state]}" data-new-ws="{ws_id}" class="x-button x-iconalign-left x-button-action x-layout-box-item x-stretched">',
                                    '<span class="x-button-label {[parent[0].state]}">Assign</span>',
                                '</div>',
                            '</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl if="options.length == 0">',
                        '<tr><td colspan="2"><i>No Options Available</i></td></tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    },

    initialize: function(data) {
        var dyanmicController = Poise.app.getController("Poise.controller.DynamicBalancing");
        this.element.on({
            tap: function(e, node) { 
                var el = e.getTarget('div.x-button');
                if (el) {
                    var old_ws_id = el.parentElement.parentElement.parentElement.parentElement.previousSibling.getAttribute('data-old-ws');
                    var new_ws_id = el.getAttribute('data-new-ws');
                    var state = el.getAttribute('data-state');
                    if(state != "yellow") {
                        dyanmicController.createDeviation(node, old_ws_id, new_ws_id);
                    } else {
                        Ext.Msg.alert("Deviation", "The workstation is already part of a deviation.");
                    }
                    // Ext.Msg.alert(old_ws_id, new_ws_id);
                }
            }
        });
    }
});