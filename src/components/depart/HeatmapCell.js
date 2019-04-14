import React, {Component} from 'react'
import styled from 'styled-components'

import ReactTooltip from 'react-tooltip'
import jie_fake_data from "../../data/jie/infoView"
import $ from 'jquery';
const TooltipPizza = styled.div`
  text-align: left;
`
const HeatmapPizza = styled.div`
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  margin: 5px;
  padding: 5px
`

class HeatmapCell extends Component {
    constructor(props, context) {
      super(props, context);
    }
    state = {
      class: 'heatMapCell',

      maxDisplayNum: 50,

      width:300,
      height:150,

      rectSize: 25,
      rectGap: 5,
      maxCols: 10,
      maxRows: 5,

      data: this.props.children
    }

    calculateRectPos_Init() {
      let rectRadius = this.state.rectSize;
      let gap = this.state.rectGap;

      const maxCols = this.state.maxCols; // vertical
      const maxRows = this.state.maxRows;  // horizontal

      // let maxWidth = (rectRadius + gap) * maxCols;
      // let maxHeight = (rectRadius + gap) * maxRows;

      // maxDisplayedNum = maxCols * maxRows;

      let tempPosList = [];

      for(var i=0; i<maxCols; i++) {
        for (var j=0; j<maxRows; j++) {
          let tempPos = {
            x: (rectRadius + gap)* i + gap/2,
            y: (rectRadius + gap)* j + gap/2
          }
          tempPosList.push(tempPos)
        }
      }

      return tempPosList
      // console.log(tempPosList);
    }
    handleClick = id => {
      // alert(id)
      // let data={
      //   id: id,
      //   data: jie_fake_data
      // }
      // this.props.NodeProfileAction(data);
      // this.props.NodeProfileShowAction();

      let start=this.props.GeneralSearchReducer["start"];
      let end=this.props.GeneralSearchReducer["end"];
      let url = "/infoview?entity="+id+"&start_date=" + start + "&end_date=" + end;
      alert(url)
        $.ajax({
          url: url,
          type: "GET",
          success: function(data){
              alert("Success!")
              data = JSON.parse(data);
              let temp_data={
                id: id,
                data: data
              };
              this.props.NodeProfileAction(temp_data);
              this.props.NodeProfileShowAction();
          }.bind(this),
          error: function(xhr, status, err){
              alert("Failed!")
          }
      });


    }
    drawD3() {
      let data=this.props.DeptReducer.departments[this.props.id].entities;
      let limitedPpl = data.slice(0, this.state.maxDisplayNum);
      let preCalculatedPos = this.calculateRectPos_Init();

      let rects = [];
      while(limitedPpl.length<50){
        limitedPpl.push({
          "id":"",
          "label": "",
          "score": "",
          "num_alerts": "",
          "severity": "",
          "display": "none"
        })
      }
      limitedPpl.forEach(
        (el, i) => {
          let attrsFn = (d, i) => {
            if(d.display===undefined){
              d.display="block"
            }
            // if(d.style===undefined || d.style){
            //   d.style="display:";
            // }
            // var r = d.score<50 ? 255 : Math.floor(255-(d.score*2-100)*255/100);
            // var g = d.score>50 ? 255 : Math.floor((d.score*2)*255/100);
            // var color= 'rgb('+r+','+g+',0)';

            let color
            // let num = Math.floor(Math.random()*4)
            let num=d.severity;
            // console.log(num)

            switch(num) {
              case 0:
                color='#33cc33'
                break
              case 1:
                color='#ffff00'
                break
              case 2:
                color='#ff9933'
                break
              case 3:
                color='#ff0000'
                break
              default:
                // console.log('bad severity');
                // console.log(d)
                color='rgb(255,255,255)'
            }

            // let color='rgb(255,255,255)'
            let attrs = {
              id: d.id,
              label: d.label,
              score: d.score,
              num_alerts: d.num_alerts,
              severity: d.severity,
              width: this.state.rectSize,
              height: this.state.rectSize,
              // fill: `rgb(${255 - d.score*2}, 0, 0)`,
              fill: color,
              x: preCalculatedPos[i].x,
              y: preCalculatedPos[i].y
            }
            return (attrs)
          }
          // console.log(el)
          // let tooltipMsg =
          let rect =
            <rect
              // data-tip='( •̀д•́)'
              data-tip={
                JSON.stringify(el)
              }
              onClick={()=>this.handleClick(el.id)}
              style={{"display":el.display}}
              // data-for='svgTooltip'
              {...attrsFn(el, i)}
            ></rect>

          rects.push(rect)
        }
      )

      return( rects )
    }

    render () {
      // console.log(this.props);
      // console.log(this.props.DeptReducer);
      return (
        <HeatmapPizza className={this.state.class} style={
          {background: this.props.DeptReducer.departments[this.props.id].color,
          display: this.props.DeptReducer.departments[this.props.id].display,
          height:"250px"}
        }>
          <h3 style={{background: this.props.TestReducer}}>{this.props.DeptReducer.departments[this.props.id].id}</h3>

          <svg className = 'hmCellContainer'
            width = {this.state.width}
            height = {this.state.height}
          >
            {this.drawD3()}
          </svg>
          <p><b style={{"float":"right"}}>
          {this.props.DeptReducer.departments[this.props.id].num_entities_with_anomalies}/
          {this.props.DeptReducer.departments[this.props.id].size}
          </b></p>
          <ReactTooltip

            getContent={
              data => {
                let content;
                data = JSON.parse(data)
                if(data) {
                  // console.log(data)
                  content=[
                    // <div>{data.id}</div>
                    <TooltipPizza>
                      <div>id: {data.id}</div>
                      <div>score: {data.score}</div>
                      <div>label: {data.label}</div>
                      <div>num_anomalies: {data.num_anomalies}</div>
                      <div>alert num: {data.num_alerts}</div>
                      <div>severity: {data.severity}</div>
                    </TooltipPizza>
                  ]
                } else {
                  content=[<div>bacon</div>]
                }
                return(
                  <>
                    {content}
                  </>
                )

              }
            }
          />

        </HeatmapPizza>
      )
    }
  }

  export default HeatmapCell
