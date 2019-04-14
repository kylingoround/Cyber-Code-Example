var profile_data ={
    "node_id": "",
    "data":  {
        "status": "success",
        "severity": 3,
        "node_charts": [
            {
                "data": [
                    {
                        "date": "2018-10-01",
                        "score": 91,
                        "cycle": "day"
                    },
                    {
                        "date": "2018-10-01",
                        "score": 10,
                        "cycle": "night"
                    }
                ],
                "min": 10,
                "type": "network_connection",
                "max": 91
            },
            {
                "data": [
                    {
                        "date": "2018-10-01",
                        "score": 20,
                        "cycle": "day"
                    },
                    {
                        "date": "2018-10-01",
                        "score": 20,
                        "cycle": "night"
                    }
                ],
                "min": 20,
                "type": "file_access",
                "max": 20
            },
            {
                "data": [
                    {
                        "date": "2018-10-01",
                        "score": 30,
                        "cycle": "day"
                    },
                    {
                        "date": "2018-10-01",
                        "score": 30,
                        "cycle": "night"
                    }
                ],
                "min": 30,
                "type": "system_access",
                "max": 30
            },
            {
                "data": [
                    {
                        "date": "2018-10-01",
                        "score": 80,
                        "cycle": "day"
                    },
                    {
                        "date": "2018-10-01",
                        "score": 80,
                        "cycle": "night"
                    }
                ],
                "min": 80,
                "type": "login",
                "max": 80
            },
            {
                "data": [
                    {
                        "date": "2018-10-01",
                        "score": 10,
                        "cycle": "day"
                    },
                    {
                        "date": "2018-10-01",
                        "score": 10,
                        "cycle": "night"
                    }
                ],
                "min": 10,
                "type": "email",
                "max": 10
            },
            {
                "data": [
                    {
                        "date": "2018-10-01",
                        "score": 50,
                        "cycle": "day"
                    },
                    {
                        "date": "2018-10-01",
                        "score": 50,
                        "cycle": "night"
                    }
                ],
                "min": 50,
                "type": "red_flag",
                "max": 50
            }
        ],
        "num_alerts": 8,
        "label": "user",
        "vip": "",
        "score": 93,
        "anomalies": [
            {
                "num_alerts": 2,
                "alerts": [
                    {
                        "score": 10,
                        "feature": "count",
                        "description": "desc"
                    },
                    {
                        "score": 5,
                        "feature": "unique_protocols",
                        "description": "desc"
                    }
                ],
                "score": 91,
                "date": "2018-10-01",
                "type": "network_connection",
                "cycle": "day"
            },
            {
                "num_alerts": 1,
                "alerts": [
                    {
                        "score": 20,
                        "feature": "login_graph",
                        "description": "desc"
                    }
                ],
                "score": 80,
                "date": "2018-10-01",
                "type": "login",
                "cycle": "day"
            },
            {
                "num_alerts": 4,
                "alerts": [
                    {
                        "score": 50,
                        "feature": "database",
                        "description": "desc"
                    },
                    {
                        "score": 100,
                        "feature": "recon",
                        "description": "desc"
                    },
                    {
                        "score": 30,
                        "feature": "firewall",
                        "description": "desc"
                    },
                    {
                        "score": 20,
                        "feature": "suspicious",
                        "description": "desc"
                    }
                ],
                "score": 50,
                "date": "2018-10-01",
                "type": "red_flag",
                "cycle": "day"
            },
            {
                "num_alerts": 1,
                "alerts": [
                    {
                        "score": 20,
                        "feature": "count",
                        "description": "desc"
                    }
                ],
                "score": 10,
                "date": "2018-10-01",
                "type": "network_connection",
                "cycle": "night"
            }
        ],
        "department": "CDO of BOCNY",
        "id": "ERICLI"
    }
}

export default function (state = profile_data, action) {
    switch (action.type) {
        case 'NODE_PROFILE_ACT':
            let profile_data=action.payload;
            return profile_data;
        default:
            return state
    }
}