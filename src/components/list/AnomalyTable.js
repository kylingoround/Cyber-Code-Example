import React, {Component} from 'react'

import styled from 'styled-components'
import {Grid, Cell} from 'styled-css-grid'

import TypeColorSwitch from './../_utils/TypeColorSwitch'

// import NodeProfileImg from './../../images/nodeProfile_static.png'
import Toggleable from '../_utils/toggleable'

import NumCircle from './../_shared/NumCircle'

const AnomalyTablePizza = styled.div``

const GridContainer = styled.div`
    margin-left: 1.8em;
    width: 60em;
    overflow: auto;
    max-height: 500px;
`

const StyledGridA = styled(Grid)`

    position: relative;
    z-index:99;

    padding-top: 0.5em;
    padding-bottom: 0.5em;
    &:hover {
        outline: 2px solid white;
        outline-offset: -2px;
        box-shadow: 5px 0 0 1px white inset;
    };

    ${props => props.isClicked && 
    `
        outline: 2px solid white;
        outline-offset: -2px;
        box-shadow: 5px 0 0 1px white inset;
    `
    }
`

const FeatureSpan = styled.span`
    padding-right: 1em;
`

const StyledGridB = styled(Grid)`
    &:hover {
        background-color: #1B1B1B;
    }
    padding: 0.5em 0 0.5em 0;
`

// add bottom shadow
const AnomalyListPizza = styled.div`
    position: relative;
    z-index: 1;
    top: -2px;
    outline: 2px dashed #585757;
    outline-offset: -2px;
    ${'' /* box-shadow: 0 -1px 0 #000; */}
`

const AnomalyCellStyler = {
    // 'score': `font-weight: bold;`,
    // 'feature': `font-weight: bold;`
}

const StyledTypeCell = styled(Cell)`
    word-wrap: normal;
    white-space: nowrap;

    ${ props => (
        [
            TypeColorSwitch(props.type),
            AnomalyCellStyler[props.area]
        ]
    )}
    
`

////////////////////////////////////

const Anomaly = props => 
    <StyledGridB
        columns = {10}
        gap='1em'
        areas={[
            "_ghost " +
            "type type " +
            "score " +
            "time time " +
            "feature feature feature feature"
        ]}
    >

        <StyledTypeCell area='type' left={2} type={props.anomaly.type}>
            {/* {props.anomaly.type + ': ' + props.anomaly.num_alerts} */}
            {props.anomaly.type}
            <NumCircle 
                type={props.anomaly.type}
                svg_offsetY={15}
                scale={0.8} // actually for text scale
            >
                {props.anomaly.num_alerts}
            </NumCircle>
        </StyledTypeCell>
        <StyledTypeCell center area='score' left={4}>{props.anomaly.score}</StyledTypeCell>
        <StyledTypeCell area='time' left={5}>{props.anomaly.date} {props.anomaly.cycle}</StyledTypeCell>
        <StyledTypeCell area='feature' left={7}>{props.anomaly.top_features.map(f => <FeatureSpan>{f}</FeatureSpan>)}</StyledTypeCell>
    </StyledGridB>

const AnomalyListContainer = props =>

    <AnomalyListPizza onClick={()=>{
        props.zuchuanFunc();
        // {console.log(props.entities.id)}
        props.zuchuanNodeFunc(props.entities.id);
    }}>

        {props.anomalies.map(anomaly => 
            <Anomaly anomaly={anomaly} />
        )}

    </AnomalyListPizza>

const EntityInfo = props => 
    <StyledGridA
        columns = {10}
        gap="1em"
        areas={[
            "index " + 
            "id id " +
            "score " +
            "depart depart " +
            "num_alerts num_alerts " +
            "flag " +
            "_ghost"
        ]}

        isClicked={props.isClicked}
        // isClicked='red'
    >
        <Cell center area="index"> {props.id+1}</Cell>
        <Cell area="id" left={2}>{props.entityInfo.id}</Cell>
        <Cell center area="score" left={9}>{parseInt(props.entityInfo.score)}</Cell>
        <Cell area="depart" left={4}>{props.entityInfo.department}</Cell>
        <Cell area="num_alerts" left={7}>{props.entityInfo.num_anomalies} anomalies</Cell>
        <Cell area="flag" left={5}>{
            props => {
                if(props.entityInfo.vip == 'N/A') {
                    return null
                } else {
                    return props.entityInfo.vip
                }
            }
        }</Cell>
    </StyledGridA>

const Toggleable_AnomalyBundle = props =>   // bundle
    <Toggleable>
        {(expand, onClick) => (
            <>
                <div onClick={onClick}>
         
                    <EntityInfo entityInfo={props.entities} key={props.entities.index} isClicked={expand}
                    {...props}
                    />
                </div>
                {expand && <AnomalyListContainer anomalies={props.entities.anomalies} 
                {...props} 

                />}
            </>
        )}
    </Toggleable>

const AnomalyEntity_List = props => // bundleData
    <GridContainer>
        {
            props.entities.map(
                (entities, index) => 
                <Toggleable_AnomalyBundle 
                    entities={entities} 
                    id={index} 
                    zuchuanFunc={props.zuchuanFunc}
                    zuchuanNodeFunc={props.zuchuanNodeFunc}
                />
        )}
    </GridContainer>

// const fake_entities = jie_fake_list.entities;

class AnomalyTable extends Component {

    render() {
        console.log(this.props)
        return(

            <AnomalyTablePizza>
                <AnomalyEntity_List entities={this.props.data} {...this.props} />
            </AnomalyTablePizza>

        )
    }
}

export default AnomalyTable;
