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
                                        '<span class="op-boxed {name_class}">{name}</span>',
                                        '<span class="op-boxed {skill_class}">Skill - {skill}</span>',
                                    '</div>',
                                '</tpl>',
                            '</td>',
                            '<tpl if="output &gt; 60 || output == 60">',
                                '<td class="no-padding">',
                                    '<span class="boxed green-item">{output}</span>',
                                    '<span class="boxed green-item">{output}</span>',
                                    '<span class="boxed green-item">{output}</span>',
                                '</td>',
                            '</tpl>',
                            '<tpl if="output &lt; 60">',
                                '<td class="no-padding">',
                                    '<div class="boxed red-item">{output}</div>',
                                    '<div class="boxed red-item">{output}</div>',
                                    '<div class="boxed red-item">{output}</div>',
                                '</td>',
                            '</tpl>',
                            '<td>',
                                '<div data-new-ws="{ws_id}" class="x-button x-iconalign-left x-button-action x-layout-box-item x-stretched">',
                                    '<span style="" class="x-button-label">Assign</span>',
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
                    dyanmicController.createDeviation(node, old_ws_id, new_ws_id)
                    // Ext.Msg.alert(old_ws_id, new_ws_id);
                }
            }
        });
    }
});