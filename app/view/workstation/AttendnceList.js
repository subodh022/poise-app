Ext.define('Poise.view.AttendanceList', {
    extend: 'Ext.DataView',
    alias: 'widget.attendancelist',
    xtype: 'attendancelist',

    config: {
        store: {
            type: 'workstations'
        },
        width: '100%',
        height: '100%',
        flex: 1,
        useComponents: true,
        title: 'Workstations',
        emptyText: "No Workstation Added for Selected Operation Bulletin",
        grouped: true,
        defaultType: 'attendancelistitem',
        scrollable: true
    }
});
