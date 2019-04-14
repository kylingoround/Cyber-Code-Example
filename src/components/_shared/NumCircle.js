import React, {Component} from 'react'
import styled from 'styled-components'

import TypeColorSwitchString from './../_utils/TypeColorSwitchString'

const StyledSvg = styled.svg.attrs({

})`

    shape-rendering:geometricPrecision;
    text-rendering:geometricPrecision;

    margin-left: 0.3em;

    transform: translateY(${props => props.svg_offsetY}%)
`

const StyledCircle = styled.circle`
    ${ props => 'fill:'+TypeColorSwitchString(props.type)}
`

const radius = 7
const viewbox_width = radius*2
const svgWidth = (radius*2).toString() + "px"

let scale=1;
let text_offset=5;
let svg_offsetY=0;
let text_modifier = 1;

const NumCircle = props => {
// class NumCircle extends Component {

    // state = {
    //     scale: 1,
    //     text_offset: 5,
    //     svg_offsetY: 0,
    // }

    if(props.scale) {
        scale = props.scale
    }

    if(props.text_offset) {
        text_offset=props.text_offset
    }
    if(props.svg_offsetY) {
        svg_offsetY=props.svg_offsetY
    }
    if(props.text_modifier) {
        text_modifier = props.text_modifier
    }

    // render() {
        return(
            <StyledSvg
                // viewBox={radius => "0 0 " + "radius" + " " + "radius"}
                viewBox={"0 0 " + (viewbox_width*props.scale).toString() + " " + (viewbox_width*scale).toString()}
                xmlns="http://www.w3.org/2000/svg" 
                width={svgWidth}
                height={svgWidth}
                svg_offsetY={svg_offsetY}
            >
                <StyledCircle
                    // cx={radius}
                    // cy={radius}
                    cx="50%"
                    cy="50%"
                    // r={radius}
                    r={(radius*scale).toString()}
                    type={props.type}
                >
            
                </StyledCircle>
                <text
                    x="50%" 
                    // y="55%" 
                    y={(50 + text_offset).toString() + "%"}
                    //dy=".1em" 
                    text-anchor="middle" 
                    alignment-baseline="middle"
                    // font-size={(text_modifier*0.3).toString() + "em"}
                    font-size={ ( ( props.text_modifier || 1 ) *0.5 ).toString() + "em" }
                    // font-size="1rem"
                >
                    {props.children}
                </text>
            </StyledSvg>
        )
    }
// }

export default NumCircle;