Ext.define('Poise.view.MachineView', {
    extend: 'Ext.Container',

    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="table-header"><i class="fa fa-print"></i> {title}</div>',
                '<table class="table table-bordered table-responsive">',
                    '<thead>',
                        '<th>Mac ID</th>',
                        '<th>Name</th>',
                        '<th>Attachment</th>',
                        '<th>Availability</th>',
                        '<th style="width: 20%">Actions</th>',
                    '</thead>',
                    '<tpl for="machines">',
                        '<tr>',
                            '<td>{mac_id}</td>',
                            '<td>{name}</td>',
                            '<td>{[values.attachment ? values.attachment : "<i>Not Available</i>"]}</td>',
                            '<td>{available_units}</td>',
                            '<td class="no-padding">',
                                '<div style="margin: 0.3em 0.2em;">',
                                    '<div class="duration"><input type="text" value="1" placeholder="HH" /></div>',
                                    '<div data-avl="{available_units}" data-mac-id="{id}" data-state="{parent.state}" data-ws-id="{parent.ws_id}" class="x-button x-iconalign-left x-button-action x-layout-box-item x-stretched">',
                                        '<span class="x-button-label {parent.state}">Allocate</span>',
                                    '</div>',
                                '</div>',
                            '</td>',
                        '</tr>',
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
                    var mac_id = el.getAttribute('data-mac-id');
                    var new_ws_id = el.getAttribute('data-ws-id');
                    var state = el.getAttribute('data-state');
                    var available_units = el.getAttribute('data-avl');
                    
                    if(state != "yellow") {
                        if(parseInt(available_units) <= 0) {
                            Ext.Msg.alert("Deviation", "No new machine available for allocation");
                            return false;
                        }
                        if(hours != "" && me.isInt(hours) && parseInt(hours) <= 8 && parseInt(hours) > 0) {
                            dynamicController.createMacDeviation(new_ws_id, mac_id, hours);
                        } else {
                            Ext.Msg.alert("Deviation", "Enter valid no of hours to deviate");
                            return false;
                        }
                    } else {
                        Ext.Msg.alert("Deviation", "The workstation has already been allocated a new machine");
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