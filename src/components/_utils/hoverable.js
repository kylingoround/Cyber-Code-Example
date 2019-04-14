import React, {Component} from 'react'
import styled from 'styled-components'

class Toggleable extends Component {
    state = { show: false }
    toggle = (event) => {
        event.preventDefault()
        this.setState(prevState => ({ show: !prevState.show }))
    }
    render() {
        return this.props.children(this.state.expand, this.toggle)
    }
}

const TooltipPizza = styled.div`
    width: 200px;
    height: 200px;
    background-color: red;
`

// const Toggleable = props => {
//     state = { show: false}
//     toggle = event => {
//         event.preventDefault() // in case used in buttons
//         this.setState(prevState => ({ show: !prevState.show }))
//     }
//     return props.children(this.state.show, this.toggle)
// }

const TooltipDiv = props => 
    <TooltipPizza>
        <div>Something to show here</div>
    </TooltipPizza>

const Hoverable = props =>
    <Toggleable>
        {(show, onHover) => (
            <>
                <div onHover={onHover}>
                    {/* <div>Nope</div> */}
                    {props.children}
                </div>
                { 
                    show && 
                    <TooltipDiv 
                        tooltipData={props.data}
                    />
                }
            </>
        )}
    </Toggleable>

// use:
// <Hoverable tooltipData={data}>
//     <TableCell />
// </Hoverable>

export default Hoverable