import React, {Component} from 'react'
import styled from 'styled-components'
// import HeatmapCellCon from '../redux/containers/HeatmapCellCon'
import HeatmapCellCon from '../../redux/containers/HeatmapCellCon'

import $ from 'jquery';

const HeatmapGroupPizza = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 600px;
  width: 100%;
  margin: auto;
  justify-content: center;
`

const HeatmapPizza = styled.div`
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  margin: 5px;
  padding: 5px
`
class HeatmapGroup extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        id: 'departGroup',
        data: [],
        test_data:
        {
            "status": "success",
            "time_views": [
              {
                "date": "2018-12-09",
                "date_cycle": "2018-12-09 day",
                "departments": [
                  {
                    "num_anomalies": 1,
                    "num_alerts_change": -2,
                    "severity": 3,
                    "num_alerts": 8,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 7
                    },
                    "percent_entities_with_anomalies": 26,
                    "percent_entities_with_alerts": 30,
                    "score_change": 8,
                    "num_anomalies_change": 1,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 98.2260656691451,
                      "email": 5.346868876293593
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.196"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.199"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.190"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.194"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 97,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.189"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 97,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.184"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.197"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.97.199"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.192"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -16,
                        "label": "user",
                        "score": 30,
                        "anomalies": [
                          
                        ],
                        "id": "CXU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 20,
                        "label": "user",
                        "score": 25,
                        "anomalies": [
                          
                        ],
                        "id": "JINJUNPENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "WJFANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "user",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "XJHUANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "YONGMA"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.195"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "user",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "TONGYU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "MINZHU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YJIN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SQWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SHWANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "DYUAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.22"
                      }
                    ],
                    "num_entities_with_alerts": 7,
                    "score": 98,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 8,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 6,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 30
                    },
                    "id": "GM of NYB",
                    "size": 23
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -1,
                    "severity": 2,
                    "num_alerts": 10,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 8
                    },
                    "percent_entities_with_anomalies": 10,
                    "percent_entities_with_alerts": 20,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 72.19877280103739,
                      "email": 2.443776891091799
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 48,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.79"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.110"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 97,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.50"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.169"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 96,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.98"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 13,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.95"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.76"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 79,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.70"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 79,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.49"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 79,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.66"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 26,
                        "label": "user",
                        "score": 60,
                        "anomalies": [
                          
                        ],
                        "id": "TONGWANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 28,
                        "label": "ip",
                        "score": 56,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.71"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 30,
                        "label": "user",
                        "score": 40,
                        "anomalies": [
                          
                        ],
                        "id": "DONGHANWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -11,
                        "label": "ip",
                        "score": 32,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.116"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 28,
                        "anomalies": [
                          
                        ],
                        "id": "HLIM"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "JFU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -19,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "JIANSUN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -28,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "SALAGOZ"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.58"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -29,
                        "label": "user",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "KSHIMADA"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -37,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.51"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -31,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "VZHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "MYQI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -27,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.50"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -36,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "YSHA"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "SSREN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -37,
                        "label": "ip",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.75"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.88"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -9,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -49,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.65"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "user",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "NTONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.74"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "TWLUK"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "JCGE"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -31,
                        "label": "user",
                        "score": 1,
                        "anomalies": [
                          
                        ],
                        "id": "WYZHAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YOUWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "CNWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.52"
                      }
                    ],
                    "num_entities_with_alerts": 8,
                    "score": 89,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 10,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 4,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 20
                    },
                    "id": "BDD of LAB",
                    "size": 39
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 2,
                    "severity": 2,
                    "num_alerts": 16,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 2,
                      "network_connection": 11
                    },
                    "percent_entities_with_anomalies": 35,
                    "percent_entities_with_alerts": 38,
                    "score_change": -1,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 70.80457616316214,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 83.38288277265733,
                      "email": 2.290818954289246
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 1,
                        "score_change": 9,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.98"
                      },
                      {
                        "num_anomalies": 2,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 1,
                        "score_change": 7,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.94"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.81"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.247"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.201"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.107"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.61"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.76"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.83"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.228"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.147"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 85,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.244"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 30,
                        "label": "user",
                        "score": 54,
                        "anomalies": [
                          
                        ],
                        "id": "LSONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 10,
                        "label": "user",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "HSLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "ip",
                        "score": 24,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.196"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "SROUYANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 10,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "ZLONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 19,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "KTANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 8,
                        "anomalies": [
                          
                        ],
                        "id": "BIAOLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 11,
                        "label": "user",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "TCHENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "BCOKRO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.84"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -18,
                        "label": "user",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "YQIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "KHOUCK"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "YJLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "gchen"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YJIANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SKCHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "PVONSUCK"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "ACODEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.71"
                      }
                    ],
                    "num_entities_with_alerts": 12,
                    "score": 89,
                    "num_alerts_by_type": {
                      "file_access": 2,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 14,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 11,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 6,
                      "network_connection": 35
                    },
                    "id": "ADD of ADC",
                    "size": 31
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 0,
                    "severity": 2,
                    "num_alerts": 0,
                    "num_entities_with_alerts_by_type": {
                      
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 0,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 0.0,
                      "red_flag": 0.0,
                      "system_access": 0.0,
                      "login": 0.0,
                      "network_connection": 90.0,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.59"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.55"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.54"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.52"
                      }
                    ],
                    "num_entities_with_alerts": 0,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 0,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      
                    },
                    "id": "Video Conference",
                    "size": 6
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -9,
                    "severity": 2,
                    "num_alerts": 32,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 25
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 17,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 90.0,
                      "email": 2.4935201819712765
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.40"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.31"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.203"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.33"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.116"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 82,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.34"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.23"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 76,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.225"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.20"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.77"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 76,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "ip",
                        "score": 70,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.229"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -40,
                        "label": "ip",
                        "score": 40,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.206"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.233"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 82,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.54"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.18"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "ip",
                        "score": 82,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.39"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.59"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.48"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 1,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 22,
                        "label": "ip",
                        "score": 57,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.44"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 76,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.46"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "ip",
                        "score": 77,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.49"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 41,
                        "label": "user",
                        "score": 46,
                        "anomalies": [
                          
                        ],
                        "id": "PCONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 27,
                        "label": "user",
                        "score": 41,
                        "anomalies": [
                          
                        ],
                        "id": "HLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 29,
                        "label": "user",
                        "score": 35,
                        "anomalies": [
                          
                        ],
                        "id": "WGZHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 26,
                        "label": "user",
                        "score": 35,
                        "anomalies": [
                          
                        ],
                        "id": "SKLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 21,
                        "label": "user",
                        "score": 31,
                        "anomalies": [
                          
                        ],
                        "id": "JINGWANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 22,
                        "label": "user",
                        "score": 29,
                        "anomalies": [
                          
                        ],
                        "id": "YXZHENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -8,
                        "label": "user",
                        "score": 3,
                        "anomalies": [
                          
                        ],
                        "id": "YYZENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "user",
                        "score": 26,
                        "anomalies": [
                          
                        ],
                        "id": "YINGCHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 12,
                        "label": "user",
                        "score": 26,
                        "anomalies": [
                          
                        ],
                        "id": "KFCHAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -8,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JYSH"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "user",
                        "score": 22,
                        "anomalies": [
                          
                        ],
                        "id": "CJLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "user",
                        "score": 22,
                        "anomalies": [
                          
                        ],
                        "id": "GDETHOMASIS"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 7,
                        "label": "user",
                        "score": 22,
                        "anomalies": [
                          
                        ],
                        "id": "HAOGUO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 19,
                        "label": "user",
                        "score": 21,
                        "anomalies": [
                          
                        ],
                        "id": "ZHICHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.40"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -14,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "KYEUNG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 12,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "ACHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.42"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.38"
                      }
                    ],
                    "num_entities_with_alerts": 25,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 32,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 17
                    },
                    "id": "TSD of NYB",
                    "size": 146
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -7,
                    "severity": 2,
                    "num_alerts": 24,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 18
                    },
                    "percent_entities_with_anomalies": 1,
                    "percent_entities_with_alerts": 32,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 46.5488609083344,
                      "email": 2.1983141228835668
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.11"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.15"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.49"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -23,
                        "label": "ip",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.201"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 81,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.35"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.23"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.20"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.26"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.21"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.28"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.42"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 80,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.41"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 7,
                        "label": "user",
                        "score": 8,
                        "anomalies": [
                          
                        ],
                        "id": "YBIAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "PYLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 42,
                        "anomalies": [
                          
                        ],
                        "id": "YBAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "ip",
                        "score": 28,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.200"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -26,
                        "label": "user",
                        "score": 28,
                        "anomalies": [
                          
                        ],
                        "id": "JFLU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 16,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "MLEESHUE"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "ZDU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "ZDLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -10,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "XIAOYIZHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -24,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "BWONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -20,
                        "label": "user",
                        "score": 1,
                        "anomalies": [
                          
                        ],
                        "id": "XINQIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.225"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.226"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -11,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "SEJOHNSON"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.43"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 9,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "NWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "JFUSCO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 8,
                        "anomalies": [
                          
                        ],
                        "id": "HMBAI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "user",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "QMENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.201"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "TRD_SVC_SCAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -17,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "YDXU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "JSYUAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YINGLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YASUN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "XHTAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "TRD"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SJXU"
                      }
                    ],
                    "num_entities_with_alerts": 18,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 24,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 1,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 32
                    },
                    "id": "TRD of NYB",
                    "size": 56
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -2,
                    "severity": 2,
                    "num_alerts": 5,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 4
                    },
                    "percent_entities_with_anomalies": 16,
                    "percent_entities_with_alerts": 16,
                    "score_change": 1,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 76.92160875744014,
                      "email": 2.198314122883568
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.162"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 1,
                        "score_change": 1,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.100"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.117"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.118"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.243"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.218"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 11,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.158"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -50,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "HYLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 31,
                        "anomalies": [
                          
                        ],
                        "id": "MONTELI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "SLIN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "SENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 14,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "YSUN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -14,
                        "label": "user",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "DHLU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.197"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "HHUANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "PTAM"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "WMXI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "ALU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "hykung"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "ZTIAN1"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "ZHYOU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "WKFAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "RTSUI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JWXIANG"
                      }
                    ],
                    "num_entities_with_alerts": 4,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 5,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 4,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 16
                    },
                    "id": "SPD of ADC",
                    "size": 24
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -4,
                    "severity": 2,
                    "num_alerts": 6,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 3,
                      "red_flag": 2
                    },
                    "percent_entities_with_anomalies": 17,
                    "percent_entities_with_alerts": 23,
                    "score_change": -1,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 0.0,
                      "red_flag": 52.528322093595044,
                      "system_access": 53.47411523344731,
                      "login": 89.0,
                      "network_connection": 85.04640083252363,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -2,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.19"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 95,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.8.24"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 96,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.48"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.46"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.35"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 53,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.11.19"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 49,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.178"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.144"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.167"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -56,
                        "label": "ip",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.164"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -46,
                        "label": "ip",
                        "score": 22,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.146"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -71,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.174"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 32,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.166"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.131"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 30,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.196"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.182"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.11.20"
                      }
                    ],
                    "num_entities_with_alerts": 4,
                    "score": 89,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 2,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 4,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 3,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 17,
                      "red_flag": 11
                    },
                    "id": "SERVER",
                    "size": 17
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -8,
                    "severity": 2,
                    "num_alerts": 25,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 21
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 21,
                    "score_change": -9,
                    "num_anomalies_change": -1,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0.0,
                      "system_access": 0.0,
                      "login": 89.0,
                      "network_connection": 90.0,
                      "email": 3.4927945799560756
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.41"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.223"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.200"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 15,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.45"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.66"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.62"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.40"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.54"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.31"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.26"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.28"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 82,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.45"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": -1,
                        "score_change": -13,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.39"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.21"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.46"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 82,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 52,
                        "label": "user",
                        "score": 65,
                        "anomalies": [
                          
                        ],
                        "id": "MDQIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -14,
                        "label": "ip",
                        "score": 9,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "QZHAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 22,
                        "label": "user",
                        "score": 27,
                        "anomalies": [
                          
                        ],
                        "id": "DZOU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 38,
                        "anomalies": [
                          
                        ],
                        "id": "TCYEH"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "OFINDAKLY"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 31,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.226"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "GMOY"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "user",
                        "score": 1,
                        "anomalies": [
                          
                        ],
                        "id": "YSPAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 12,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "YHNG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "HWHUANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "user",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "CACHEUNG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 5,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "JPAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "user",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "CHU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "KBIN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 5,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "XTHU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.41"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "SHJIAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.39"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "JIAYYU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.225"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.23"
                      }
                    ],
                    "num_entities_with_alerts": 21,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 25,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 21
                    },
                    "id": "RMD of NYB",
                    "size": 96
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -1,
                    "severity": 2,
                    "num_alerts": 1,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 1
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 12,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 87.49999999997334,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 90.0,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.8.116"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.8.105"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.64"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.62"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -10,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "HCCHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "QNB"
                      }
                    ],
                    "num_entities_with_alerts": 1,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 1,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 12
                    },
                    "id": "QNB",
                    "size": 8
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": -1,
                    "severity": 2,
                    "num_alerts": 3,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 3
                    },
                    "percent_entities_with_anomalies": 9,
                    "percent_entities_with_alerts": 27,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 46.4316640069604,
                      "email": 1.839059083018708
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.125"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.175"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 1,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -19,
                        "label": "ip",
                        "score": 43,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.161"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.199"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "SENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 10,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "FZHAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "LZOU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.137"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "LEICHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JPENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "XJWANG"
                      }
                    ],
                    "num_entities_with_alerts": 3,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 3,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 1,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 27
                    },
                    "id": "QAD of ADC",
                    "size": 11
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 0,
                    "severity": 2,
                    "num_alerts": 0,
                    "num_entities_with_alerts_by_type": {
                      
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 0,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 0.0,
                      "red_flag": 0.0,
                      "system_access": 0.0,
                      "login": 41.586436281436235,
                      "network_connection": 90.0,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.18"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 90,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.63"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -90,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.44"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -90,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.179"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -90,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.143"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -90,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.104"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.122"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.112"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -90,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.146"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.124"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.207"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 33,
                        "label": "ip",
                        "score": 41,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.14"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -27,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.11"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 9,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.16"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.15"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.31"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.21"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -27,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.13"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.19"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -21,
                        "label": "ip",
                        "score": 9,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.28"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 8,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.20"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.23"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.95"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.89"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.87"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.68"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.47"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.205"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.203"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.186"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.176"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.175"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.131"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.12"
                      }
                    ],
                    "num_entities_with_alerts": 0,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 0,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      
                    },
                    "id": "Printer",
                    "size": 39
                  }
                ],
                "cycle": "day"
              },
              {
                "date": "2018-12-09",
                "date_cycle": "2018-12-09 night",
                "departments": [
                  {
                    "num_anomalies": 1,
                    "num_alerts_change": 14,
                    "severity": 3,
                    "num_alerts": 26,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 9
                    },
                    "percent_entities_with_anomalies": 26,
                    "percent_entities_with_alerts": 39,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 97.71672067324876,
                      "email": 5.346868876293593
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 2,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 96,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.196"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 4,
                        "severity": 3,
                        "num_alerts": 6,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.199"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 2,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 96,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.190"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.194"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 3,
                        "severity": 3,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 95,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.189"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": -1,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "ip",
                        "score": 93,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.184"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.197"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "ip",
                        "score": 65,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.97.199"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.192"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -11,
                        "label": "user",
                        "score": 67,
                        "anomalies": [
                          
                        ],
                        "id": "CXU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 21,
                        "label": "user",
                        "score": 35,
                        "anomalies": [
                          
                        ],
                        "id": "JINJUNPENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "WJFANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "XJHUANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "YONGMA"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.195"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -18,
                        "label": "user",
                        "score": 6,
                        "anomalies": [
                          
                        ],
                        "id": "TONGYU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -8,
                        "label": "user",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "MINZHU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YJIN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SQWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SHWANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "DYUAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.99.22"
                      }
                    ],
                    "num_entities_with_alerts": 9,
                    "score": 97,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 26,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 6,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 39
                    },
                    "id": "GM of NYB",
                    "size": 23
                  },
                  {
                    "num_anomalies": 1,
                    "num_alerts_change": 42,
                    "severity": 3,
                    "num_alerts": 52,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 10
                    },
                    "percent_entities_with_anomalies": 12,
                    "percent_entities_with_alerts": 25,
                    "score_change": 5,
                    "num_anomalies_change": 1,
                    "scores_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 94.14286168396427,
                      "email": 2.443776891091799
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 9,
                        "severity": 3,
                        "num_alerts": 11,
                        "num_anomalies_change": 1,
                        "score_change": 28,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.79"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 97,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.110"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 7,
                        "severity": 3,
                        "num_alerts": 8,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.50"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 10,
                        "severity": 3,
                        "num_alerts": 11,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.169"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.98"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -14,
                        "label": "ip",
                        "score": 76,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.95"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.76"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 8,
                        "severity": 2,
                        "num_alerts": 9,
                        "num_anomalies_change": 0,
                        "score_change": 9,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.70"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.49"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 5,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.66"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 9,
                        "label": "user",
                        "score": 36,
                        "anomalies": [
                          
                        ],
                        "id": "TONGWANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -31,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.71"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "DONGHANWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -16,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.116"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 14,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "HLIM"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 23,
                        "label": "user",
                        "score": 25,
                        "anomalies": [
                          
                        ],
                        "id": "JFU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "JIANSUN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 7,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "SALAGOZ"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.58"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "KSHIMADA"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.51"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "VZHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "MYQI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 7,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.50"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -8,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "YSHA"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "SSREN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.75"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.88"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.65"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "NTONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.74"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "user",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "TWLUK"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "JCGE"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -37,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "WYZHAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YOUWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "CNWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.9.52"
                      }
                    ],
                    "num_entities_with_alerts": 10,
                    "score": 94,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 52,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 5,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 25
                    },
                    "id": "BDD of LAB",
                    "size": 39
                  },
                  {
                    "num_anomalies": 1,
                    "num_alerts_change": 6,
                    "severity": 3,
                    "num_alerts": 28,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 4,
                      "network_connection": 11
                    },
                    "percent_entities_with_anomalies": 19,
                    "percent_entities_with_alerts": 35,
                    "score_change": 1,
                    "num_anomalies_change": 1,
                    "scores_by_type": {
                      "file_access": 91.20726350773978,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 77.63219631166791,
                      "email": 2.290818954289246
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": -1,
                        "score_change": -2,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.98"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.94"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 3,
                        "severity": 3,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.81"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": -1,
                        "score_change": -4,
                        "label": "ip",
                        "score": 86,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.247"
                      },
                      {
                        "num_anomalies": 2,
                        "num_alerts_change": 2,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": 1,
                        "score_change": 1,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.201"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 4,
                        "severity": 3,
                        "num_alerts": 6,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.107"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.61"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": -1,
                        "score_change": -6,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.76"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": -1,
                        "score_change": -5,
                        "label": "ip",
                        "score": 86,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.83"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": -1,
                        "score_change": -5,
                        "label": "ip",
                        "score": 86,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.228"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": -1,
                        "score_change": -6,
                        "label": "ip",
                        "score": 86,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.147"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -2,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -22,
                        "label": "ip",
                        "score": 50,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.244"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "user",
                        "score": 6,
                        "anomalies": [
                          
                        ],
                        "id": "LSONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 26,
                        "label": "user",
                        "score": 32,
                        "anomalies": [
                          
                        ],
                        "id": "HSLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 25,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.196"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "SROUYANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "ZLONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -8,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "KTANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "BIAOLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "TCHENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "BCOKRO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.84"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -14,
                        "label": "user",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "YQIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "KHOUCK"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 3,
                        "anomalies": [
                          
                        ],
                        "id": "YJLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "gchen"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YJIANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SKCHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "PVONSUCK"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "ACODEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.71"
                      }
                    ],
                    "num_entities_with_alerts": 11,
                    "score": 91,
                    "num_alerts_by_type": {
                      "file_access": 5,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 23,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 6,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 12,
                      "network_connection": 35
                    },
                    "id": "ADD of ADC",
                    "size": 31
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 1,
                    "severity": 2,
                    "num_alerts": 1,
                    "num_entities_with_alerts_by_type": {
                      "network_connection": 1
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 16,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 0.0,
                      "red_flag": 0.0,
                      "system_access": 0.0,
                      "login": 0.0,
                      "network_connection": 90.0,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -18,
                        "label": "ip",
                        "score": 71,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.59"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.55"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.54"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.111.52"
                      }
                    ],
                    "num_entities_with_alerts": 1,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 1,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "network_connection": 16
                    },
                    "id": "Video Conference",
                    "size": 6
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 71,
                    "severity": 2,
                    "num_alerts": 100,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 3,
                      "network_connection": 29
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 20,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 85.6485773160996,
                      "email": 2.4935201819712765
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 4,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.40"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.31"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.203"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.33"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 6,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 79,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.116"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 8,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.34"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 6,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.23"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.225"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.20"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 5,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.77"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 12,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 6,
                        "severity": 2,
                        "num_alerts": 6,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.229"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 15,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.206"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -9,
                        "label": "ip",
                        "score": 78,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 6,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 10,
                        "label": "ip",
                        "score": 87,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.233"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.54"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 80,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.18"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.39"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.59"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 80,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 75,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.48"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 8,
                        "severity": 2,
                        "num_alerts": 10,
                        "num_anomalies_change": 0,
                        "score_change": 22,
                        "label": "ip",
                        "score": 78,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.44"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 78,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.46"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -9,
                        "label": "ip",
                        "score": 67,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.49"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -23,
                        "label": "user",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "PCONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "user",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "HLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 9,
                        "anomalies": [
                          
                        ],
                        "id": "WGZHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 9,
                        "label": "user",
                        "score": 21,
                        "anomalies": [
                          
                        ],
                        "id": "SKLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JINGWANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -9,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YXZHENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 25,
                        "label": "user",
                        "score": 28,
                        "anomalies": [
                          
                        ],
                        "id": "YYZENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -15,
                        "label": "user",
                        "score": 26,
                        "anomalies": [
                          
                        ],
                        "id": "YINGCHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "KFCHAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "user",
                        "score": 25,
                        "anomalies": [
                          
                        ],
                        "id": "JYSH"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "user",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "CJLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 15,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "GDETHOMASIS"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 7,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "HAOGUO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 14,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "ZHICHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.107.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.40"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "KYEUNG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "user",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "ACHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.42"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.101.38"
                      }
                    ],
                    "num_entities_with_alerts": 30,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 3,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 97,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 2,
                      "network_connection": 19
                    },
                    "id": "TSD of NYB",
                    "size": 146
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 34,
                    "severity": 2,
                    "num_alerts": 55,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 1,
                      "network_connection": 20
                    },
                    "percent_entities_with_anomalies": 1,
                    "percent_entities_with_alerts": 35,
                    "score_change": -1,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 84.0940497139276,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 56.04023245264209,
                      "email": 2.1983141228835668
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "ip",
                        "score": 93,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.11"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.15"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -3,
                        "label": "ip",
                        "score": 70,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -22,
                        "label": "ip",
                        "score": 67,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.49"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.201"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 4,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.35"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 6,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.23"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 5,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.20"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.26"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 8,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.21"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "ip",
                        "score": 77,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.28"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.42"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -8,
                        "label": "ip",
                        "score": 77,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.41"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 43,
                        "label": "user",
                        "score": 44,
                        "anomalies": [
                          
                        ],
                        "id": "YBIAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 13,
                        "label": "user",
                        "score": 44,
                        "anomalies": [
                          
                        ],
                        "id": "PYLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "YBAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.200"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "user",
                        "score": 22,
                        "anomalies": [
                          
                        ],
                        "id": "JFLU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "MLEESHUE"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "ZDU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "ZDLIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -11,
                        "label": "user",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "XIAOYIZHANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -33,
                        "label": "user",
                        "score": 9,
                        "anomalies": [
                          
                        ],
                        "id": "BWONG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -15,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "XINQIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -63,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.225"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.226"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "SEJOHNSON"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.43"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 5,
                        "label": "user",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "NWU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -4,
                        "label": "user",
                        "score": 8,
                        "anomalies": [
                          
                        ],
                        "id": "JFUSCO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 9,
                        "label": "user",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "HMBAI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "QMENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -16,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.97.201"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "TRD_SVC_SCAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.98.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "user",
                        "score": 6,
                        "anomalies": [
                          
                        ],
                        "id": "YDXU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JSYUAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YINGLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "YASUN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "XHTAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "TRD"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "SJXU"
                      }
                    ],
                    "num_entities_with_alerts": 20,
                    "score": 89,
                    "num_alerts_by_type": {
                      "file_access": 1,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 54,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 1,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 1,
                      "network_connection": 35
                    },
                    "id": "TRD of NYB",
                    "size": 56
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 5,
                    "severity": 2,
                    "num_alerts": 13,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 1,
                      "network_connection": 6
                    },
                    "percent_entities_with_anomalies": 12,
                    "percent_entities_with_alerts": 25,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 84.03643735704264,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 75.05026743257987,
                      "email": 2.198314122883568
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": -1,
                        "score_change": 0,
                        "label": "ip",
                        "score": 92,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.162"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": -1,
                        "score_change": -6,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.100"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 2,
                        "severity": 3,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.117"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 0,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 91,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.118"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.243"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -15,
                        "label": "ip",
                        "score": 74,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.218"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 77,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.158"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 32,
                        "label": "user",
                        "score": 60,
                        "anomalies": [
                          
                        ],
                        "id": "HYLI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 1,
                        "anomalies": [
                          
                        ],
                        "id": "MONTELI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 16,
                        "label": "user",
                        "score": 28,
                        "anomalies": [
                          
                        ],
                        "id": "SLIN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 22,
                        "label": "user",
                        "score": 27,
                        "anomalies": [
                          
                        ],
                        "id": "SENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -7,
                        "label": "user",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "YSUN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "DHLU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 8,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.197"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "HHUANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "PTAM"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "WMXI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 2,
                        "anomalies": [
                          
                        ],
                        "id": "ALU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "hykung"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "ZTIAN1"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "ZHYOU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "WKFAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "RTSUI"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JWXIANG"
                      }
                    ],
                    "num_entities_with_alerts": 6,
                    "score": 89,
                    "num_alerts_by_type": {
                      "file_access": 1,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 12,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 3,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 4,
                      "network_connection": 25
                    },
                    "id": "SPD of ADC",
                    "size": 24
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 22,
                    "severity": 2,
                    "num_alerts": 30,
                    "num_entities_with_alerts_by_type": {
                      "login": 1,
                      "network_connection": 8,
                      "red_flag": 2
                    },
                    "percent_entities_with_anomalies": 11,
                    "percent_entities_with_alerts": 52,
                    "score_change": -3,
                    "num_anomalies_change": -1,
                    "scores_by_type": {
                      "file_access": 90.0,
                      "red_flag": 52.528322093595044,
                      "system_access": 79.94111748165358,
                      "login": 89.0,
                      "network_connection": 76.59487167608806,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 4,
                        "severity": 3,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 99,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.19"
                      },
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 1,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 97,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.8.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -6,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.48"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.46"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": -1,
                        "score_change": -13,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.9.35"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 36,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.11.19"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.178"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.144"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "ip",
                        "score": 64,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.167"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 5,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "ip",
                        "score": 69,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.164"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 5,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": 46,
                        "label": "ip",
                        "score": 69,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.146"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 4,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": -16,
                        "label": "ip",
                        "score": 67,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.174"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -37,
                        "label": "ip",
                        "score": 52,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.166"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 28,
                        "label": "ip",
                        "score": 37,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.131"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -25,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.196"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 4,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.1.182"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -14,
                        "label": "ip",
                        "score": 1,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.11.20"
                      }
                    ],
                    "num_entities_with_alerts": 9,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 0,
                      "red_flag": 2,
                      "system_access": 0,
                      "login": 1,
                      "network_connection": 27,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 2,
                    "percent_entities_with_alerts_by_type": {
                      "login": 5,
                      "network_connection": 47,
                      "red_flag": 11
                    },
                    "id": "SERVER",
                    "size": 17
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 62,
                    "severity": 2,
                    "num_alerts": 88,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 1,
                      "network_connection": 25
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 26,
                    "score_change": -1,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 85.47683333333333,
                      "red_flag": 0.0,
                      "system_access": 0.0,
                      "login": 89.0,
                      "network_connection": 85.4582426504125,
                      "email": 3.4927945799560756
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": -11,
                        "label": "ip",
                        "score": 78,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.41"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.223"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.200"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "ip",
                        "score": 70,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.45"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "ip",
                        "score": 77,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 5,
                        "severity": 2,
                        "num_alerts": 6,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 8,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.66"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.62"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.40"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 3,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.54"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 4,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.36"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 8,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.31"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.24"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.26"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "ip",
                        "score": 83,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.28"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.45"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 4,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": -5,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.39"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.21"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 4,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.46"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "ip",
                        "score": 84,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -30,
                        "label": "user",
                        "score": 10,
                        "anomalies": [
                          
                        ],
                        "id": "MDQIU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 1,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 27,
                        "label": "ip",
                        "score": 56,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.53"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 38,
                        "label": "user",
                        "score": 54,
                        "anomalies": [
                          
                        ],
                        "id": "QZHAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 36,
                        "label": "ip",
                        "score": 52,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 18,
                        "label": "user",
                        "score": 43,
                        "anomalies": [
                          
                        ],
                        "id": "DZOU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "TCYEH"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 1,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 32,
                        "label": "user",
                        "score": 35,
                        "anomalies": [
                          
                        ],
                        "id": "OFINDAKLY"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 24,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.226"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -2,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "GMOY"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 15,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "YSPAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 23,
                        "anomalies": [
                          
                        ],
                        "id": "YHNG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 7,
                        "label": "user",
                        "score": 22,
                        "anomalies": [
                          
                        ],
                        "id": "HWHUANG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -15,
                        "label": "user",
                        "score": 21,
                        "anomalies": [
                          
                        ],
                        "id": "CACHEUNG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "user",
                        "score": 18,
                        "anomalies": [
                          
                        ],
                        "id": "JPAN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 11,
                        "label": "user",
                        "score": 20,
                        "anomalies": [
                          
                        ],
                        "id": "CHU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 6,
                        "label": "user",
                        "score": 19,
                        "anomalies": [
                          
                        ],
                        "id": "KBIN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.37"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 1,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "XTHU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.41"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 2,
                        "label": "ip",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.61"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 16,
                        "anomalies": [
                          
                        ],
                        "id": "SHJIAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.39"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 14,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 12,
                        "label": "user",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "JIAYYU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.225"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.103.23"
                      }
                    ],
                    "num_entities_with_alerts": 25,
                    "score": 89,
                    "num_alerts_by_type": {
                      "file_access": 2,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 86,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 1,
                      "network_connection": 26
                    },
                    "id": "RMD of NYB",
                    "size": 96
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 9,
                    "severity": 2,
                    "num_alerts": 10,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 1,
                      "network_connection": 4
                    },
                    "percent_entities_with_anomalies": 0,
                    "percent_entities_with_alerts": 62,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 80.06417216882072,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 89.0,
                      "network_connection": 90.0,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -12,
                        "label": "ip",
                        "score": 77,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.8.116"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -13,
                        "label": "ip",
                        "score": 76,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.8.105"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.64"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "ip",
                        "score": 76,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 3,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": -9,
                        "label": "ip",
                        "score": 80,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.62"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 8,
                        "label": "user",
                        "score": 17,
                        "anomalies": [
                          
                        ],
                        "id": "HCCHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 3,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.8.32"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "QNB"
                      }
                    ],
                    "num_entities_with_alerts": 5,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 1,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 9,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 0,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 12,
                      "network_connection": 50
                    },
                    "id": "QNB",
                    "size": 8
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 8,
                    "severity": 2,
                    "num_alerts": 11,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 2,
                      "login": 1,
                      "network_connection": 4
                    },
                    "percent_entities_with_anomalies": 9,
                    "percent_entities_with_alerts": 36,
                    "score_change": -4,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 85.47683333333333,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 85.22278649403992,
                      "network_connection": 60.255869747263866,
                      "email": 1.6577450931151736
                    },
                    "entities": [
                      {
                        "num_anomalies": 2,
                        "num_alerts_change": 4,
                        "severity": 3,
                        "num_alerts": 5,
                        "num_anomalies_change": 1,
                        "score_change": 2,
                        "label": "ip",
                        "score": 94,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.125"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 2,
                        "severity": 2,
                        "num_alerts": 2,
                        "num_anomalies_change": 0,
                        "score_change": -1,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.175"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 2,
                        "num_alerts": 3,
                        "num_anomalies_change": 0,
                        "score_change": 25,
                        "label": "ip",
                        "score": 89,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.161"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 1,
                        "severity": 1,
                        "num_alerts": 1,
                        "num_anomalies_change": 0,
                        "score_change": 51,
                        "label": "ip",
                        "score": 51,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.99.199"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 22,
                        "label": "user",
                        "score": 27,
                        "anomalies": [
                          
                        ],
                        "id": "SENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 4,
                        "label": "user",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "FZHAO"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 3,
                        "anomalies": [
                          
                        ],
                        "id": "LZOU"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "22.232.213.137"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "LEICHEN"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "JPENG"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "user",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "XJWANG"
                      }
                    ],
                    "num_entities_with_alerts": 4,
                    "score": 85,
                    "num_alerts_by_type": {
                      "file_access": 3,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 1,
                      "network_connection": 7,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 1,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 18,
                      "login": 9,
                      "network_connection": 36
                    },
                    "id": "QAD of ADC",
                    "size": 11
                  },
                  {
                    "num_anomalies": 0,
                    "num_alerts_change": 47,
                    "severity": 2,
                    "num_alerts": 48,
                    "num_entities_with_alerts_by_type": {
                      "file_access": 2,
                      "network_connection": 7
                    },
                    "percent_entities_with_anomalies": 2,
                    "percent_entities_with_alerts": 20,
                    "score_change": 0,
                    "num_anomalies_change": 0,
                    "scores_by_type": {
                      "file_access": 58.67974409954437,
                      "red_flag": 0.0,
                      "system_access": 0.0,
                      "login": 89.0,
                      "network_connection": 90.0,
                      "email": 0
                    },
                    "entities": [
                      {
                        "num_anomalies": 1,
                        "num_alerts_change": 2,
                        "severity": 3,
                        "num_alerts": 2,
                        "num_anomalies_change": 1,
                        "score_change": 86,
                        "label": "ip",
                        "score": 98,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.18"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 71,
                        "label": "ip",
                        "score": 71,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.63"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 90,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.44"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 90,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.179"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 90,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.143"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 2,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 90,
                        "label": "ip",
                        "score": 90,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.104"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 6,
                        "severity": 2,
                        "num_alerts": 6,
                        "num_anomalies_change": 0,
                        "score_change": 72,
                        "label": "ip",
                        "score": 85,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.22"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": -18,
                        "label": "ip",
                        "score": 71,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.122"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 71,
                        "label": "ip",
                        "score": 71,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.112"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": 69,
                        "label": "ip",
                        "score": 69,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.146"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 7,
                        "severity": 2,
                        "num_alerts": 7,
                        "num_anomalies_change": 0,
                        "score_change": -20,
                        "label": "ip",
                        "score": 69,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.124"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 5,
                        "severity": 2,
                        "num_alerts": 5,
                        "num_anomalies_change": 0,
                        "score_change": 69,
                        "label": "ip",
                        "score": 69,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.207"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.14"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 15,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.11"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.16"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.27"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 13,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.15"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.31"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 12,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.21"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -25,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.29"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.13"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -26,
                        "label": "ip",
                        "score": 11,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.17"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.19"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -23,
                        "label": "ip",
                        "score": 7,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.28"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.30"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -29,
                        "label": "ip",
                        "score": 5,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.20"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.23"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.95"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.89"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.87"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.68"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.47"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.205"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.203"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.186"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.176"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.175"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": 0,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": 0,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.131"
                      },
                      {
                        "num_anomalies": 0,
                        "num_alerts_change": -1,
                        "severity": 0,
                        "num_alerts": 0,
                        "num_anomalies_change": 0,
                        "score_change": -87,
                        "label": "ip",
                        "score": 0,
                        "anomalies": [
                          
                        ],
                        "id": "21.232.110.12"
                      }
                    ],
                    "num_entities_with_alerts": 8,
                    "score": 90,
                    "num_alerts_by_type": {
                      "file_access": 4,
                      "red_flag": 0,
                      "system_access": 0,
                      "login": 0,
                      "network_connection": 44,
                      "email": 0
                    },
                    "num_entities_with_anomalies": 1,
                    "percent_entities_with_alerts_by_type": {
                      "file_access": 5,
                      "network_connection": 17
                    },
                    "id": "Printer",
                    "size": 39
                  }
                ],
                "cycle": "night"
              }
            ],
            "start_date": "2018-12-09",
            "end_date": "2018-12-09"
          },
        depart_count: 0
      }
    }
    // componentWillReceiveProps(nextProps) {
    //   alert("changed");
    //     if(this.props!==nextProps)
    //     {

    //     }
    // }
    componentWillMount() {
      // replace with ajax
      // console.log(this.props.dataMap);
    //   this.setState( {data:fakeDepartData} )
        // console.log("enter did mount")

        //Uncomment to make it locally

            let data=this.state.test_data;
            let date_data={}
            date_data["start"]=data.time_views[0].date;
            date_data["end"]=data.time_views[data.time_views.length-1].date;
            this.props.DateChangeAction(date_data)
            this.props.UpdateAction(this.state.test_data);
            let cycles=data.time_views.length-1;
            this.props.TimeChangeAction(cycles);
            this.props.UpdateCountAction();
            this.props.DeptCntAction(data.time_views[0].departments.length);
            console.log(data.time_views[0].departments.length);
            this.setState({depart_count: data.time_views[0].departments.length});
            
            let dates=[];
            for(var i=0; i<data.time_views.length; i++){
               let item={}
               item["date"]=data.time_views[i]["date"]
               item["cycle"]=data.time_views[i]["cycle"]
               dates.push(item)
            }
            let start_date={
               "date": data.time_views[0]["date"],
               "cycle": data.time_views[0]["cycle"]
            }
            let end_date={
               "date": data.time_views[data.time_views.length-1]["date"],
               "cycle": data.time_views[data.time_views.length-1]["cycle"]
            }
            let final={}
            final["start"]=start_date
            final["end"]=end_date;
            final["dates"]=dates;
            this.props.StartEndDateAction(final)

            //Uncomment to make it connect to real backend
            // console.log(url_info);
            // let url_info=this.props.GeneralSearchReducer;
            // let start = url_info.start;
            // let end = url_info.end;
            // let depart = url_info.depart.join(';');
            // let entity = url_info.entity.join(';');
            // let url = "/aggview?start_date="+start+"&end_date="+end+"&dept="+depart+"&entity="+entity;

            // alert(url)
            // $.ajax({
            //     url: url,
            //     type: "GET",
            //     success: function(data){
            //         alert("Success: "+ url);
            //         data=JSON.parse(data);
            //         let date_data={}
            //         date_data["start"]=data.time_views[0].date;
            //         date_data["end"]=data.time_views[data.time_views.length-1].date;
            //         this.props.DateChangeAction(date_data);
            //         this.props.UpdateAction(data);
            //         let cycles=data.time_views.length-1;
            //         this.props.TimeChangeAction(cycles);
            //         this.props.UpdateCountAction();
            //         this.props.DeptCntAction(data.time_views[0].departments.length);
            //         let dates=[];
            //         for(var i=0; i<data.time_views.length; i++){
            //            let item={}
            //            item["date"]=data.time_views[i]["date"]
            //            item["cycle"]=data.time_views[i]["cycle"]
            //            dates.push(item)
            //         }
            //         let start_date={
            //            "date": data.time_views[0]["date"],
            //            "cycle": data.time_views[0]["cycle"]
            //         }
            //         let end_date={
            //            "date": data.time_views[data.time_views.length-1]["date"],
            //            "cycle": data.time_views[data.time_views.length-1]["cycle"]
            //         }
            //         let final={}
            //         final["start"]=start_date
            //         final["end"]=end_date;
            //         final["dates"]=dates;
            //         this.props.StartEndDateAction(final)
            //     }.bind(this),
            //     error: function(xhr, status, err){

            //     alert("Failed!")
            //     }
            // });
    }

    drawDeparts = (input) => {
      // let data = this.state.data;
    //   let data = this.props.dataMap;
      // console.log(this.props.FirstReducer);
      console.log(input);
      let data=[];
      for(var i=0; i<input; i++){
        data.push(i)
      }
      // let data;
    // let data=[0, 1]
    // if(input) {
    //     data=input.map((d, i) => (i))
    // }
    //   console.log(input)
      let tempChildren = [];
      if (data) {
        data.forEach(
          (d, i) => {
            tempChildren.push([<HeatmapCellCon id={i}></HeatmapCellCon>])
          }
        )
      } else {
        console.log('pancake')
      }
      // console.log(tempChildren)
      return (
        tempChildren
      )
    }

    render() {
      return (
        <HeatmapGroupPizza className={this.state.class} style={{background: this.props.TestReducer}}>
          {this.drawDeparts(this.props.DeptCntReducer)}
        </HeatmapGroupPizza>)
    }
  }

export default HeatmapGroup
