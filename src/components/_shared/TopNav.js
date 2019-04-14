import React, {Component} from 'react'
import styled from 'styled-components'
import {Router, Link} from '@reach/router'
import {Grid, Cell} from 'styled-css-grid'
// import $ from 'jquery';
// date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"; 
import $ from 'jquery'

import SelectedNodes from './Selected'

// import fake data
// import general_graph from './../../data/static/fake_general_graph'
// import jie_fake_list from '../../data/jie/listView'

// TODO:
// - add static

// const ExtendedCell=styled(Cell)`
//     wrap: 
// `

const StyledDatePicker=styled(DatePicker)`
    ${'' /* color: #696969 !important; */}
    border: none;
    padding-left: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #2F2F2F;
    color:white;
`

// add dynamic link
const NavLink=styled(Link)`
    margin-left: 1em;
    margin-right: 1em;
    text-decoration: none;
    color: white;
`

const TopnavPizza=styled.div`
    font-size: 0.8em;
    padding: 1em 2.5em 1em 2.5em;
    z-index: 99
`

const NavPizza=styled.div` `

const SiteLogoPizza=styled.div`
    font-family: 'IBM Plex Mono';
    color: #00ADC5;
`

const SearchForm = styled.form`
    margin-bottom: 0;
    display: flex;
    float: right;
`

const SearchBtn = styled.button`
    padding: 0, 1em, 0, 1em;
    border: none;
    background: none;
    color: #696969;
    font-family: 'IBM Plex Mono'
`

const SearchInput = styled.input`
    padding-left: 5px;
    border: none;
    color:white;
    ${'' /* margin-left: 5px;
    margin-right: 5px; */}
    background-color: transparent; 
    ${'' /* border: none; */}
    ${'' /* background-color: #2F2F2F; */}
    ${'' /* color: #696969; */}
`

const FlexForm = styled.form`
    margin-left: 5px;
    margin-right: 5px;

    padding-right: 5px;

    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 0;
    background-color: #2F2F2F;
`

////////////////////////////////////////////////

class TopNav extends Component {
    constructor(props, context) {
        super(props, context);
    }
    state = {
        start: 'START',
        end: 'END',
        searchDepart: 'DEPART',
        searchEntity: 'ENTITY',

        selectedEntities: [],
        selectedDeparts: [],

        showSelected: false,
        testData: {}
    }

    componentWillMount(){
        let url_info=this.props.GeneralSearchReducer;

        let start = url_info.start;
        let end = url_info.end;
        let depart = url_info.depart;
        let entity = url_info.entity;

        this.setState({
            start: start,
            end: end,
            selectedEntities: entity,
            selectedDeparts: depart
        })
    }
    handleInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value })
    }

    handleStartChange(date) {       
        var format_date=moment(date).format("YYYYMMDD");
        this.setState({
            startDate: date,
            realStart: format_date
          });
          let temp_all = {

            start: format_date,
            end: this.state.realEnd,

            depart: this.state.selectedDeparts,
            entity: this.state.selectedEntities
        }   
        this.props.SearchInputAction(temp_all);
    }

    handleEndChange(date) {
        let format_date=moment(date).format("YYYYMMDD");
        this.setState({
            endDate: date,
            realEnd: format_date
        });
        let temp_all = {

            start: this.state.realStart,
            end: format_date,

            depart: this.state.selectedDeparts,
            entity: this.state.selectedEntities
        }   
        this.props.SearchInputAction(temp_all);
    }

    handleSubmit = event => {
        event.preventDefault()
        let temp = {

            start: this.state.realStart,
            end: this.state.realEnd,

            depart: this.state.selectedDeparts,
            entity: this.state.selectedEntities
            // depart: this.state.searchInput,
            // entity: this.state.searchEntity
        }   
        // alert("start");
        
        // $("output").css({left: "0px"})
        // alert("end");
        this.props.SearchInputAction(temp);
        // this.props.TimemaxAction(1);
        // alert(JSON.stringify(this.props))
        // alert("sample:" + JSON.stringify(temp));
        this.props.update(temp)
        // alert('click')
    }

    handleSelected = event => {
        event.preventDefault();
    }

    deduplicate = arr => {
        // xie xie niu bi de btong 
        let set = new Set(arr)
        return Array.from(set)
    }

    handleDepartAdd = (id) => {
        let temp = this.state.selectedDeparts.concat(id)
        temp = this.deduplicate(temp)
        this.setState({
            selectedDeparts:temp
        })

        let temp_all = {

            start: this.state.realStart,
            end: this.state.realEnd,

            depart: temp,
            entity: this.state.selectedEntities
        }   
        this.props.SearchInputAction(temp_all);

        console.log(this.state.selectedDeparts)
    }

    handleEntityAdd = (id) => {
        let temp = this.state.selectedEntities.concat(id)
        temp = this.deduplicate(temp)
        this.setState({
            selectedEntities:temp
        })
        let temp_all = {

            start: this.state.realStart,
            end: this.state.realEnd,

            depart: this.state.selectedDeparts,
            entity: temp
        }   
        this.props.SearchInputAction(temp_all);
        console.log(this.state.selectedEntities)
    }

    deleteEntity = id => {
        // alert(id)
        if (id) {
            let arr = this.state.selectedEntities
            let index = arr.indexOf(id)

            // console.log('bacon')
            // console.log(this.state.selectedEntities)

            arr.splice(index, 1)
            this.setState({selectedEntities: arr})

            let temp_all = {

                start: this.state.realStart,
                end: this.state.realEnd,
    
                depart: this.state.selectedDeparts,
                entity: arr
            }   
            this.props.SearchInputAction(temp_all);
        } else {
            alert('banana')
        }
    }

    deleteDepart = id => {
        if (id) {
            let arr = this.state.selectedDeparts
            let index = arr.indexOf(id)
            arr.splice(index, 1)
            this.setState({selectedDeparts: arr})
            let temp_all = {

                start: this.state.realStart,
                end: this.state.realEnd,
    
                depart: arr,
                entity: this.state.selectedEntities
            }   
            this.props.SearchInputAction(temp_all);
        } else {
            alert('potato')
        }
    }

    render(){
        // console.log(this.props)
        return (
        <TopnavPizza>
            <Grid columns={7}>
                <Cell 
                    middle 
                    width={1}>
                    <SiteLogoPizza>SMART-i</SiteLogoPizza>
                </Cell>

                <Cell 
                    middle 
                    width={1}>
                <NavPizza>
                    <NavLink to='/list'>LIST</NavLink>
                    <NavLink to='/depart'>DEPART</NavLink>
                    <NavLink to='/graph'>GRAPH</NavLink>
                </NavPizza>
                </Cell>

                <Cell 
                    right 
                    width={5}>
                    <SearchForm>

                        <FlexForm>

                            <SearchInput type='text' name='searchEntity' onChange=  {this.handleInput} value={this.state.searchEntity} />

                            <div
                                onClick={() => this.handleEntityAdd(this.state.searchEntity)}
                            >ADD</div>

                        </FlexForm>

                        <FlexForm>

                            <SearchInput type='text' name='searchDepart' onChange={this.handleInput} value={this.state.searchDepart} />

                            <div 
                                onClick={() => this.handleDepartAdd(this.state.searchDepart)}
                            >ADD</div>

                        </FlexForm>

                        <StyledDatePicker
                            selected={this.state.startDate}
                            onChange={(date)=>this.handleStartChange(date)}
                            placeholderText="START DATE"
                        />

                        <StyledDatePicker
                            selected={this.state.endDate}
                            onChange={(date)=>this.handleEndChange(date)}
                            placeholderText="END DATE"
                        />

                        <SearchBtn 
                            // onClick={this.props.handleSubmit}
                            onClick={this.handleSubmit}
                        >SEARCH</SearchBtn>

                         <SelectedNodes
                                nodes={this.state.selectedNodes}
                                data={
                                    {
                                        departs: this.state.selectedDeparts,
                                        entities: this.state.selectedEntities
                                    }
                                }
                                deleteEntity={this.deleteEntity}
                                deleteDepart={this.deleteDepart}
                                // updateNodes={}
                        />

                    </SearchForm>
                </Cell>
                {/* <Cell
                    width={1}
                >
                    <SearchBtn 
                        onClick={this.handleSubmit}
                    >SEARCH</SearchBtn>

                    <SelectedNodes
                        nodes={this.state.selectedNodes}
                    />
                    
                </Cell> */}
            </Grid>
        </TopnavPizza>)
    }
}


export default TopNav;