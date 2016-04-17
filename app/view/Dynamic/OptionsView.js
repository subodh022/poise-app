Ext.define('Poise.view.OptionsView', {
    extend: 'Ext.Container',
    alias: 'widget.options_view',
    xtype: 'options_view',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<tpl exec="values.parent = parent;"></tpl>',
                '<div data-old-ws="{old_ws_id}" class="table-header"><i class="fa fa-life-ring"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th style="width: 10%"><i class="fa fa-sort"></i> Workstation</th>',
                        '<th style="width: 15%">Operation</th>',
                        '<th>Recent Output (Last 8 hours)</th>',
                        '<th>Operator(s)</th>',
                        '<th style="width: 15%">Action</th>',                        
                    '</thead>',
                    '<tpl for="options">',
                        '<tpl exec="values.parent = parent;"></tpl>',
                        '<tr class="x-option-item dynamic-options">',
                            '<td><i class="fa fa-chevron-{[values.direction.toLowerCase()]}"></i>{direction}</td>',
                            '<td>{operation}</td>',
                            '<td class="no-padding">',
                                '<tpl for="output">',
                                    '<tpl if="average &gt; 60 || average == 60">',
                                            '<span class="boxed green-item"><i>Avg: </i> &nbsp; <span style="margin: 0 0 0 0.2em">{average}</span></span>',
                                    '</tpl>',
                                    '<tpl if="average &lt; 60">',
                                            '<span class="boxed red-item"><i>Avg: </i> &nbsp; <span style="margin: 0 0 0 0.2em">{average}</span></span>',
                                    '</tpl>',
                                    '<tpl if="max &gt; 60 || max == 60">',
                                            '<span class="boxed green-item"><i>Max: </i> &nbsp; <span style="margin: 0 0 0 0.2em">{max}</span></span>',
                                    '</tpl>',
                                    '<tpl if="max &lt; 60">',
                                            '<span class="boxed red-item"><i>Max: </i> &nbsp; <span style="margin: 0 0 0 0.2em">{max}</span></span>',
                                    '</tpl>',
                                    '<tpl if="min &gt; 60 || min == 60">',
                                            '<span class="boxed green-item"><i>Min: </i> &nbsp; <span style="margin: 0 0 0 0.2em">{min}</span></span>',
                                    '</tpl>',
                                    '<tpl if="min &lt; 60">',
                                            '<span class="boxed red-item"><i>Min: </i> &nbsp; <span style="margin: 0 0 0 0.2em">{min}</span></span>',
                                    '</tpl>',
                                '</tpl>',
                            '</td>',
                            '<td class="no-padding">',
                                '<tpl for="operator">',
                                    '<div>',
                                        '<span class="op-boxed {name_class}"><i class="fa fa-square"></i> {[values.name ? values.name : "<i>Not Assigned</i>"]}</span>',
                                        '<span class="op-boxed {skill_class}"><i class="fa fa-square"></i> {[values.skill ? "Skill - " + values.skill : "<i>Not Assigned</i>"]}</span>',
                                    '</div>',
                                '</tpl>',
                            '</td>',
                            '<td class="no-padding">',
                                '<tpl for="operator">',
                                    '<div style="margin: 0.3em 0.2em;">',
                                        '<div class="duration"><input type="text" value="1" placeholder="HH" /></div>',
                                        '<div data-operator="{id}" data-old-ws="{[parent.old_ws_id]}" data-state="{[parent.state]}" data-new-ws="{parent.ws_id}" class="x-button x-iconalign-left x-button-action x-layout-box-item x-stretched">',
                                            '<span class="x-button-label {[parent.state]}">Assign</span>',
                                        '</div>',
                                    '</div>',
                                '</tpl>',
                            '</td>',
                        '</tr>',
                    '</tpl>',
                    '<tpl if="options.length == 0">',
                        '<tr><td colspan="5"><i>No Options Available</i></td></tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    },

    initialize: function(data) {
        var me = this;
        var dynamicController = Poise.app.getController("Poise.controller.DynamicBalancing");
        this.element.on({
            tap: function(e, node) { 
                var el = e.getTarget('div.x-button');
                if (el) {
                    var hours = el.previousSibling.childNodes[0].value;
                    var old_ws_id = el.getAttribute('data-old-ws');
                    var new_ws_id = el.getAttribute('data-new-ws');
                    var operator_id = el.getAttribute('data-operator');
                    var state = el.getAttribute('data-state');
                    if(operator_id == "") {
                        Ext.Msg.alert("Deviation", "No operator found for this deviation. Please assign someone else.");
                        return false;
                    }
                    if(state != "yellow") {
                        if(hours != "" && me.isInt(hours) && parseInt(hours) <= 8 && parseInt(hours) > 0) {
                            dynamicController.createDeviation(old_ws_id, new_ws_id, operator_id, hours);
                        } else {
                            Ext.Msg.alert("Deviation", "Enter valid no of hours to deviate.");
                            return false;
                        }
                    } else {
                        Ext.Msg.alert("Deviation", "The workstation is already part of a deviation.");
                    }
                }
            }
        });
    },

    isInt: function(n) {
        var er = /^-?[0-9]+$/;
        return er.test(n);
    }
});