let d = {
    'code': 200,
    'status': 'success' | 'failure',
    'message': '<error.msg>',
    'agg_graph': {
        nodes: [ 
            {id, label}
        ],
        edges: [
            {id, source, target, label}
        ]

    },
    'time_graphs': {
        {
            'date': '20181001',
            'cycle': 'day',
            'graph': {
                nodes: [
                    {
                    'id': ' ',
                    'label': 'user|ip|department|subnet|shared folder',
                    'severity': '0/1/2/3',  // 0 is normal
                    'score': ' ',
                    'num-alerts': ' '
                    }
                ],
                edges: [
                    {
                    'id': 'source_target_label',
                    'source': ' ',
                    'target': ' ',
                    'label': 'own / within / access/ login / email',
                    'weight': ' '
                    }
                ]
            }
        }
    }
}