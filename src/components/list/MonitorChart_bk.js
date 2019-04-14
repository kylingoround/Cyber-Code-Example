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
        // masaFakeData: []
    }

    // componentWillMount() {
    //     this.setState({monitorData: jie_fake_list.monitor_chart});

        // let chartData = [];
        // masa_fake_list.data.forEach((d,i) => chartData[i] = d.num_anomalies);
        // let tempChartData = masa_fake_list.data.map(d => d.num_anomalies)
        // this.setState({masaFakeData: masa_fake_list})
    // }

    // componentDidMount() {
    //     console.log(this.state.masaFakeData)
    // }

    // getAlertSum = () => {
    //     let monitorDataArr = this.state.monitorData.data;
    //     // console.log(monitorDataArr)
    //     let tempLineData = monitorDataArr
    //         .map(d => 
    //             d.num_alerts_by_type
    //                 .map(d => d.num_alerts)
    //                 .reduce((sum, d) => sum + d)
    //         )
    //     // console.log(tempLineData)
    //     this.setState({lineData: tempLineData})
    // }



    render() {
        
        return(
            <MonitorPizza>
                <h3>MonitorChart</h3>

                {/* <LineChart width={1500} height={300} data={this.state.masaFakeData.data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="score" stroke="#8884d8" />
                    <XAxis dataKey="id"/> */}

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
                        // tickFormatter={date => moment(date).format("MM/DD")}
                        // tickFormatter={date => moment(date).format("MM/DD")}

                        tickLine={false}
                        strokeWidth={2}
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