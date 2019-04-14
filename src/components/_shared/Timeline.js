import React, {Component} from 'react'
import styled from 'styled-components'

const TimeSlider = styled.input`
    width: 96%;
    position: absolute;
    bottom: 8%;
    outline: none;
`

const TimePizza = styled.div`
    marginTop: 1em;
    width: 100%;
    display: flex;
    justifyContent: center;
`

class Timeline extends Component {
    render() {
        return(
            <TimePizza>
                <TimeSlider type="range" defaultValue={0} step="1" min={1} max={100} onChange={(event) =>  console.log(event)}></TimeSlider>
            </TimePizza>
        )
    }
}

export default Timeline;