import React, {Component} from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import * as d3 from 'd3';
import "d3-selection-multi";

import Layout from './layout'
import TimelineCon from '../redux/containers/TimelineCon'
import HeatmapCellCon from '../redux/containers/HeatmapCellCon'
import HeatmapGroupCon from '../redux/containers/HeatmapGroupCon'

// TODO
// - add flexbox and horizontal-overflow to depart
// - add click to heatmapCell
// - add hovertooltip to rect

const PageTitle = styled.h1`
  font-family: 'IBM PLex Mono';
  margin-left: 2%;
  margin-bottom: 5px
`

const PageText = styled.p`
`

// const HeatmapPizza = styled.div`
//   border-style: solid;
//   border-width: 2px;
//   display: inline-block;
//   margin: 5px;
//   padding: 5px
// `

// class HeatmapCell extends Component {
//   state = {
//     class: 'heatMapCell',

//     maxDisplayNum: 50,

//     width:300,
//     height:150,

//     rectSize: 25,
//     rectGap: 5,
//     maxCols: 10,
//     maxRows: 5,

//     data: this.props.children
//   }
//   componentWillReceiveProps(nextProps) {
//     // console.log("entered");
//     if(this.props !== nextProps)
//       console.log("entered");
//   }
//   calculateRectPos_Init() {
//     let rectRadius = this.state.rectSize;
//     let gap = this.state.rectGap;

//     const maxCols = this.state.maxCols; // vertical
//     const maxRows = this.state.maxRows;  // horizontal

//     // let maxWidth = (rectRadius + gap) * maxCols;
//     // let maxHeight = (rectRadius + gap) * maxRows;

//     // maxDisplayedNum = maxCols * maxRows;

//     let tempPosList = [];

//     for(var i=0; i<maxCols; i++) {
//       for (var j=0; j<maxRows; j++) {
//         let tempPos = {
//           x: (rectRadius + gap)* i + gap/2,
//           y: (rectRadius + gap)* j + gap/2
//         }
//         tempPosList.push(tempPos)
//       }
//     }

//     return tempPosList
//     // console.log(tempPosList);
//   }

//   drawD3() {

//     // let cellWidth = this.state.maxCols * (this.rectSize + this.rectGap)
//     // let cellHeight = cellWidth;
//     //
//     let data = this.props.dataMap[0].departments.entities;
//     // console.log(data);
//     // let data = this.state.data;
//     // console.log(data);
//     let limitedPpl = data.slice(0, this.state.maxDisplayNum);
//     let preCalculatedPos = this.calculateRectPos_Init();

//     let rects = [];

//     limitedPpl.forEach(
//       (el, i) => {
//         let attrsFn = (d, i) => {
//           let attrs = {
//             width: this.state.rectSize,
//             height: this.state.rectSize,
//             fill: `rgb(${255 - d.score*2}, 0, 0)`,
//             x: preCalculatedPos[i].x,
//             y: preCalculatedPos[i].y
//           }
//           return (attrs)
//         }
//         let rect = <rect {...attrsFn(el, i)}></rect>
//         rects.push(rect)
//       }
//     )

//     return( rects )
//   }

//   render () {
//     return (
//       <HeatmapPizza className={this.state.class}>
//         <h3>Department Name</h3>
//         <p>Score</p>
//         <svg className = 'hmCellContainer'
//           width = {this.state.width}
//           height = {this.state.height}
//         >
//           {this.drawD3()}
//         </svg>
//       </HeatmapPizza>
//     )
//   }
// }

// DepartPizza css wrapper

// class HeatmapGroup extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       id: 'departGroup',
//       data: []
//     }
//   }
//   componentWillReceiveProps(nextProps) {
//     alert("changed");
//       if(this.props!==nextProps)
//       {

//       }
//   }
//   componentDidMount () {
//     // replace with ajax
//     // console.log(this.props.dataMap);
//     this.setState( {data:fakeDepartData} )
//   }

//   drawDeparts = () => {
//     // let data = this.state.data;
//     let data = this.props.dataMap;
//     console.log(data);
//     // console.log(this.props.FirstReducer);
//     let tempChildren = [];
//     if (data) {
//       data.forEach(
//         (d, i) => {
//           tempChildren.push([<HeatmapCellCon dataMap={this.props.dataMap}>{d.departments.entities}</HeatmapCellCon>])
//         }
//       )
//     } else {
//       console.log('pancake')
//     }
//     // console.log(tempChildren)
//     return (
//       tempChildren
//     )
//   }

//   render() {
//     return (
//       <HeatmapGroupPizza className={this.state.class}>
//         {this.drawDeparts()}
//       </HeatmapGroupPizza>)
//   }
// }

let divStyles = {
  'margin-top': '2%',
  'margin-bottom': '1%'
}

let textStyles = {
  // 'margin-top': '0',
  'margin-bottom': '5px',
  'margin-left': '2%',
  'font-family': 'IBM Plex Mono'
  // 'margin-top': '2%,
}

class DepartView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: 'departGroup',
      data: []
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log("entered");
    if(this.props !== nextProps)
      console.log("entered");
  }
  componentDidMount(){
    console.log(this.props.FirstReducer);
  }
  render() {
    return (
        <Layout>
          <div className='layoutPizza'>
            <div style={divStyles}>
              <h2 style={textStyles}>DEPARTMENT MAP</h2>
              <p style={textStyles}>{this.props.DateReducer}</p>
              <p style={textStyles}></p>
            </div>
            <HeatmapGroupCon dataMap={this.props.FirstReducer}>DepartPizza</HeatmapGroupCon>
            <TimelineCon/>
          </div>
        </Layout>)
  }
}

// const DepartView = () => (
//   <Layout>
//     <div className='layoutPizza'>
//       <div style={divStyles}>
//       <h2 style={textStyles}>DEPARTMENT MAP</h2>
//       <p style={textStyles}>07-14-2018 - 07-14-2018</p>
//       <p style={textStyles}>Briefing Messages.</p>
//       </div>
//       <HeatmapGroup>DepartPizza</HeatmapGroup>
//       <TimelineCon/>
//     </div>
//   </Layout>
// )

export default DepartView

// ---

const hmCellData = [
  {
    depart_id: 'depart1',
    ppl: [
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
      { name:'person1', score: '25' },
      { name:'person1', score: '75' },
      { name:'person1', score: '55' },
      { name:'person1', score: '35' },
      { name:'person1', score: '25' },
    ]
  }
]

const fakeDepartData = [
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 93, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 43, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 53, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 83, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  },
  {
    date: 'date!',
    cycle: 'cycle!',
    departments: {
      id: ' ',
      score: ' ',
      severity: 2,
      entities: [
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 },
        { id: 'pplId', label: 'pplLabel', score: 23, num_alerts: 10, severity: 4 }
      ]
    }
  }
]
