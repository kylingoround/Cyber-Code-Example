import React, {Component} from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

const TopnavPizza = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content:space-round;
    width: 100%;
    padding-top: 15px;
    ${'' /* overflow: hidden; */}
`

const NavPizza = styled.div`
`

const LogoPizza = styled.div`
    margin-left: 35px;
    margin-right: 35px;
    font-size: 0.8em;
    font-family: 'IBM Plex Mono';
    color: #00ADC5;
`

const SearchPizza = styled.div`
    margin-left: 180px;
`

const SearchInput = styled.input`
    padding-left: 5px;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #2F2F2F;
    color: #696969;
`

const SearchBtn = styled.button`
    padding: 0;
    border: none;
    background: none;
    color: #696969;
    font-family: 'IBM Plex Mono'
`

class Topnav extends Component {

    render() {
        let linkStyles = {
            'margin-left' : '45px',
            'margin-right': '45px',
            'text-decoration': 'none',
            'color': 'white'
            }

        return (
            <TopnavPizza>

                <LogoPizza>SMART-i</LogoPizza>
                <NavPizza>
                    <span to='./listview' style={linkStyles}>LIST</span>
                    <span to='./departview' style={linkStyles}>DEPARTMENT</span>
                    <span to='./graphview' style={linkStyles}>GRAPH</span>
                </NavPizza>
                <SearchPizza>
                    <SearchInput type='text' name='search_id' value='SEARCH...' ></SearchInput>
                    {/* <button>ADD</button> */}
                    <SearchInput type='text' name='search_id' value='START' ></SearchInput>
                    <SearchInput type='text' name='search_id' value='END' ></SearchInput>
                    <SearchBtn>SEARCH</SearchBtn>
                </SearchPizza>

            </TopnavPizza>
        )
    }
}

export default Topnav
