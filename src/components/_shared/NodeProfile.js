import React, {Component} from 'react'

import styled from 'styled-components'
import {Grid, Cell} from 'styled-css-grid'

import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip} from 'recharts'

// import $ from 'jquery'

// testing data
import jie_fake_node from './../../data/jie/infoView'

// components
import Toggleable from '../_utils/toggleable'
// import NodeProfileImg from './../../images/nodeProfile_static.png'

// TODO:
// add overflow: check
// add toggleable: check
// add chart: check

const SectionTitle=styled.div`
    font-weight: bold;
    font-size: 1.5em;
    padding: 0.5em 0;
`

const NodeImg = styled.img`
    height: 960px;
    z-index: 1;
`

let nodeW = 600;

const NodeProfilePizza = styled.div`
    position:absolute;
    margin:0;
    padding: 0;
    ${'' /* right:-100px; */}
    top: 0;
    width: ${nodeW}px;
    height: 100%;
    background-color: teal;
    right: ${props => props.show ? `0px` : `-${nodeW - 15}px`};
    padding: 3em 1em 1em 1em;
    overflow: auto;
    z-index: 99;
`

const StyledAlertGridA = styled(Grid)` `

const StyledCell = styled(Cell)`
    word-wrap: normal;
    white-space: nowrap;
`

////////////////////////////////////////////////

// const Toggleable_AlertChart = props => 
//     <Toggleable>
//         {(expand, onClick) => (
//             <>
//                 <div onClick={onClick}>
//                     <AlertLogsContainer data={props.data} />
//                 </div>
//                 { expand && 
//                     <FeatureContainer 
//                         data={props.data}
//                     />
//                 }
//             </>
//         )}
//     </Toggleable>

////////////////////////////////////////////////

// parent
const AlertLogPizza = styled.div`
    position: relative
`

const FeaturePizza = styled.div`
    position: relative
    background-color:#013D2F;
    left: -1em;
    width: calc(100% + 2em);

    padding-left: 1em;
`

const AlertLog = props => {
    let log = props.data
    return(
        <AlertLogPizza>
            <StyledAlertGridA
                columns = {10}
                // gap='1em'
                areas={[
                    // "_ghost " +
                    "feature feature feature feature " +
                    "count count " + 
                    "score"
                ]}
            >
                <StyledCell area='feature'>{log.type}</StyledCell>
                <StyledCell area='count'>ALERTS: {log.num_alerts}</StyledCell>
                <StyledCell area='score'>SCORE: {log.score}</StyledCell>
            </StyledAlertGridA>

            {/* <div>type: {log.type}</div>
            <div>num_alerts: {log.num_alerts}</div>
            <div>score: {log.score}</div> */}
            {/* <div>datecycle: {log.date} {log.cycle}</div> */}

        </AlertLogPizza>
    )
}

const Toggleable_AlertLog = props => 
    <Toggleable>
        {(expand, onClick) => (
            <>
                <div onClick={onClick}>
                    <AlertLog data={props.data} />
                </div>
                { expand && 
                    <FeatureContainer 
                        data={props.data.alerts}
                    />
                }
            </>
        )}
    </Toggleable>

const AlertLogsContainer = props => {
    let logs = props.data.map((el, i) => 

        <Toggleable_AlertLog
            key={i}
            data={el}
        />
    )
    return (
        <>{logs}</>
    )
}

////////////////////////////////////////////////

// position: absolute;
// padding: 0 1em 0 1em;

const Feature = props => {
    let feature = props.feature
    return (
        <FeaturePizza>
            <StyledAlertGridA
                columns={10}
                areas={[
                    'feature feature feature feature ' +
                    'score score ' + 
                    'descrption'
                ]}
            >

                <StyledCell area='feature'>Feature: {feature.feature}</StyledCell>
                <StyledCell area='score'>Score: {feature.score}</StyledCell>
                <StyledCell area='descrption'>Description: {feature.description}</StyledCell>

            </StyledAlertGridA>

            {/* <div>Feature: {feature.feature}</div>
            <div>Score: {feature.score}</div>
            <div>Description: {feature.description}</div> */}
        </FeaturePizza>
    )
}

const FeatureContainer = props => {
    let features = props.data.map((el, i) =>
        <Feature
            key={i}
            feature={el}
        />
    )
    return (
        <>{features}</>
    )
}

////////////////////////////////////////////////

const AlertChart = props => {
    let data = props.data
    console.log(data.data)
    return(
        <div>
            <div>{data.type}</div>
            <ResponsiveContainer width="100%" height={150}>
     
                <LineChart
                    data={data.data}
                    // width={300}
                    // height={150}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <Line 
                        type="monotone"
                        dataKey="score"
                        stroke="#8884d8"
                    />
                    <XAxis dataKey="date"/>
                    <YAxis 
                        domain={[0, 100]}
                        padding={{left: 20}}
                        hide='true'
                    />
                    <Tooltip/>
                    <CartesianGrid/>
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}

const AlertChartContainer = props => {
    let charts = props.data.map((el, i) => 
        <AlertChart 
            key={i}
            data={el}
        />
    )
    return (
        <>{charts}</>
    )
}

////////////////////////////////////////////////

const NodeProfileComponent = props => {
    let entity = props.data
    return (
    <>
        <SectionTitle>NODE PROFILE</SectionTitle>

            <div>IP: {entity.id}</div>
            <div>DEPARTMENT: {entity.department}</div>
            <div>SCORE: {entity.score}</div>

        <SectionTitle>ALERT LOG</SectionTitle>

            <AlertLogsContainer data={entity.anomalies} />

        <SectionTitle>SCORE HISTORY</SectionTitle>

            <AlertChartContainer data={entity.node_charts} />
    </>
    )
}

class NodeProfile extends Component {
    
    // state = {
    //     nodeData: {},
    // }

    componentWillMount() {
        this.setState({nodeData: jie_fake_node})
    }

    // callNodeUpdate = entity => {

    //     // transfer start and end

    //     // let start = updateProps.start;
    //     // let end = updateProps.end;
    //     let entityId = entity;

    //     let url = "/infoview?entity="+entityId+"&start_date=" + start + "&end_date=" + end;

    //     alert(url)
        
    //     $.ajax({
    //     url: url,
    //     type: "GET",
    //     success: function(data){
    //         // alert("Success!")   
    //         data = JSON.parse(data)
    //         this.setState({nodeData: data})
    //         // this.setState({listData: ajax_fake_data})
    //     }.bind(this),   
    //     error: function(xhr, status, err){
    //         alert("Failed!")
    //     }
    //     });
    // }

    // componentDidMount() {
    //     let entityId = this.props.selectedEntityId;
    //     let start = this.props.start;
    //     let end = this.props.end;
    //     // this.setState({nodeData: jie_fake_node})

    //     // need to get entity
    //     // alert(this.)

    //     let url = "/infoview?entity="+entityId+"&start_date=" + start + "&end_date=" + end;

    //     alert(url)
    //     // $.ajax({
    //     //     url: url,
    //     //     type:'GET',
    //     //     success: function(data){
    //     //         alert('Node Success!')
    //     //         data = JSON.parse(data)

    //     //         this.setState({nodeData: data})

    //     //     }.bind(this),
    //     //     error: function(xhr, status, err) {
    //     //         alert('Failed!')
    //     //     }
    //     // })
    // }

    render() {
        return(
            <NodeProfilePizza 
                show={this.props.show}
                // show={true}
            >
                <button onClick={this.props.zuchuanFunc}
                >CLOSE</button>
                <NodeProfileComponent 
                    // data={this.state.nodeData}
                    data={this.props.nodeData}
                /> 
            </NodeProfilePizza>
        )
    }
}

export default NodeProfile;