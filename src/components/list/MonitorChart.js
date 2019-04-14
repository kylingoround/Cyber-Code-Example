import React, {Component} from 'react'
import styled from 'styled-components'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

import moment from "moment"; 

// import masa_fake_list from '../../data/masa/list_masa_fake'
// import jie_fake_list from '../../data/jie/listView'

const MonitorPizza=styled.div`
    margin-left:2em;
    padding-top:1em;
    bottom: 0px;
`

class MonitorChart extends Component {
    state = {
        monitorData: {},
    }

    render() {
        
        return(
            <MonitorPizza>
                <h3>Alert Monitor</h3>

                <LineChart 
                    width={1500} 
                    height={200} 
                    data={this.props.data.data} 
                    margin={{ top: 5, right: 100, bottom: 5, left: 20 }}
                >
                    <Line 
                        type="monotone" 
                        dataKey="total_num_alerts" 
                        stroke="#8884d8" 
                    />
                    
                    <XAxis
                        dataKey="date_cycle"
                        tickLine={false}
                        strokeWidth={2}
                        padding={{left:30, right:30}}
                        // height={50}
                    />

                    <YAxis
                        width={30}
                        tickLine={false}
                        interval={"preserveStartEnd"}
                        strokeWidth={2}
                    />

                    <Tooltip/>
                </LineChart>
            </MonitorPizza>
        )
    }
}

export default MonitorChart;