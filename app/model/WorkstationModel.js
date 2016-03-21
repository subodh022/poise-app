Ext.define('Poise.model.Workstation', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'operation_bulletin_style', type: 'string' },
            { name: 'section_name', type: 'string' },
            { name: 'operation_name', type: 'string' },
            { name: 'machine_name', type: 'string' },
            { name: 'operator_name', type: 'string' }
        ],
        proxy: {
            type: 'rest',
            url: 'http://ec2-52-36-209-187.us-west-2.compute.amazonaws.com:8080/api/v1/work_stations.json',
            reader: {
                type: 'json',
                idProperty: 'id',
                record: 'work_station'
            }
        }
    }
});