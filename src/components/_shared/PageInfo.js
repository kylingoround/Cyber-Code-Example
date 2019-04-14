import React, {Component} from 'react'
import styled from 'styled-components'

const PagePizza = styled.div`
    margin-left: 2em;
    font-family: 'IBM Plex Mono';
    margin-top: 1em;
    margin-bottom: 1em
`
const PageTitle = styled.h2`
    margin-bottom: 5px;
`

const PageTime = styled.p`
    margin-bottom: 5px;
`

const PageBriefing = styled.p`
    
`

class PageIntro extends Component {
    render() {
        return (
            <PagePizza>
                <PageTitle>{this.props.children.title}</PageTitle>
                {/* <PageTime>{this.props.children.timeRange}</PageTime> */}
                {/* <PageBriefing>{this.props.children.briefing}</PageBriefing> */}
                <PageBriefing>Start: {this.props.start} - End: {this.props.end}</PageBriefing>
            </PagePizza>
        )
    }
}  

export default PageIntro;