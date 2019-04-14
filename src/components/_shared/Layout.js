import React, {Component} from 'react'
import styled from 'styled-components'

// import TopNav from './TopNav'
import TopnavCon from "../../redux/containers/TopnavCon"

import NodeProfile from "../_shared/NodeProfile"

const LayoutPizza=styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    position: absolute;
    background-color: #000000;
    color: white;
`

class Layout extends Component {
    state = {
        searchParameters: {
            startDate: '',
            endDate: '',
            entities: [] // selected notes
        },
        showNodeProfile: false,
    }
    handleSubmit = (event) => {
        alert('pineapple!')
        // console.log('pineapple')
        event.preventDefault();
    }
    // componentWillMount(){

    // }

    // handleSecondUpdate = event => {
    //     alert('banana')
    //     this.props.
    // }

    render() {
        return(
            <LayoutPizza>
                <TopnavCon handleSubmit={this.handleSubmit} update={this.props.update} />
                
                {this.props.children}
            </LayoutPizza>
        )
    }
}

export default Layout;
