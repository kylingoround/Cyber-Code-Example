import React, {Component} from 'react'
import styled from 'styled-components'
import $ from 'jquery';
import {sliderLabel} from './sliderOutput';
require('./sliderOutput.css');

// to-do
// ticks
// apperance
// timestamp

const TimeSlider = styled.input`
    ${'' /* -webkit-appearance: none; */}
    width: 96%;
    position: absolute;
    bottom: 8%;
    outline: none;

    ${'' /* -webkit-appearance: none; */}
    ${'' /* justify-content: center; */}
    ${'' /* margin: auto; */}
`

const TimePizza = styled.div`
    marginTop: 1em;
    width: 100%;
    display: flex;
    justifyContent: center;
`

class Timeline extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            min:1,
            max:10
        }
    }
    inputRanger(value){
      this.props.RangerAction(value);
    }
    activateLabelBind(){
        // console.log("again")
        var el, newPoint, newPlace, offset, width;
        const {general_graph} = this.state;
        const {TimeValReducer, StartEndDateReducer} = this.props;

        // Select all range inputs, watch for change
        $("input[type='range']").change(function() {
            console.log("again")
             // Cache this for efficiency
             el = $(this);

             // Measure width of range input
             width = el.width();

             // Figure out placement percentage between left and right of input
            el.val(TimeValReducer);
             newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

              offset = -1;
             var bias = width * 0.03 + 30;

             // Prevent bubble from going beyond left or right (unsupported browsers)
             if (newPoint < 0) { newPlace = - bias; }
             else if (newPoint > 1) { newPlace = width + bias; }
             else { newPlace = width * newPoint + bias; offset -= newPoint; }

            // console.log(newPlace, offset,typeof general_graph.time_graphs[el.val()] === "undefined")
            // "value = {Date: this.props.StartEndDateReducer[date][this.props.TimeReducer].date\nCycle: this.props.StartEndDateReducer[date][this.props.TimeReducer].cycle\n};"></output>
            // StartEndDateReducer[date][this.props.TimeReducer].date
            // var dLabel = typeof general_graph.time_graphs[el.val()] === "undefined"? 'null': general_graph.time_graphs[el.val()].date,
            //     dCycle = typeof general_graph.time_graphs[el.val()] === 'undefined'? 'null': general_graph.time_graphs[el.val()].cycle;
            // console.log(StartEndDateReducer);
            var dLabel=StartEndDateReducer["dates"][TimeValReducer].date;
            var dCycle=StartEndDateReducer["dates"][TimeValReducer].cycle;

            console.log(dLabel, dCycle, this.T, "new place: ", newPlace, "offset: ",offset, "e.val(): ", el.val());
             // Move bubble
             el
               .next("output")
               .css({
                 left: Number.isNaN(newPlace)? 50:newPlace-57,
                 marginLeft: offset + "%"
               })
                 .text('\n' + dLabel + '\n' + dCycle);
             })
             // Fake a change to position bubble at page load
             .trigger('change');
      }
    render() {
        return(
            <TimePizza>
                <label for="happy" style={{"position":"absolute","left":"0", "bottom":"50px","width":"140px","color":"white"}}>{this.props.StartEndDateReducer["start"]["date"]+":"+this.props.StartEndDateReducer["start"]["cycle"]}</label>
                <label for="" style={{"position":"absolute","right":"4%", "bottom":"50px","width":"140px","color":"white"}}>{this.props.StartEndDateReducer["end"]["date"]+":"+this.props.StartEndDateReducer["end"]["cycle"]}</label>
                <TimeSlider
                  type="range"
                  defaultValue={0}
                  value={this.props.TimeValReducer}
                  step={1}
                  min={0}
                  max={this.props.TimeReducer}
                  onChange={(event) => this.inputRanger(event.target.value)}></TimeSlider>
                  <output for="sliderOutput"
                      id="depart_output"
                      onforminput=
                      "value='';"></output>
                  {this.activateLabelBind()}
            </TimePizza>
        )
    }
}

export default Timeline
