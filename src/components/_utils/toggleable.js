import React, {Component} from 'react'

class Toggleable extends Component {
    state = { expand: false }
    toggle = (event) => {
        event.preventDefault()
        this.setState(prevState => ({ expand: !prevState.expand }))
    }
    render() {
        return this.props.children(this.state.expand, this.toggle)
    }
}



// <ToggleableWrapper display={<Component1 />} hidden={<Component2 />} />

// const ToggleableWrapper = props => 
//         <Toggle_able>
//             {( expand, onClick ) => (
//                 <>
//                     <div onClick={onClick}>
//                         {props.display}
//                     </div>
//                     { expand && props.hidden }
//                 </>
//             )}
//         </Toggle_able>



export default Toggleable