Ext.define('Poise.controller.WorkstationController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Poise.view.AddDowntime'
    ],

    config: {

        views: [
            "WorkstationList",
            "DowntimeView",
            "ReworkView",
            "OutputView",
            "AddDowntime",
            "AddRework",
            "AddOutput"
        ],

        models: [
            "Workstation"
        ],

        stores: [
            "Workstations"
        ],

        refs: {
            downtimeView: 'downtimeview',
            listView: 'workstationlist',
            // addView: 'studentadd',
            // addButton: 'studentlist button[action=student-add]',
            downtimeBackButton: 'button#downtimeBack',
            reworkBackButton: 'button#reworkBack',
            outputBackButton: 'button#outputBack',
            // saveButton: 'studentadd button[action=student-save]',
            // editView: 'studentedit',
            // editButton: 'studentedit button[action=student-save]',
            // deleteButton: 'studentedit button[action=student-delete]',
            searchButton: 'studentlist button[action=search-workstation]'
        },

        control: {
            // "addButton": {
            //     tap: 'showAddView'
            // },
            "downtimeBackButton": {
                tap: 'goBackToDowntimeView'
            },
            "reworkBackButton": {
                tap: 'goBackToReworkView'
            },
            "outputBackButton": {
                tap: 'goBackToOutputView'
            },
            // "saveButton": {
            //     tap: 'addStudent'
            // },
            // "editButton": {
            //     tap: 'editStudent'
            // },
            "listView": {
                itemtap: 'onItemTapAction'
            },
            // "deleteButton": {
            //     tap: 'deleteStudent'
            // },
            "searchButton": {
                tap: 'searchWorkstation'
            }
        }
    },
 
    // showAddView: function (button, e, eOpts) {
    //     var view = this.getAddView() ? this.getAddView() : Ext.create("MyApp.view.Add", { title: 'Add' });
    //     Ext.Viewport.setActiveItem(view);
    // },

    showListView: function (button, e, eOpts) {
        var view = this.getListView() ? this.getListView() : Ext.create("Poise.view.WorkstationList");
        Ext.Viewport.setActiveItem(view);
    },

    // addStudent: function (button, e, eOpts) {
    //     var addView = this.getAddView();
    //     var form = addView.down('#studentAddform'),
    //         values = form.getValues(),
    //         store = Ext.getStore('Student');
    //     store.add(values);
    //     store.sync();
    //     form.reset();

    //     this.showListView();
    // },

    // editStudent: function (button, e, eOpts) {
    //     var controller = this;
    //     var editView = this.getEditView();
 
    //     var form = editView.down('#studentEditForm'),
    //         values = form.getValues(),
    //         store = Ext.getStore('Student'),
    //         record = store.getById(values.StudentId);

    //     record.set({
    //         StudentId: values.StudentId,
    //         Name: values.Name,
    //         Email: values.Email,
    //         Age: values.Age,
    //         Country: values.Country,
    //         Address: values.Address
    //     });

    //     if (record.isValid()) {
    //         record.save({
    //             success: function () {
    //                 store.sync();
    //                 form.reset();
    //                 controller.showListView();
    //             },
    //             error: function () {
    //                 Ext.Msg.alert("Error", "There are errors with the record!");
    //             }
    //         });
    //     }
    //     else {
    //         Ext.Msg.alert("Error", "There are errors with the record!");
    //     }
    // },

    onItemTapAction: function (dataview, index, target, record, e, eOpts) {
        if(target.up('navigationview')._itemId == "downtimeView"){
            this.showAddDowntimeView(target, record.data);
        } else if(target.up('navigationview')._itemId == "reworkView"){
            this.showReworkView(target, record.data);
        } else if(target.up('navigationview')._itemId == "outputView"){
            this.showOutputView(target, record.data);
        }
        
        // Ext.Msg.alert('', 'The operation bulletin selected is: ' + record.get('operation_bulletin_style'));
    },

    // deleteStudent: function (button, e, eOpts) {
    //     var editView = this.getEditView();

    //     var form = editView.down('#studentEditForm'),
    //         values = form.getValues(),
    //         store = Ext.getStore('Student'),
    //         record = store.getById(values.StudentId),
    //         recordIndex = store.findExact('StudentId', record.data.StudentId);
    //     controller = this;

    //     Ext.Msg.confirm(
    //     "Delete Student",
    //     "Are you sure want to delete?",
    //     function (btn) {
    //         if (btn == 'yes') {
    //             store.removeAt(recordIndex);
    //             store.sync();
    //             controller.showListView();
    //         }
    //     }
    //     );
    // },

    searchStudent: function (button, e, eOpts) {
        var listView = this.getListView(),
            searchValue = listView.down('#txtSearchText').getValue(),
            store = listView.getStore();

        listView.setScrollToTopOnRefresh(true);
        store.data.clear();
        store.getProxy()._extraParams.value = searchValue;
        store.loadPage(1, function (records, operation, success) {
            listView.refresh();
            listView.setScrollToTopOnRefresh(true);
        });
    },

    showAddDowntimeView: function (target, record) {
        var view = Ext.create('Poise.view.AddDowntime');
        target.up('#downtimeView').push(view);
    },

    showReworkView: function (target, record) {
        var view = Ext.create('Poise.view.AddRework');
        target.up('#reworkView').push(view);
    },

    showOutputView: function (target, record) {
        var view = Ext.create('Poise.view.AddOutput');
        target.up('#outputView').push(view);
    },

    goBackToDowntimeView: function(button, e, eOpts){
        button.up("#downtimeView").pop();
    },

    goBackToReworkView: function(button, e, eOpts){
        button.up("#reworkView").pop();
    },

    goBackToOutputView: function(button, e, eOpts){
        button.up("#outputView").pop();
    }
});
