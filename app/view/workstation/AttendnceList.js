Ext.define('Poise.view.AttendanceList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.attendancelist',
    xtype: 'attendancelist',

    config: {
        store: {
            type: 'workstations'
        },
        width: '100%',
        height: '100%',
        layout: 'fit',
        flex: 1,
        useComponents: true,
        title: 'Workstations',
        emptyText: "No Workstation Added for Selected Operation Bulletin",
        grouped: true,
        defaultType: 'attendancelistitem',
        scrollable: true,
        cls: 'dynamic-list white-bg'
    }
});
